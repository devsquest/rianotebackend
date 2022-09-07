@extends('admin.layouts.app')
@section('title', 'Users')
@section('content')
<div class="page-content">
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0 font-size-18">Users</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">User Management</a></li>
                            <li class="breadcrumb-item active">Users</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>
        <!-- end page title -->

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title mb-4">
                            <a href="{{ route('admin.user_create') }}" class="btn btn-primary">Add User</a>
                        </h4>
                        <h4 class="card-title mb-4">Users Listing</h4>
                        <div class="table-responsive">
                            <table class="table align-middle table-nowrap mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="align-middle">Name</th>
                                        <th class="align-middle">Email</th>
                                        <th class="align-middle">Status</th>
                                        <th class="align-middle">Signature</th>
                                        <th class="align-middle">Profile</th>
                                        <th class="align-middle">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($users as $user)
                                    <tr>
                                        <td><a href="javascript: void(0);" class="text-body fw-bold">{{ $user->name }}</a> </td>
                                        <td>{{ $user->email }}</td>
                                        <td>
                                            <span class="badge badge-pill badge-soft-success font-size-11">{{ $user->status == 1 ? 'Active' : 'Inactive'}}</span>
                                        </td>
                                        <td>{{ $user->signature }}</td>
                                        <td>
                                            <a target="_blank" href="{{ url($user->profile_picture) }}" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                Profile Picture
                                            </a>
                                        </td>
                                        <td>
                                            <a href="{{ route('admin.user_edit', $user->id) }}" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                Edit
                                            </a>
                                            <button type="button" class="btn btn-info btn-sm btn-rounded waves-effect waves-light">
                                                Data
                                            </button>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <!-- end table-responsive -->
                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->
    </div>
    <!-- container-fluid -->
</div>
@endsection