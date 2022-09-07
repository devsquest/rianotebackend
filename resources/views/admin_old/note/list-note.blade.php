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
                            <label for="user_id">User</label>
                            <select name="user_id" id="user_id" class="form-control select_user" required>
                                <option value="" disabled selected>--Select User--</option>
                                @foreach($users as $user)
                                <option value="{{ $user->id }}" @if($user->id == $user_from_query_string) selected @endif>{{ $user->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="form-group row m-b-20">
                        <div class="col-sm-12">
                            <a class="btn btn-success btn-sm" href="{{ url('admin/add-note') }}">Create A Note</a>
                        </div>
                    </div>
                    <div class="table-responsive">
                        @if(!empty($notes))
                        <div id="tableActiveSubscriptions_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                            <table class="tablesaw table-bordered table-hover table" data-tablesaw-sortable>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        <th>Actions</th>
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
                                        {{ count($notes) }} of {{ $notes->total() }} entries
                                    </div>
                                </div>
                            </div>
                        </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@push('custom-scripts')
<script>
    function insertParam(key, value) {
        key = encodeURIComponent(key);
        value = encodeURIComponent(value);

        // kvp looks like ['key1=value1', 'key2=value2', ...]
        var kvp = document.location.search.substr(1).split('&');
        let i = 0;

        for (; i < kvp.length; i++) {
            if (kvp[i].startsWith(key + '=')) {
                let pair = kvp[i].split('=');
                pair[1] = value;
                kvp[i] = pair.join('=');
                break;
            }
        }

        if (i >= kvp.length) {
            kvp[kvp.length] = [key, value].join('=');
        }

        // can return this or...
        let params = kvp.join('&');

        // reload page with new params
        document.location.search = params;
    }
    //
    $(document).ready(function() {
        $(".select_user").on("change", function() {
            let user_id = $(this).val();
            insertParam('raw_user_id', user_id);
        });
    });
</script>
@endpush