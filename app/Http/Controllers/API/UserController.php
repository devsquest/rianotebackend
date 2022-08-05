<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Validator;

class UserController extends Controller
{
    public $successStatus = 200;
    /**
     * login api
     *
     * @return JsonResponse
     */
    public function login()
    {
        $validator = Validator::make(request()->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
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
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
        return response()->json(['success' => $success], $this->successStatus);
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
        if(isset($data['password'])){
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
}
