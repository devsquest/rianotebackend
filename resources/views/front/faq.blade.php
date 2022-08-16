@extends('front.layouts.app')
@section('title', 'Faq')
@push('custom-css')
<style>
</style>
@endpush
@section('content')
<div class="container-fluid ">
    <div class="row note-header-about note-header-faq">
        <div class="col-md-6 ">
            <div class="logo-placeholder-note-front mt-4">
                <p class="tag m-b-5 "><img src="{{ asset('front/img/Faster_note logo.png') }}" class="logo-img" alt=""></p>
            </div>
            <div>
                <h1 class="note-down-logo-about-us">FAQs</h1>
            </div>
        </div>
        <div class="col-md-6 sidebar">
            <div class="m-menu-button">
                <div class="burger">
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
            <div class="m-menu">
                <div class="m-menu-inner noselect">
                    <ul class="main-items">
                        <li>
                            <div class="item"><a href="#"><span class="ti-facebook"></span></a></div>
                        </li>
                        <li>
                            <div class="item"><a href="#"><span class="ti-twitter"></span></a></div>
                        </li>
                        <li>
                            <div class="item"><a href="#"><span class="ti-dribbble"></span></a></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--row-->
    <div class="row scnd-pg-faq">
        <div class="col-md-12">
            <h3 class="scnd-pg-h-faq">FREQUENTLY ASKED <p style="color:#ffc107!important;">QUESTIONS</p>
            </h3>
        </div>
        <div class="col-md-12">
            <div class="div-note-hr mt-5">
                <hr class="note-hr">
            </div>
        </div>
        <div class="col-md-12">
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Collapsible Group Item #2
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            Some placeholder content for the second accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Collapsible Group Item #3
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                            And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--row-->
    <div class="row forth-pg">
        <div class="col-md-2 col-2">
        </div>
        <div class="col-md-10 col-10">
            <div>
                <h1 style="margin-top:3em">TESTIMONIALS</h1>
            </div>
            <div class="div-note-hr mt-5">
                <hr class="note-hr-white">
            </div>
            <div class="row pic">
                <div class="col-md-2 hide pic-down">
                    <img src="{{ asset('front/img/Home_35.png') }}" class="img-fulid" alt="boy pic">
                </div>
                <div class="col-md-2 hide">
                    <img src="{{ asset('front/img/Home_32.png') }}" class="img-fulid" alt="boy pic">
                </div>
                <div class="col-md-2  hide pic-down">
                    <img src="{{ asset('front/img/Home_38.png') }}" class="img-fulid" alt="boy pic">
                </div>
                <div class="col-md-2 hide ">
                    <img src="{{ asset('front/img/Home_34.png') }}" class="img-fulid" alt="boy pic">
                </div>
                <div class="note-tes-text">
                    <p class="forth-pg-p mt-2">" The software has already saved me hours of work <br> and a truckload of
                        frustration.Thanks!"</p>
                    <p class="forth-pg-p-scnd mt-3">- R.P., MAMFT</p>
                </div>
            </div>
        </div>
    </div>
    <!--row-->
    <div class="row fifth-pg">
        <div class="col-md-2 col-2">
        </div>
        <div class="col-md-10 col-10">
            <div class="row">
                <div class="col-md-12 mb-5">
                    <div class="note-watch-video-heading">
                        <h1 class="">WATCH THE VIDEO</h1>
                    </div>
                    <div class="div-note-hr mt-5">
                        <hr class="note-hr">
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="{{ asset('front/img/youtube.png') }}" class="img-fluid" alt="" style="height:60rem;width:80%" />
                </div>
                <div class="col-md-6">
                    <h4>HEADING</h4>
                    <p class="fifth-pg-p">Faster Note was created to streamline the process of conceptualizing
                        and documenting
                        our clinical work.With over 350 pre-set phrase and statements, plus the option tp
                        create your own, your
                        therapy notes are compeleted with ease and efficiency.Faster Note arranges your
                        selection and additional
                        comments into an organized narrative describing the clinical session.Comes with
                        modules for Treatment Planning
                        and Intake & Termination Summaries.Watch our video to see how it work and how Faster
                        Note can save you valuable
                        time with your record keeping.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!--row-->
    <div class="row sixth-pg">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6 sixth-pg-left">
                    <div class="row">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-9">
                            <div class="note-watch-video-heading">
                                <h1 class="">CONTACT</h1>
                            </div>
                            <div class="div-note-hr mt-5">
                                <hr class="note-hr">
                            </div>
                            <ul class="list-group sixth-pg-ul">
                                <li class="list-group-item sixth-pg-list">
                                    <div class="md-v-line"></div><i class="fa-solid fa-envelope pe-5"></i> E-MAIL <p class="text-muted sixth-pg-list-p">info@fasternote.com</p>
                                </li>
                                <li class="list-group-item sixth-pg-list">
                                    <div class="md-v-line"></div><i class="fa-solid fa-phone pe-5"></i> PHONE <p class="text-muted sixth-pg-list-p">(541)754-3010</p>
                                </li>
                                <li class="list-group-item sixth-pg-list">
                                    <div class="md-v-line"><i class="fa-solid fa-location-dot pe-5"></i> ADDRESS <p class="text-muted sixth-pg-list-p">Crophos Inc. <br>76 Camptown Road
                                            Chicago, <br> IL 60710 United states </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 sixth-pg-right">
                    <form class="form">
                        <div class="row">
                            <div class="mb-3 mt-5">
                                <input type="email" class="form-control form-topic" id="email" placeholder="Your Email" name="email">
                            </div>
                            <div class="mb-3 mt-3">
                                <input type="text" class="form-control form-topic" id="pwd" placeholder="Your Topic" name="pswd">
                            </div>
                            <div class="form-check mb-3">
                                <textarea class="form-control form-textarea" rows="5" id="comment" name="text" placeholder="Message...."></textarea>
                            </div>
                            <button type="submit" class="btn btn-warning form-btn">SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--row-->
</div>
@endsection