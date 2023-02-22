@extends('admin_new.layouts.app')
@section('title', 'Add Section')
@section('content')
<div class="page-content">
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0 font-size-18">Section</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Section Management</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Add Section</a></li>
                            <li class="breadcrumb-item active">Add Section</li>
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
                                <h4 class="card-title mb-4">Add Section</h4>
                            </div>
                            <div class="col-lg-12">
                                <form method="post" action="{{ route('admin.section_store') }}" class="needs-validation" enctype="multipart/form-data">
                                    @csrf
                                    <div class="mb-3 row">
                                        <label for="name" class="col-md-2 col-form-label">Section Name</label>
                                        <div class="col-md-10">
                                            <input class="form-control" type="text" id="name" name="name" required>
                                            @if($errors->has('name'))
                                            <div class="invalid-feedback d-inline">
                                                {{ $errors->first('name') }}
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="parent_id" class="col-md-2 col-form-label">Main Section</label>
                                        <div class="col-md-10">
                                            <select name="parent_id" id="parent_id" class="form-control">
                                                <option value="">{{ __('Select Main Section')}}</option>
                                                @foreach($parentSections as $key => $section)
                                                <option value="{{$key}}">{{ $section }}</option>
                                                @endforeach
                                            </select>
                                            @if($errors->has('parent_id'))
                                            <div class="invalid-feedback d-inline">
                                                {{ $errors->first('parent_id') }}
                                            </div>
                                            @endif
                                            <h6 class="text-primary">Note: If no main section selected, this will be saved as main section too </h6>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="note_id" class="col-md-2 col-form-label">Notes</label>
                                        <div class="col-md-10">
                                            <select name="note_id" id="note_id" class="form-control" required>
                                                <option value="">{{ __('Select Note')}}</option>
                                                @foreach($notes as $key => $note)
                                                <option value="{{$note->id}}">{{ $note->name }}</option>
                                                @endforeach
                                            </select>
                                            @if($errors->has('note_id'))
                                            <div class="invalid-feedback d-inline">
                                                {{ $errors->first('note_id') }}
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="type" class="col-md-2 col-form-label">Type</label>
                                        <div class="col-md-10">
                                            <select class="form-control" name="type" id="type" required>
                                                <option value="">{{ __('Select Type')}}</option>
                                                <option value="questionnaire">Questionnaire</option>
                                                <option value="form-inline">Form Heading and Content Inline</option>
                                                <option value="form-nextline">Form Heading and Content Next Line</option>
                                                <option value="statements">Statements</option>
                                            </select>
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