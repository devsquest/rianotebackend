@extends('layout')

@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="white-box">
            <div class="card profile">
                <div class="card-header">
                    <h5>{{ isset($note) ? 'Update Note' : 'Create Note' }}</h5>
                </div>
                <form name="add-note-form" id="add-note-form" method="post" action="{{ isset($note) ? url('admin/update-note', ['id' => $note->id]) : url('admin/save-note')}}">
                    {{ csrf_field() }}
                    <div class="card-body">
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label" for="note-name">Note Name</label>
                            <div class="col-sm-9">
                                <input name="note-name" type="text" class="form-control" id="note-name" value="{{((isset($note) ? $note->name : ''))}}" required>
                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label" for="note-name">User</label>
                            <div class="col-sm-9">
                                <select class="form-control" name="userid" id="userid" required>
                                    <option value="">{{ __('Select User')}}</option>
                                    @foreach($users as $key => $value)
                                        @if(isset($note) && ($value->id == $note->user_id))
                                        <option selected value="{{$value->id}}">{{ $value->name }}</option>
                                        @else
                                        <option value="{{$value->id}}">{{ $value->name }}</option>
                                        @endif
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label">Status:</label>
                            <div class="col-sm-9">
                                <input name="note-status" type="checkbox" id="terms4" data-error="Before you wreck yourself" {{((isset($note) and $note->status == 1) ? 'checked' : '')}}>
                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label"></label>
                            <div class="col-sm-9">
                                @if(isset($note))
                                <button class="btn btn-primary btn-sm" type="submit">Edit Note</button>
                                @else
                                <button class="btn btn-primary btn-sm" type="submit">Create Note</button>
                                @endif
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection