@extends('layout')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="white-box">
                <div class="card">
                    <div class="card-header">
                        <h5>Notes</h5>
                    </div>
                    <div class="card-body">
                        <div class="form-group row m-b-20">
                            <div class="col-sm-12">
                                <a class="btn btn-success btn-sm" href="{{ url('admin/add-note') }}">Create A Note</a>
                            </div>

                        </div>
                        <div class="table-responsive">
                            <div id="tableActiveSubscriptions_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                <table class="tablesaw table-bordered table-hover table" data-tablesaw-sortable>
                                    <thead>
                                    <tr>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col  data-tablesaw-priority="persist">#</th>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col  data-tablesaw-priority="3">Name</th>
                                        <th scope="col" data-tablesaw-sortable-col  data-tablesaw-sortable-default-col data-tablesaw-priority="2">Status</th>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col  data-tablesaw-priority="1">Created At</th>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="4">Updated At</th>
                                        <th scope="col" colspan="2" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="4">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach( $notes as $key => $note)
                                        <tr>
                                            <td>{{ $key + 1 }}</td>
                                            <td>{{ $note->name }}</td>
                                            <td>{{ $note->status == 1 ? 'Active' : 'InActive' }}</td>
                                            <td>{{ $note->created_at }}</td>
                                            <td>{{ $note->updated_at }}</td>
                                            <td>
                                                <a class="btn btn-info btn-sm" href="{{url('admin/edit-note', ['id'=>$note->id])}}"> Edit </a>
                                                <a class="btn btn-danger btn-sm" href="{{url('admin/delete-note', ['id'=>$note->id])}}"> Delete </a>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                    {{ $notes->links() }}
                                </table>
                                <div class="row">
                                    <div class="col-sm-6 m-t-20">
                                        <div class="dataTables_info" id="editable-datatable_info" role="status" aria-live="polite">Showing
                                           {{ count($notes) }} of {{ $notes->total() }} entries</div>
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
