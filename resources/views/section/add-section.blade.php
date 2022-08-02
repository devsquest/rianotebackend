@extends('layout')

@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="white-box">
            <div class="card profile">
                <div class="card-header">
                    <h5> {{isset($editSection) ? 'Update A Section' : 'Create A Section'}}</h5>
                </div>
                <div class="card-body">
                    <form name="add-section-form" id="add-section-form" method="post" action="{{ isset($editSection) ? url('admin/update-section', ['id' => $editSection->id]) : url('admin/save-section')}}">
                        @csrf
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label">Section Name</label>
                            <div class="col-sm-9">
                                <input name="section-name" type="text" class="form-control" id="section-name" required value="{{((isset($editSection) ? $editSection->name : ''))}}">
                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label" for="parent-section">Main Section</label>
                            <div class="col-sm-9">
                                <select class="form-control" name="parent-section" id="parent-section">
                                    <option value="">{{ __('Select Main Section')}}</option>
                                    @foreach($parentSections as $key => $section)
                                    @if($section != 'Headings')
                                    @if(isset($editSection) && ($key == $editSection->parent_id))
                                    <option selected value="{{$key}}">{{ $section }}</option>
                                    @else
                                    <option value="{{$key}}">{{ $section }}</option>
                                    @endif
                                    @endif
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label" for="section-note">Notes</label>
                            <div class="col-sm-9">
                                <select class="form-control" name="section-note" id="section-note" required>
                                    <option value="">{{ __('Select Note')}}</option>
                                    @foreach($notes as $key => $note)
                                    @if(isset($editSection) && $note->id === $editSection->note_id)
                                    <option selected value="{{$note->id}}">{{ $note->name }}</option>
                                    @else
                                    <option value="{{$note->id}}">{{ $note->name }}</option>
                                    @endif
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label" for="type">Type</label>
                            <div class="col-sm-9">
                                <select class="form-control" name="type" id="type" required>
                                    <option value="">{{ __('Select Type')}}</option>
                                    <option value="questionnaire" @if(isset($editSection) && $editSection->type == 'questionnaire') selected @endif>Questionnaire</option>
                                    <option value="form-inline" @if(isset($editSection) && $editSection->type == 'form-inline') selected @endif>Form Heading and Content Inline</option>
                                    <option value="form-nextline" @if(isset($editSection) && $editSection->type == 'form-nextline') selected @endif>Form Heading and Content Next Line</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label"></label>
                            <div class="col-sm-9">
                                @if(isset($editSection))
                                <button class="btn btn-primary btn-sm" type="submit">Edit Section</button>
                                @else
                                <button class="btn btn-primary btn-sm" type="submit">Create Section</button>
                                @endif
                            </div>
                        </div>
                    </form>
                    <br>
                    <h6 class="text-primary">Note: If no main section selected, this will be saved as main section too </h6>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection