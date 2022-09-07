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
                                <a class="btn btn-success btn-sm" href="{{ url('admin/add-heading') }}">Create A Tabs</a>
                            </div>

                        </div>
                        <div class="table-responsive">
                            <div id="tableActiveSubscriptions_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6">
                                        <div class="dataTables_length" id="tableActiveSubscriptions_length">
                                            <label>Show
                                                <select name="tableActiveSubscriptions_length" aria-controls="tableActiveSubscriptions" class="custom-select custom-select-sm form-control form-control-sm">
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select>
                                                entries</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 text-right p-r-20">
                                        <div id="tableActiveSubscriptions_filter" class="dataTables_filter">
                                            <label>Search:
                                                <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="tableActiveSubscriptions">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <table class="tablesaw table-bordered table-hover table" data-tablesaw-sortable>
                                    <thead>
                                    <tr>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col  data-tablesaw-priority="persist">ID</th>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col  data-tablesaw-priority="3">First Name</th>
                                        <th scope="col" data-tablesaw-sortable-col  data-tablesaw-sortable-default-col data-tablesaw-priority="2">Last Name</th>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col  data-tablesaw-priority="1">Options</th>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="4">Descriptions</th>
                                        <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col  data-tablesaw-priority="5">Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td class="title">200609-4454-93252</td>
                                        <td>lara</td>
                                        <td>jones</td>
                                        <td>Option1</td>
                                        <td>test test test</td>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <td class="title">200609-4454-93252</td>
                                        <td>lara</td>
                                        <td>jones</td>
                                        <td>Option1</td>
                                        <td>test test test</td>
                                        <td>Pending</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="row">
                                    <div class="col-sm-6 m-t-20">
                                        <div class="dataTables_info" id="editable-datatable_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                                    </div>
                                    <div class="col-sm-6 text-right">
                                        <div class="dataTables_paginate paging_simple_numbers" id="editable-datatable_paginate">
                                            <ul class="pagination">
                                                <li class="paginate_button previous disabled" aria-controls="editable-datatable" tabindex="0" id="editable-datatable_previous"><a href="#">Previous</a></li>
                                                <li class="paginate_button active" aria-controls="editable-datatable" tabindex="0"><a href="#">1</a></li>
                                                <li class="paginate_button " aria-controls="editable-datatable" tabindex="0"><a href="#">2</a></li>
                                                <li class="paginate_button " aria-controls="editable-datatable" tabindex="0"><a href="#">3</a></li>
                                                <li class="paginate_button " aria-controls="editable-datatable" tabindex="0"><a href="#">4</a></li>
                                                <li class="paginate_button next" aria-controls="editable-datatable" tabindex="0" id="editable-datatable_next"><a href="#">Next</a></li>
                                            </ul>
                                        </div>
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
