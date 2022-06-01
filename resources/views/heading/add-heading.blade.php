@extends('layout')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <div class="card profile">
                    <div class="card-header">
                        <h5>Create A Note</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label">ID:</label>
                            <div class="col-sm-9">
                                <input class="form-control">
                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label">First Name:</label>
                            <div class="col-sm-9">
                                <input class="form-control">
                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label">Last Name:</label>
                            <div class="col-sm-9">
                                <input class="form-control">
                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label">Options:</label>
                            <div class="col-sm-9">
                                <select class="form-control">
                                    <option>note1</option>
                                    <option>note2</option>
                                    <option>note3</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label">Descriptions:</label>
                            <div class="col-sm-9">
                                <textarea class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label">Status:</label>
                            <div class="col-sm-9">
                                <input type="checkbox" id="terms4" data-error="Before you wreck yourself" required="">

                            </div>
                        </div>
                        <div class="form-group row m-b-5">
                            <label class="col-sm-3 col-form-label"></label>
                            <div class="col-sm-9">
                                <button class="btn btn-primary btn-sm">Save Information</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
