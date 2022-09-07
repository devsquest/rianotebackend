@extends('admin.layouts.app')
@section('title', 'Edit User')
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
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Users</a></li>
                            <li class="breadcrumb-item active">Edit User</li>
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
                        <div class="row">
                            <div class="col-lg-12">
                                @if ($message = Session::get('success'))
                                <div class="alert alert-success alert-block">
                                    <button type="button" class="close" data-dismiss="alert">×</button>
                                    <strong>{{ $message }}</strong>
                                </div>
                                @endif
                            </div>
                            <div class="col-lg-12">
                                <h4 class="card-title mb-4">Add User</h4>
                            </div>
                            <div class="col-lg-12">
                                <form method="post" action="{{ route('admin.user_update', $id) }}" class="needs-validation" enctype="multipart/form-data">
                                    @csrf
                                    <div class="mb-3 row">
                                        <label for="name" class="col-md-2 col-form-label">Name</label>
                                        <div class="col-md-10">
                                            <input class="form-control" type="text" id="name" name="name" value="{{ $user->name }}" required>
                                            @if($errors->has('name'))
                                            <div class="invalid-feedback d-inline">
                                                {{ $errors->first('name') }}
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="email" class="col-md-2 col-form-label">Email</label>
                                        <div class="col-md-10">
                                            <input class="form-control" type="email" id="email" name="email" value="{{ $user->email }}" required>
                                            @if($errors->has('email'))
                                            <div class="invalid-feedback d-inline">
                                                {{ $errors->first('email') }}
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="signature" class="col-md-2 col-form-label">Signature</label>
                                        <div class="col-md-10">
                                            <input class="form-control" type="text" id="signature" name="signature" value="{{ $user->signature }}">
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="profile_picture" class="col-md-2 col-form-label">Profile</label>
                                        <div class="col-md-10">
                                            <input class="form-control" type="file" id="profile_picture" name="profile_picture">
                                            <div>
                                                <img src="{{ asset($user->profile_picture) }}" class="img-fluid" style="max-width: 100px">
                                            </div>
                                            @if($errors->has('profile_picture'))
                                            <div class="invalid-feedback d-inline">
                                                {{ $errors->first('profile_picture') }}
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="status" class="col-md-2 col-form-label">Status (Active)</label>
                                        <div class="col-md-10">
                                            <input class="form-check-input" type="checkbox" name="status" @if($user->status == 1) checked @endif>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <div class="col-12">
                                            <button class="btn btn-primary" type="submit">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end row -->
    </div>
    <!-- container-fluid -->
</div>
@endsection
@push('custom-js')
<script src="{{ asset('admin/assets/libs/parsleyjs/parsley.min.js') }}"></script>
<script src="{{ asset('admin/assets/js/pages/form-validation.init.js') }}"></script>
@endpush