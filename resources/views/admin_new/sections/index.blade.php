@extends('admin_new.layouts.app')
@section('title', 'Section Listing')
@section('content')
<div class="page-content">
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0 font-size-18">Section Listing</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Section Management</a></li>
                            <li class="breadcrumb-item active">Section Listing</li>
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
                            <a href="{{ route('admin.section_create') }}" class="btn btn-primary">Create Section</a>
                        </h4>
                        <h4 class="card-title mb-4">Section Listing</h4>
                        <div class="table-responsive">
                            <table class="table align-middle table-nowrap mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th class="align-middle">ID</th>
                                        <th class="align-middle">Name</th>
                                        <th class="align-middle">Parent Tab</th>
                                        <th class="align-middle">Note</th>
                                        <th class="align-middle">Updated</th>
                                        <th class="align-middle">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($sections as $key => $section)
                                    <tr>
                                        <td><a href="javascript: void(0);" class="text-body fw-bold">{{ $section->id }}</a> </td>
                                        <td>{{ $section->name }}</td>
                                        <td>{{ isset($section->parent_id) ? $parentSections[$section->parent_id] : 'N/A' }}</td>
                                        <td>{{ $section->note->name }}</td>
                                        <td>{{ $section->updated_at }}</td>
                                        <td>
                                            <a href="{{ route('admin.section_edit', $section->id) }}" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
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
                            {{ $sections->links('vendor.pagination.bootstrap-4') }}
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