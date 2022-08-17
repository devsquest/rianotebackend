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
                    <div class="card-header note-card-header" id="headingOne">
                        <h2 class="mb-0">
                            <button class="btn btn-block text-left note-accordion-btn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Tell me more about the different versions?
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                            There are two main versions of Note Designer: the Download version and the Online version. The Download version is our classic program people have been using for years. Here you download the program and install it on your computer(s) – standard Mac and/or Windows systems. It comes with a small database in which the program stores any custom statements you create. You can also store notes temporarily until you can print them or copy/paste them into a secure long-term encrypted storage system. Installation of the Download version is straightforward and can take as little as 5 minutes: You will provide your “signature line” that you want on your notes, then upon purchase you will be automatically sent an email that will include instructions plus a link for your download and an authorization code to use once you launch the program. The Online version runs in any computer’s browser, so there is nothing to install and it is convenient to use across multiple devices. Upon purchase of your monthly or annual subscription you will be emailed a link to set up your account and password. Once you start using the program, if you create some of your own phrases or customize the pre-set statements, these customizations will all be safely stored in your account on our server so they will be available when you log in from other devices. Because this Online version is on the web, it is possible for us to make ongoing developments (e.g., new content) available immediately.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header note-card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-block text-left collapsed note-accordion-btn" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Tell me more about the different payment plans?
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            For the Download version there is only one payment plan: A one-time payment with no monthly or additional fees. For the Online versions there is either a low monthly subscription fee or an even less expensive annual fee. For both versions there are also reduced-fee group rates for groups of 3 or more practitioners: For the Online version this group rate is displayed on our Pricing page; for the Download version we ask you to contact us at info@fasternote.com so we can work out the details based on your particular needs.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header note-card-header" id="headingThree">
                        <h2 class="mb-0">
                            <button class="btn btn-block text-left collapsed note-accordion-btn" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How is billing handled?
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                            All our online sales are handled by Fastspring, a world leader in e-commerce and the retail partner for thousands of online companies internationally. Fastspring securely handles your credit card information and billing (using industry-standard encryption to protect the confidentiality of your personal information); we at Faster Note then set up your user account and ensure access to the program. Depending on the plan you choose, billing is automatically done once (for the Download version) or either monthly or annually (for the online versions). The merchant of record is Fastspring’s office in the United States, and pricing is therefore in US dollars with conversions applied for other currencies that take into account the typical range of currency exchange fluctuation over time. If you need it, their W-9 information can be found here.
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