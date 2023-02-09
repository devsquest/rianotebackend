@extends('layout')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <div class="card">
                    <div class="card-header">
                        <h5>Questions</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row m-b-20">
                            <div class="col-sm-12">
                                <a class="btn btn-success btn-sm" href="{{ url('admin/add-question') }}">Create A Question</a>
                            </div>

                        </div>
                        <div class="table-responsive">
                            <div id="tableActiveSubscriptions_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                <table class="tablesaw table-bordered table-hover table" data-tablesaw-sortable>
                                    <thead>
                                    <tr>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col  data-tablesaw-priority="persist">#</th>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col  data-tablesaw-priority="3">Question Text</th>
                                        <th scope="col" data-tablesaw-sortable-col  data-tablesaw-sortable-default-col data-tablesaw-priority="2">Type</th>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col  data-tablesaw-priority="1">Selection Type</th>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="4">Section ID</th>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col  data-tablesaw-priority="5">Created At</th>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col  data-tablesaw-priority="5">Updated At</th>
                                        <th scope="col" colspan="2" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="4">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach( $questions as $key => $question)
                                        <tr>
                                            <td>{{ $key + 1 }}</td>
                                            <td>{{ $question->question_text }}</td>
                                            <td>{{ $question->question_type }}</td>
                                            <td>{{ $question->selection_type }}</td>
                                            <td>{{ $question->section->name }}</td>
                                            <td>{{ $question->created_at }}</td>
                                            <td>{{ $question->updated_at }}</td>
                                            <td>
                                                <a class="btn btn-info btn-sm" href="{{url('admin/edit-question', ['id'=>$question->id])}}"> Edit </a>
                                                <a class="btn btn-danger btn-sm" href="{{url('admin/delete-question', ['id'=>$question->id])}}"> Delete </a>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                    {{ $questions->links('vendor.pagination.default') }}
                                </table>
                                <div class="row">
                                    <div class="col-sm-6 m-t-20">
                                        <div class="dataTables_info" id="editable-datatable_info" role="status" aria-live="polite">Showing {{ count($questions) }} of {{ $questions->total() }} entries</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
