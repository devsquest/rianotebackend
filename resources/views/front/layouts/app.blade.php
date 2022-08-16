<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>@yield('title')</title>
    <link rel="icon" type="image/x-icon" href="{{ asset('faster_note_fav.png') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="stylesheet" href="{{ asset('note_assets/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('front/fontawesome/css/all.min.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ asset('front/assets/css/app.css') }}">
</head>

<body>
    @yield('content')
    <div class="container-fluid nav-page d-none">
        <div class="nav-page">
            <nav id="colorlib-main-nav" role="navigation">
                <a href="" onclick="return false" class="js-colorlib-nav-toggle colorlib-nav-toggle active">
                    <i class="fa-solid fa-xmark fa-2x"></i>
                </a>
                <div class="js-fullheight colorlib-table">
                    <div class="colorlib-table-cell js-fullheight">
                        <div class="row no-gutters">
                            <div class="col-md-12 text-center">
                                <h1 class="mb-4">
                                    <a href="index.html" class="note-nav-logo note-nav-link">Faster Note</a>
                                </h1>
                                <ul class="note-nav">
                                    <li class="note-nav-link-li active">
                                        <a href="{{ route('front.home') }}" class="note-nav-link"><span>Home</span></a>
                                    </li>
                                    <li class="note-nav-link-li">
                                        <a href="{{ route('front.about') }}" class="note-nav-link"><span>About</span></a>
                                    </li>
                                    <li class="note-nav-link-li">
                                        <a href="{{ route('front.pricing') }}" class="note-nav-link"><span>Pricing</span></a>
                                    </li>
                                    <!-- <li class="note-nav-link-li">
                                        <a href="contact.html" class="note-nav-link"><span>Contact</span></a>
                                    </li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <script src="{{ asset('note_assets/bootstrap/jquery.slim.min.js') }}"></script>
    <script src="{{ asset('note_assets/fontawesome/js/all.min.js') }}"></script>
    <script src="{{ asset('note_assets/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('front/assets/js/app.js') }}"></script>
    <script>
        $(".nav-page").addClass('d-none');
        $(document).on("click", ".m-menu-button", function() {
            $(".page").addClass('d-none');
            $(".nav-page").removeClass('d-none');
        });
        $(document).on("click", ".colorlib-nav-toggle", function() {
            $(".page").removeClass('d-none');
            $(".nav-page").addClass('d-none');
        });
    </script>
</body>

</html>