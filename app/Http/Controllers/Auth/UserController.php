<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\View\View;

class UserController extends Controller
{

    public function showRegistrationForm()
    {
        return view('auth.register', [
            'user' => Auth::user()
        ]);
    }
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data): \Illuminate\Contracts\Validation\Validator
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param Request $data
     * @return User|Application|Factory|View
     */
    protected function create(Request $data)
    {
        $data = $data->all();

        if ($data['password'] !== $data['password_confirmation']) {
            return redirect('admin/register')->with('status', 'Passwords Must Be Matched');
        }

        User::create([
            'name' => $data['firstname'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        return redirect('admin/register')->with('status', 'User Added Successfully');
    }

    /**
     * @return View
     */
    public function index(){
        $users = User::paginate(5);

        return view('users.list-users', [
            'users' => $users,
            'user' => Auth::user()
        ]);
    }

    /**
     * @param Request $request
     * @return Application|RedirectResponse|Redirector
     */
    public function saveNote(Request $request){
        $data = $request->all();
        $status = false;
        if($request->has('note-status')){
            $status = true;
        }

        Note::create([
            'name' => $data['note-name'],
            'status' => $status
        ]);

        return redirect('admin/note-list')->with('status', 'Note Has Been Inserted');
    }

    public function switchUserStatus($id) {
        $user = User::find($id);
        $user->status = ($user->status == 0 ? 1 : 0);
        $user->save();
        return redirect('admin/users-list')->with('status', "User's Status Has Been Updated Successfully");
    }

    public function editUser($id)
    {
        $user = User::find($id);

        return view('auth.register', [
            'user' => Auth::user(),
            'editableUser' => $user
        ]);
    }

    public function updateUser(Request $request, $id)
    {
        $data = $request->all();

        $user = User::find($id);
        $user->name = $data['firstname'];
        $user->email = $data['email'];
        $user->save();

        return redirect('admin/users-list')->with('status', 'User Has Been Updated');
    }
}
