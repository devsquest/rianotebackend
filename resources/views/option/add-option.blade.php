@extends('layout')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <div class="card profile">
                    <div class="card-header">
                        <h5>{{isset($editOption) ? 'Update A Option' : 'Create A Option'}}</h5>
                    </div>
                    <div class="card-body">
                        <form name="add-question-form" id="add-question-form" method="post" action="{{ isset($editOption) ? url('admin/update-option', ['id' => $editOption->id]) : url('admin/save-option')}}">
                            @csrf
                            <div class="form-group row m-b-5">
                                <label class="col-sm-3 col-form-label" for="option-text">Option Text: </label>
                                <div class="col-sm-9">
                                    <input name="option-text" type="text" class="form-control" id="option-text" required
                                           value="{{((isset($editOption) ? $editOption->option_text : ''))}}">
                                </div>
                            </div>
                            <div class="form-group row m-b-5">
                                <label class="col-sm-3 col-form-label" for="question-type">Question</label>
                                <div class="col-sm-9">
                                    <select class="form-control" name="question-type" id="question-type" required>
                                        <option value="">{{ __('Select Question')}}</option>
                                        @foreach($questions as $key => $question)
                                            @if(isset($editOption) && ($question->id == $editOption->question_id))
                                                <option selected value="{{$question->id}}">{{ $question->section->name }}: {{ $question->question_text }}</option>
                                            @else
                                                <option value="{{$question->id}}">{{ $question->section->name }}: {{ $question->question_text }}</option>
                                            @endif
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row m-b-5">
                                <label class="col-sm-3 col-form-label"></label>
                                <div class="col-sm-9">
                                    @if(isset($editOption))
                                        <button class="btn btn-primary btn-sm" type="submit">Edit Option</button>
                                    @else
                                        <button class="btn btn-primary btn-sm" type="submit">Create Option</button>
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
