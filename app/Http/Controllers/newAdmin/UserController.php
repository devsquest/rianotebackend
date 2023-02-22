<?php

namespace App\Http\Controllers\newAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::where('isAdmin', 0)->get();
        return view('admin_new.users.list_users', compact('users'));
    }
    public function create()
    {
        return view('admin_new.users.add_user');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|unique:users|max:255',
            'password' => 'required|min:6',
            'profile_picture' => 'nullable|mimes:jpeg,jpg,png,gif,svg|max:8000',
        ]);
        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'signature' => $request->signature,
            'password' => Hash::make($request->password),
            'isAdmin' => 0,
        ];
        if (isset($request->status)) {
            $data['status'] = 1;
        } else {
            $data['status'] = 0;
        }
        if (isset($request->profile_picture)) {
            $profile_picture_name = time() . '_' . rand(100, 999) . '.' . $request->profile_picture->extension();
            $request->profile_picture->move(public_path('/uploads/images/'), $profile_picture_name);
            $data['profile_picture'] = $profile_picture_name;
        }
        $user = User::create($data);
        return back()->with('success','User Created Successfully.');
    }
    public function edit($id)
    {
        $user = User::find($id);
        return view('admin_new.users.edit_user', compact('id', 'user'));
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|max:255|unique:users,email,'.$id,
            'profile_picture' => 'nullable|mimes:jpeg,jpg,png,gif,svg|max:8000',
        ]);
        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'signature' => $request->signature,
        ];
        if (isset($request->status)) {
            $data['status'] = 1;
        } else {
            $data['status'] = 0;
        }
        if (isset($request->profile_picture)) {
            $profile_picture_name = time() . '_' . rand(100, 999) . '.' . $request->profile_picture->extension();
            $request->profile_picture->move(public_path('/uploads/images/'), $profile_picture_name);
            $data['profile_picture'] = $profile_picture_name;
        }
        $user = User::find($id)->update($data);
        return back()->with('success','User Updated Successfully.');
    }
}
