@extends('admin_new.layouts.app')
@section('title', 'Option Listing')
@section('content')
<div class="page-content">
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0 font-size-18">Option Listing</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Option Management</a></li>
                            <li class="breadcrumb-item active">Option Listing</li>
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
                        <form action="" method="get">
                            <div class="row">
                                <div class="col-lg-8">
                                    <input type="search" name="search" class="form-control" value="{{ request()->get('search') }}">
                                </div>
                                <div class="col-lg-4">
                                    <button type="submit" class="btn btn-primary btn-rounded waves-effect waves-light">Search</button>
                                </div>
                            </div>
                        </form>
                        <h4 class="card-title mb-4">
                            <br>
                            <a href="{{ route('admin.option_create', $qid) }}" class="btn btn-primary">Add Option</a>
                        </h4>
                        <h4 class="card-title mb-4">Question Listing</h4>
                        <div class="table-responsive">
                            <table class="table align-middle table-nowrap mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="align-middle">ID</th>
                                        <th class="align-middle">Option Text</th>
                                        <th class="align-middle">Question Text</th>
                                        <th class="align-middle">Updated At</th>
                                        <th class="align-middle">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($options as $key => $option)
                                    <tr>
                                        <td><a href="javascript: void(0);" class="text-body fw-bold">{{ $option->id }}</a> </td>
                                        <td>{{ $option->option_text }}</td>
                                        <td>{{ $option->question->question_text }}</td>
                    
                                        <td>{{ $option->updated_at }}</td>
                                        <td>
                                            <a href="#" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                                Edit
                                            </a>
                                            <button types="button" class="btn btn-info btn-sm btn-rounded waves-effect waves-light">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        <!-- end table-responsive -->
                        <div class="pagination">
                            {{-- $options->links('vendor.pagination.bootstrap-4') --}}
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