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
                                        <option value="Text" {{ (isset($editQuestion) and $editQuestion->question_type == 'Text') ? 'selected' : '' }}>Text</option>
                                        <option value="Tags" {{ (isset($editQuestion) and $editQuestion->question_type == 'Tags') ? 'selected' : '' }}>Tags</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row m-b-5">
                                <label class="col-sm-3 col-form-label" for="selection-type">Selection Type</label>
                                <div class="col-sm-9">
                                    <select class="form-control" id="selection-type" name="selection-type" required>
                                        <option value="">{{ __('Select Selection Type')}}</option>
                                        <option value="Single" {{ (isset($editQuestion) and $editQuestion->selection_type == 'Single') ? 'selected' : '' }}>Single</option>
                                        <option value="Multiple" {{ (isset($editQuestion) and $editQuestion->selection_type == 'Multiple') ? 'selected' : '' }}>Multiple</option>
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
                                                @if(isset($editQuestion) && ($section->id == $editQuestion->section_id))
                                                    <option selected value="{{$section->id}}">{{ $section->name }}</option>
                                                @else
                                                    <option value="{{$section->id}}">{{ $section->name }}</option>
                                                @endif
                                            @endif
                                        @endforeach
                                    </select>
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
