<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\ActiveSubscription;
use App\Models\Subscription;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Hash;
use Validator;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserController extends Controller
{
    public $successStatus = 200;
    /**
     * login api
     *
     * @return JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        if (Auth::attempt(['email' => request('email'), 'password' => request('password'), 'status' => 1])) {
            $user = Auth::user();
            $token =  $user->createToken('MyApp')->plainTextToken;
            $response = ['status' => 'success', 'msg' => 'Login successfully!', 'data' => ['token' => $token, 'user' => $user]];
            return response()->json($response, $this->successStatus);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }
    /**
     * Register api
     *
     * @return JsonResponse
     */
    public function register(Request $request)
    {
        $request->validate([
            'package' => 'required',
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'signature' => 'required',
            'password' => 'required|min:6',
        ]);
        $input = $request->all();
        $input['subscription_code'] = $this->generateRandomString(15);
        $input['subscription_code_verified'] = 0;
        $input['password'] = Hash::make($input['password']);
        $user = User::create($input);
        $sub = Subscription::where('stripe_price_id', $input['package'])->first();

        $activeSubscription = ActiveSubscription::create([
            "subscription_id" => $sub->id,
            "user_id" => $user->id,
            "price" => $sub->price,
            "duration" => $sub->duration,
            "status" => "pending",
            "start" => null,
            "end" => null,
        ]);
        $token =  $user->createToken('MyApp')->plainTextToken;
        $response = ['status' => 'success', 'msg' => 'Register successfully!', 'data' => ['token' => $token, 'user' => $user]];
        return response()->json($response, $this->successStatus);
    }
    /**
     * details api
     *
     * @return JsonResponse
     */
    public function details()
    {
        $user = Auth::user();
        return response()->json(['user' => $user], $this->successStatus);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function updateUser(Request $request)
    {
        $data = $request->all();
        if (isset($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        }
        $user = User::find(Auth::user()->id)->update($data);
        $response = ['status' => 'success', 'msg' => 'Successfully updated', 'data' => ['user' => $user]];
        return response()->json($response, $this->successStatus);
    }
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        $response = ['status' => 'success', 'msg' => 'Logout successfully'];
        return response()->json($response, $this->successStatus);
    }
    public function updateKeywords(Request $request)
    {
        $user = User::find(Auth::user()->id)->update([$request->type => $request->id]);
        return $user;
    }
    public function createSampleData($user_id)
    {
        $now =  Carbon::now();
        $cloned_user_id = 2;
        // $data_notes = [
        //     ["name" => "Basic Notes", "status" => 1, "user_id" => $user_id, "created_at" => $now, "updated_at" => $now],
        //     ["name" => "Treatment Plan", "status" => 1, "user_id" => $user_id, "created_at" => $now, "updated_at" => $now]
        // ];
        // DB::table('notes')->insert($data_notes);
        $note_ids = DB::table('notes')->where('user_id', $user_id)->get()->pluck("id");
        return $note_ids;
    }
    private function generateRandomString($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
    public function verifyPayment(Request $request)
    {
        $user = Auth::user();
        if ($user->subscription_code_verified == 0 || $user->subscription_code_verified == null) {
            if ($request->subscription_code ==  $user->subscription_code) {
                User::find($user->id)->update(['subscription_code_verified' => 1]);
                $actived_subscription = ActiveSubscription::where('user_id', $user->id)->orderBy('id', 'DESC')->first();
                $start = Carbon::now();
                $end = Carbon::now()->addMonths($actived_subscription->duration);
                $actived_subscription->update([
                    "status" => "active",
                    "start" => $start,
                    "end" => $end,
                ]);
                $response = ['status' => 'success', 'msg' => 'Subscription activated', 'data' => []];
                return response()->json($response, $this->successStatus);
            } else {
                $response = ['status' => 'fail', 'msg' => 'Already Verified', 'data' => []];
                return response()->json($response, $this->successStatus);
            }
        } else {
            $response = ['status' => 'fail', 'msg' => 'Already Verified', 'data' => []];
            return response()->json($response, $this->successStatus);
        }
    }
    public function activeSubscriptions()
    {
        $subscriptions = ActiveSubscription::where('user_id', Auth::user()->id)->with('subscription')->orderBy('id', 'DESC')->get();
        $response = ['status' => 'success', 'msg' => 'Active Subscriptions', 'data' => ['subscriptions' => $subscriptions]];
        return response()->json($response, $this->successStatus);
    }
}
