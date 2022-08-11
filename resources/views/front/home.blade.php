@extends('front.layouts.app')
@section('title', 'Home')
@section('content')
<div class="container-fluid page">
    <div class="row first-pg">
        <div class="col-md-6">
            <div class="logo-placeholder-note-front mt-4">
                <p class="tag m-b-5 "><img src="{{ asset('front/img/Faster_note logo.png') }}" class="logo-img" alt=""></p>
            </div>
        </div>
        <div class="col-md-6">
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
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-2 col-2">
                    <ul class="list-group note-front-list-group">
                        <li class="ist-group-item Scrolist note-front-numbering">
                            <h1 class="ps-4">01</h1>
                        </li>
                        <li class="list-group-item Scrolist">
                            <i class="fa fa-solid fa-circle"></i>
                            <span class="ml-5"> Home</span>
                        </li>
                        <li class="list-group-item Scrolist">
                            <div class="vl"></div>
                        </li>
                        <li class="list-group-item Scrolist">
                            <i class="fa fa-solid fa-circle"></i>
                        </li>
                        <li class="list-group-item Scrolist">
                            <i class="fa fa-solid fa-circle"></i>
                        </li>
                        <li class="list-group-item Scrolist">
                            <i class="fa fa-solid fa-circle"></i>
                        </li>
                        <li class="list-group-item Scrolist">
                            <i class="fa fa-solid fa-circle"></i>
                        </li>
                        <li class="list-group-item Scrolist">
                            <i class="fa fa-solid fa-circle"></i>
                        </li>
                    </ul>
                </div>
                <div class="col-md-4 col-4">
                    <div>
                        <br><br><br><br><br><br>
                        <h1>LEADERS IN THERAPY</h1>
                        <h1>
                            NOTE <span class="text-warning">
                                WRITING <br> SOFTWARE</span>
                        </h1>
                        <p class="first-pg-p">RIA NOTES CAN TRANSFORM THE WAY <br> YOU DOCUMENT YOUR CLINICAL WORK
                            AND <br> HELP YOU
                            IN YOUR PRACTICE.</p>
                        <p class="first-pg-p mt-5">
                            <a>GET START <i class="fa-solid fa-arrow-right-long ms-4"></i></a>
                        </p>
                        <div class="mt-5">
                            <i class="fa-solid fa-computer-mouse font-19px"></i>
                            <div class="vl mt-4"></div>
                            <p style="writing-mode:vertical-lr; font-size: 1.5rem; position: relative; bottom: 9.5em; left: 0.8em;">SCROLL DOWN</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-6">
                    <div class="note-front-bg-one-man-img-place">
                        <img src="{{ asset('front/img/banner_home.png') }}" alt="" class="note-front-bg-one-man-img">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--row-->
    <div class="row scnd-pg">
        <div class="col-md-2 col-2">
            <ul class="list-group note-front-list-group top-10em">
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="ist-group-item Scrolist Scrolist-black note-front-numbering">
                    <h1 class="ps-4">02</h1>
                </li>
                <li class="list-group-item Scrolist Scrolist-yellow">
                    <i class="fa fa-solid fa-circle"></i>
                    <span class="ml-5 black-color"> About Us</span>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <div class="vl vl-yellow"></div>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
            </ul>
        </div>
        <div class="col-md-4 col-4">
            <div class="section" style="margin-top:20rem" id="about">
                <h1>
                    FASTER NOTE WAS DEVELOPED BY <span class="text-warning">JONE AND SARAH</span>
                </h1>
                <div class="div-note-hr mt-5">
                    <hr class="note-hr">
                </div>
                <p class="scnd-pg-p"> a husband and wife team of psychologists who were interseted
                    in helping clinicians with the often vexing task of clinical record
                    keeping. Here is a bit of their story ......
                </p>
                <p>
                    <button class="btn readmore-btn mt-5 pl-5 pr-5"> READ MORE</button>
                </p>
            </div>
        </div>
        <div class="col-md-6 col-6">
            <img src="{{ asset('front/img/HW.png') }}" alt="" style="margin-top:15rem ;">
        </div>
    </div>
    <!--row-->
    <div class="row third-pg">
        <div class="col-md-2 col-2">
            <ul class="list-group note-front-list-group top-10em">
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="ist-group-item Scrolist Scrolist-white note-front-numbering">
                    <h1 class="ps-4">03</h1>
                </li>
                <li class="list-group-item Scrolist Scrolist-white">
                    <i class="fa fa-solid fa-circle"></i>
                    <span class="ml-5 white-color"> FEATURES</span>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <div class="vl vl-white"></div>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
            </ul>
        </div>
        <div class="col-md-4 col-4">
            <div class="section" style="margin-top:20rem">
                <h1 class="mt-5">FEATURES</h1>
                <div class="div-note-hr mt-5">
                    <hr class="note-hr">
                </div>
                <div class="">
                    <ul class="list-group ul-lstfture ">
                        <li class="list-group-item lstfture">CONVENIENT</li>
                        <li class="list-group-item lstfture">CONFIDENTIAL</li>
                        <li class="list-group-item lstfture">AFFORDABLE</li>
                    </ul>
                </div>
                <div class="dots">
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
                <div class="btn-section">
                    <button class="btn see-all-btn pl-5 pr-5">See All Features</button>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-6">
            <div class="dollar">
                <p><img src="{{ asset('front/img/dollar.png') }}" alt=""></p>
                <p>
                    Two affordable options: One-time license fee for the downloadable version, or a low
                    monthly fee for the online version.
                </p>
            </div>
        </div>
    </div>
    <!--row-->
    <div class="row forth-pg">
        <div class="col-md-2 col-2">
            <ul class="list-group note-front-list-group top-10em">
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="ist-group-item Scrolist Scrolist-white note-front-numbering">
                    <h1 class="ps-4">04</h1>
                </li>
                <li class="list-group-item Scrolist Scrolist-white">
                    <i class="fa fa-solid fa-circle"></i>
                    <span class="ml-5 white-color"> TESTIMONIALS</span>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <div class="vl vl-white"></div>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
            </ul>
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
            <ul class="list-group note-front-list-group top-10em">
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
                <li class="ist-group-item Scrolist Scrolist-black note-front-numbering">
                    <h1 class="ps-4">05</h1>
                </li>
                <li class="list-group-item Scrolist Scrolist-yellow">
                    <i class="fa fa-solid fa-circle"></i>
                    <span class="ml-5 black-color"> WATCH THE VIDEO</span>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <div class="vl vl-yellow"></div>
                </li>
                <li class="list-group-item Scrolist Scrolist-gray">
                    <i class="fa fa-solid fa-circle"></i>
                </li>
            </ul>
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
                        therapy notes are compeleted with ease and efficiency.Ria Notes arranges your
                        selection and additional
                        comments into an organized narrative describing the clinical session.Comes with
                        modules for Treatment Planning
                        and Intake & Termination Summaries.Watch our video to see how it work and how Ria
                        Notes can save you valuable
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
                            <ul class="list-group note-front-list-group top-10em">
                                <li class="list-group-item Scrolist Scrolist-gray">
                                    <i class="fa fa-solid fa-circle"></i>
                                </li>
                                <li class="list-group-item Scrolist Scrolist-gray">
                                    <i class="fa fa-solid fa-circle"></i>
                                </li>
                                <li class="list-group-item Scrolist Scrolist-gray">
                                    <i class="fa fa-solid fa-circle"></i>
                                </li>
                                <li class="list-group-item Scrolist Scrolist-gray">
                                    <i class="fa fa-solid fa-circle"></i>
                                </li>
                                <li class="list-group-item Scrolist Scrolist-gray">
                                    <i class="fa fa-solid fa-circle"></i>
                                </li>
                                <li class="ist-group-item Scrolist note-front-numbering">
                                    <h1 class="ps-4">06</h1>
                                </li>
                                <li class="list-group-item Scrolist">
                                    <i class="fa fa-solid fa-circle"></i>
                                    <span class="ml-5"> CONTACT</span>
                                </li>
                                <li class="list-group-item Scrolist Scrolist-gray">
                                    <div class="vl"></div>
                                </li>
                            </ul>
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