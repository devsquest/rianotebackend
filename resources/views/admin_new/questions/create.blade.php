@extends('admin_new.layouts.app')
@section('title', 'Add Question')
@section('content')
<div class="page-content">
    <div class="container-fluid">

        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 class="mb-sm-0 font-size-18">Question</h4>

                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Question Management</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Add Question</a></li>
                            <li class="breadcrumb-item active">Add Question</li>
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
                                <h4 class="card-title mb-4">Add Question</h4>
                            </div>
                            <div class="col-lg-12">
                                <form method="post" action="{{ route('admin.question_store') }}" class="needs-validation" enctype="multipart/form-data">
                                    @csrf
                                    <div class="mb-3 row">
                                        <label for="question_text" class="col-md-2 col-form-label">Question Text</label>
                                        <div class="col-md-10">
                                            <input class="form-control" type="text" id="question_text" name="question_text" required>
                                            @if($errors->has('question_text'))
                                            <div class="invalid-feedback d-inline">
                                                {{ $errors->first('question_text') }}
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="question_type" class="col-md-2 col-form-label">Question Type</label>
                                        <div class="col-md-10">
                                            <select class="form-control" id="question_type" name="question_type" required>
                                                <option value="">{{ __('Select Question Type')}}</option>
                                                <option value="text">Text</option>
                                                <option value="tags">Tags</option>
                                                <option value="tags-replacement-option">Tags with replacement option</option>
                                                <option value="form">Form</option>
                                                <option value="statements">Statements</option>
                                            </select>
                                            @if($errors->has('question_type'))
                                            <div class="invalid-feedback d-inline">
                                                {{ $errors->first('question_type') }}
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="selection_type" class="col-md-2 col-form-label">Selection Type</label>
                                        <div class="col-md-10">
                                            <select class="form-control" id="selection_type" name="selection_type" required>
                                                <option value="">{{ __('Select Selection Type')}}</option>
                                                <option value="single">Single</option>
                                                <option value="multiple">Multiple</option>
                                            </select>
                                            @if($errors->has('selection_type'))
                                            <div class="invalid-feedback d-inline">
                                                {{ $errors->first('selection_type') }}
                                            </div>
                                            @endif
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="type" class="col-md-2 col-form-label">Section</label>
                                        <div class="col-md-10">
                                            <select class="form-control" name="section_id" id="section_id" required>
                                                <option value="">{{ __('Select Section')}}</option>
                                                @foreach($sections as $key => $section)
                                                <option value="{{ $section->id }}">{{ $section->parent != null ? $section->parent->name . ' - ' : '' }} {{ $section->name }}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="type" class="col-md-2 col-form-label">Only Show Options</label>
                                        <div class="col-md-10">
                                            <input type="checkbox" name="only_show_options" id="only_show_options">
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