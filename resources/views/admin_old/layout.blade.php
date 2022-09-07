<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <link rel="icon" href="{{ asset('admin/plugins/images/favicon.png') }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#000000">
        <link rel="apple-touch-icon" href="{{ asset('admin/plugins/images/logo.png') }}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
        <!-- Bootstrap Core CSS -->
        <link href="{{ asset('admin/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">
        <!-- This is Sidebar menu CSS -->
        <link href="{{ asset('admin/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css') }}" rel="stylesheet">
        <!-- This is a Animation CSS -->
        <link href="{{ asset('admin/css/animate.css') }}" rel="stylesheet">
        <!-- This is a Custom CSS -->
        <link rel="stylesheet" href="{{ asset('admin/css/style.css') }}">
        <link href="{{ asset('admin/css/colors/blue-dark.css') }}" id="theme" rel="stylesheet">
        <link href="{{ asset('admin/plugins/bower_components/clockpicker/dist/jquery-clockpicker.min.css') }}" rel="stylesheet">
        <!-- Color picker plugins css -->
        <link href="{{ asset('admin/plugins/bower_components/jquery-asColorPicker-master/css/asColorPicker.css') }}" rel="stylesheet">
        <!-- Date picker plugins css -->
        <link href="{{ asset('admin/plugins/bower_components/bootstrap-datepicker/bootstrap-datepicker.min.css') }}" rel="stylesheet" type="text/css">
        <!-- Daterange picker plugins css -->
        <link href="{{ asset('admin/plugins/bower_components/timepicker/bootstrap-timepicker.min.css') }}" rel="stylesheet">
        <link href="{{ asset('admin/plugins/bower_components/bootstrap-daterangepicker/daterangepicker.css') }}" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <title>Admin Panel</title>
    </head>
    <body class="fix-sidebar">
    <!-- Preloader -->
    <div class="preloader">
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
        </svg>
    </div>
    <div id="wrapper">
        <!-- Top Navigation -->
        <nav class="navbar navbar-default navbar-static-top m-b-0">
            <div class="navbar-header">
                <!-- Toggle icon for mobile view -->
                <div class="top-left-part">
                    <!-- Logo -->
                    <a class="logo" href="{{ asset('admin/note-list') }}"><b><i class="fa fa-home"></i>&nbsp; {{ env('APP_NAME') }}</b></a> </div>
                <ul class="nav navbar-top-links navbar-right pull-right">
                    <li class="dropdown"> <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img src="{{ asset('admin/plugins/images/users/varun.jpg') }}" alt="user-img" width="36" class="img-circle">
                            <b class="hidden-xs">{{ $user->name }}</b><span class="caret"></span> </a>
                        <ul class="dropdown-menu dropdown-user animated flipInY">
                            <li>
                                <div class="dw-user-box">
                                    <div class="u-img"><img src="{{ asset('admin/plugins/images/users/varun.jpg') }}" alt="user" /></div>
                                    <div class="u-text">
                                        <h4>{{ $user->name }}</h4>
                                        <p class="text-muted">{{ $user->email }}</p>
                                    </div>
                                </div>
                            </li>

                            <li><a href={{ url('logout') }}><i class="fa fa-power-off"></i>Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- End Top Navigation -->
        <!-- Left navbar-header -->
        <div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav slimscrollsidebar">
                <div class="sidebar-head">
                    <h3><span class="fa-fw open-close"><i class="ti-menu hidden-xs"></i><i class="ti-close visible-xs"></i></span> <span class="hide-menu">Ria Note</span></h3>
                </div>
                <ul class="nav" id="side-menu">
                    <li><a href="{{ url('admin/note-list') }}" class="waves-effect active"><i class="ti-user"></i><span class="hide-menu"> &nbsp;Notes</span></a></li>
{{--                    <li><a href="{{ url('admin/heading-list') }}" class="waves-effect active"><i class="ti-user"></i><span class="hide-menu"> &nbsp;Notes</span></a></li>--}}
                    <li><a href="{{ url('admin/section-list') }}" class="waves-effect"><i class="fa  ti-layout-tab"></i><span class="hide-menu"> &nbsp;Sections</span></a></li>
                    <li><a href="{{ url('admin/question-list') }}" class="waves-effect"><i class="fa fa-question"></i><span class="hide-menu"> &nbsp;Questions</span></a></li>
                    <li><a href="{{ url('admin/option-list') }}" class="waves-effect"><i class="icon-list"></i><span class="hide-menu"> &nbsp;Options</span></a></li>
                    <li><a href="{{ url('admin/users-list') }}" class="waves-effect"><i class="fa fa-user-plus"></i><span class="hide-menu"> &nbsp;Users</span></a></li>
                </ul>
            </div>
        </div>
        <!-- Left navbar-header end -->
        <!-- Page Content -->
        <div id="page-wrapper">
            @if(session('status'))
                <div class="alert alert-success">
                    {{ session('status') }}
                </div>
            @endif
            <div class="container-fluid">
                <div class="container-fluid">
                    @yield('content')
                </div>
            </div>
            <!-- /.container-fluid -->
            <footer class="footer text-center"> 2022 &copy; {{ env('APP_NAME') }} </footer>
        </div>
        <!-- /#page-wrapper -->
    </div>
    <!-- jQuery -->
        <script src="{{ asset('admin/plugins/bower_components/jquery/dist/jquery.min.js') }}"></script>
        <!-- Bootstrap Core JavaScript -->
        <script src="{{ asset('admin/bootstrap/dist/js/bootstrap.min.js') }}"></script>
        <!-- Sidebar menu plugin JavaScript -->
        <script src="{{ asset('admin/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.js') }}"></script>

        <!-- jQuery -->
        <script src="{{ asset('admin/plugins/bower_components/jquery/dist/jquery.min.js') }}"></script>
        <!-- Bootstrap Core JavaScript -->
        <script src="{{ asset('admin/bootstrap/dist/js/bootstrap.min.js') }}"></script>
        <!-- Sidebar menu plugin JavaScript -->
        <script src="{{ asset('admin/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.js') }}"></script>
        <!-- Custom Theme JavaScript -->
        <script src="{{ asset('admin/js/custom.js') }}"></script>
        @stack('custom-scripts')
    </body>
</html>
