<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>{{ env('APP_NAME') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="{{ asset('note_assets/fontawesome/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('note_assets/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
</head>

<body>
    <div id="app"></div>

    <script src="{{ asset('note_assets/bootstrap/jquery.slim.min.js') }}"></script>
    <script src="{{ asset('note_assets/fontawesome/js/all.min.js') }}"></script>
    <script src="{{ asset('note_assets/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>