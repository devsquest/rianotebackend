@extends('front.layouts.app')
@section('title', 'Pricing')
@section('content')
<div class="container-fluid ">
    <div class="row note-header-about note-header-pricing">
        <div class="col-md-6 ">
            <div class="logo-placeholder-note-front mt-4">
                <p class="tag m-b-5 "><img src="{{ asset('front/img/Faster_note logo.png') }}" class="logo-img" alt=""></p>
            </div>
            <div>
                <h1 class="note-down-logo-about-us">PRICING</h1>
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
    <div class="row scnd-pg-pricing">
        <div class="col-md-12">
            <h3 class="scnd-pg-h-pricing mb-5">LET'S GET STARTED!
                SEE <p style="color:#ffc107!important;">FEATURES</p> AND CHOOSE
                YOUR PLAN BELOW:
            </h3>
        </div>
        <div class="col-md-12 mt-5 mb-5">
            <div class="row">
                @foreach($subscriptions as $subscription)
                <div class="col-md-3 col-12 mr-5 ml-5">
                    <div class="pricing-single">
                        <div class="pricing-single-header text-center pt-4">
                            <p class="pricing-single-header-version-name">{{ $subscription->name }}</p>
                            <p>
                                <span class="pricing-single-header-version-price-sign">{{ $subscription->currency_sign }}</span>
                                <span class="pricing-single-header-version-price-value">{{ round($subscription->price, 0) }}</span>
                            </p>
                            <p class="pricing-single-header-version-price-by">{{ $subscription->currency }} Total</p>
                        </div>
                        <div class="pricing-single-body mt-5">
                            {!! $subscription->description !!}
                            <div class="pricing-single-body-text text-center">
                                <p class="pt-5 pb-5">
                                    <a href="{{ url('/note/subscription?pk='. $subscription->stripe_price_id) }}" class="btn pricing-single-body-text-btn">Start Now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--col-->
                @endforeach
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