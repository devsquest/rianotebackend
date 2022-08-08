@extends('layout')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <div class="card profile">
                    <div class="card-header">
                        <h5>{{isset($editQuestion) ? 'Update A Question' : 'Create A Question'}} </h5>
                    </div>
                    <div class="card-body">
                        <form name="add-question-form" id="add-question-form" method="post" action="{{ isset($editQuestion) ? url('admin/update-question', ['id' => $editQuestion->id]) : url('admin/save-question')}}">
                            @csrf
                            <div class="form-group row m-b-5">
                                <label class="col-sm-3 col-form-label" for="question-text">First Name:</label>
                                <div class="col-sm-9">
                                    <input name="question-text" type="text" class="form-control" id="question-text" required
                                           value="{{((isset($editQuestion) ? $editQuestion->question_text : ''))}}">
                                </div>
                            </div>
                            <div class="form-group row m-b-5">
                                <label class="col-sm-3 col-form-label" for="question-type">Question Type</label>
                                <div class="col-sm-9">
                                    <select class="form-control" id="question-type" name="question-type" required>
                                        <option value="">{{ __('Select Question Type')}}</option>
                                        <option value="text" {{ (isset($editQuestion) and $editQuestion->question_type == 'text') ? 'selected' : '' }}>Text</option>
                                        <option value="tags" {{ (isset($editQuestion) and $editQuestion->question_type == 'tags') ? 'selected' : '' }}>Tags</option>
                                        <option value="tags-replacement-option" {{ (isset($editQuestion) and $editQuestion->question_type == 'tags-replacement-option') ? 'selected' : '' }}>Tags with replacement option</option>
                                        <option value="form" {{ (isset($editQuestion) and $editQuestion->question_type == 'form') ? 'selected' : '' }}>Form</option>
                                        <option value="statements" {{ (isset($editQuestion) and $editQuestion->question_type == 'statements') ? 'selected' : '' }}>Statements</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row m-b-5">
                                <label class="col-sm-3 col-form-label" for="selection-type">Selection Type</label>
                                <div class="col-sm-9">
                                    <select class="form-control" id="selection-type" name="selection-type" required>
                                        <option value="">{{ __('Select Selection Type')}}</option>
                                        <option value="single" {{ (isset($editQuestion) and $editQuestion->selection_type == 'single') ? 'selected' : '' }}>Single</option>
                                        <option value="multiple" {{ (isset($editQuestion) and $editQuestion->selection_type == 'multiple') ? 'selected' : '' }}>Multiple</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row m-b-5">
                                <label class="col-sm-3 col-form-label" for="section-type">Section</label>
                                <div class="col-sm-9">
                                    <select class="form-control" name="section-type" id="section-type" required>
                                        <option value="">{{ __('Select Section')}}</option>
                                        @foreach($sections as $key => $section)
                                            @if($section->name != 'Headings')
                                                @if($section->parent != null)
                                                    @if(isset($editQuestion) && ($section->id == $editQuestion->section_id))
                                                        <option selected value="{{$section->id}}">{{ $section->parent->name }} - {{ $section->name }}</option>
                                                    @else
                                                        <option value="{{$section->id}}">{{ $section->parent->name }} - {{ $section->name }}</option>
                                                    @endif
                                                @else
                                                    @if(isset($editQuestion) && ($section->id == $editQuestion->section_id))
                                                        <option selected value="{{$section->id}}">{{ $section->name }}</option>
                                                    @else
                                                        <option value="{{$section->id}}">{{ $section->name }}</option>
                                                    @endif
                                                @endif
                                            @endif
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row m-b-5">
                                <label class="col-sm-3 col-form-label" for="only_show_options">Only Show Options</label>
                                <div class="col-sm-9">
                                    @if(isset($editQuestion))
                                    <input type="checkbox" name="only_show_options" id="only_show_options" @if($editQuestion->only_show_options) checked @endif>
                                    @else
                                    <input type="checkbox" name="only_show_options" id="only_show_options">
                                    @endif
                                </div>
                            </div>
                            <div class="form-group row m-b-5">
                                <label class="col-sm-3 col-form-label"></label>
                                <div class="col-sm-9">
                                    @if(isset($editQuestion))
                                        <button class="btn btn-primary btn-sm" type="submit">Edit Question</button>
                                    @else
                                        <button class="btn btn-primary btn-sm" type="submit">Create Question</button>
                                    @endif
                                </div>
                            </div>
                        </form>
                   </div>
                </div>
            </div>
        </div>
    </div>
@endsection
