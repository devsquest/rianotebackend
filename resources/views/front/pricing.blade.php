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
                <div class="col-md-3 col-12 mr-5 ml-5">
                    <div class="pricing-single">
                        <div class="pricing-single-header text-center pt-4">
                            <p class="pricing-single-header-version-name">DOWNLOAD VERSION</p>
                            <p>
                                <span class="pricing-single-header-version-price-sign">$</span>
                                <span class="pricing-single-header-version-price-value">185</span>
                            </p>
                            <p class="pricing-single-header-version-price-by">USD Total</p>
                        </div>
                        <div class="pricing-single-body mt-5">
                            <div class="pricing-single-body-text text-center">
                                <p class="pricing-single-body-text-p">Mac and/or Windows</p>
                                <p class="pricing-single-body-text-p">All your computers</p>
                                <p class="pricing-single-body-text-p">Short-term Storage on your computer</p>
                                <p class="pricing-single-body-text-p">One-time Fee</p>
                                <p class="pricing-single-body-text-p">Group pricing? contact us!</p>
                                <p class="pt-5 pb-5">
                                    <button class="btn pricing-single-body-text-btn">Start Now</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--col-->
                <div class="col-md-3 col-12 mr-5 ml-5">
                    <div class="pricing-single">
                        <div class="pricing-single-header text-center pt-4">
                            <p class="pricing-single-header-version-name">INDIVIDUAL MONTH</p>
                            <p>
                                <span class="pricing-single-header-version-price-sign">$</span>
                                <span class="pricing-single-header-version-price-value">15</span>
                            </p>
                            <p class="pricing-single-header-version-price-by">USD/Month</p>
                        </div>
                        <div class="pricing-single-body mt-5">
                            <div class="pricing-single-body-text text-center">
                                <p class="pricing-single-body-text-p">Mac and/or Windows</p>
                                <p class="pricing-single-body-text-p">Runs in your browser</p>
                                <p class="pricing-single-body-text-p">Access from any computer</p>
                                <p class="pricing-single-body-text-p">Low monthly Fee</p>
                                <p class="pricing-single-body-text-p">Highly customizeable</p>
                                <p class="pt-5 pb-5">
                                    <button class="btn pricing-single-body-text-btn">Start Now</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--col-->
                <div class="col-md-3 col-12 mr-5 ml-5">
                    <div class="pricing-single">
                        <div class="pricing-single-header text-center pt-4">
                            <p class="pricing-single-header-version-name">INDIVIDUAL ANNUAL</p>
                            <p>
                                <span class="pricing-single-header-version-price-sign">$</span>
                                <span class="pricing-single-header-version-price-value">150</span>
                            </p>
                            <p class="pricing-single-header-version-price-by">USD/Month</p>
                        </div>
                        <div class="pricing-single-body mt-5">
                            <div class="pricing-single-body-text text-center">
                                <p class="pricing-single-body-text-p">Mac and/or Windows</p>
                                <p class="pricing-single-body-text-p">Runs in your browser</p>
                                <p class="pricing-single-body-text-p">Access from any computer</p>
                                <p class="pricing-single-body-text-p">Even lower annual Fee</p>
                                <p class="pricing-single-body-text-p">Highly customizeable</p>
                                <p class="pt-5 pb-5">
                                    <button class="btn pricing-single-body-text-btn">Start Now</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--col-->
            </div>
        </div>
        <!-- <div class="col-md-12">
            <h1 class="scnd-pg-h2-pricing mt-5">WHICH NOTE DESIGNER <br> VERSION IS BEST FOR YOU?</h1>
        </div>
        <div class="col-md-6">
            <div class="content">
                <h4>BENEFITS OF ALL VERSIONS OFNOTE DESIGNER:</h4>
                <ul class="list-group content-list">
                    <li class="list-group-item lst" style="font-weight:bold;">30-day trial period: Just return
                        for full-refund if you are not satisfied </li>
                    <li class="list-group-item lst">Notes are never stored in the cloud, to protect the
                        confidentiality of your information.</li>
                    <li class="list-group-item lst">Point-Click-Your note is done: Hundreds of phrases to
                        choose from, organized according to the client/patient's affective and mental state,
                        the themes of the session, the interventions or treatments in the session, and an
                        evaluation of progress plus plans for ongoing treatment. <b style="font-weight:bold;">SOAP</b> format is also an option.</li>
                    <li class="list-group-item lst">Customize your own statements for each section of the
                        note.</li>
                    <li class="list-group-item lst">Add specific comments about the session, as appropriate.
                    </li>
                    <li class="list-group-item lst">Each note includes your personalized signature line, to
                        which you can add lines with your institutional affiliation, address, etc.</li>
                    <li class="list-group-item lst">Set your preferences for wording (e.g., "client" vs
                        "patient"; "behaviour" vs "behavior").</li>
                    <li class="list-group-item lst">Create an Intake or Termination Note.</li>
                    <li class="list-group-item lst">**Includes a new "Treatment Plan" module at no extra
                        charge.</li>
                    <li class="list-group-item lst">Customize your own headings as needed.</li>
                    <li class="list-group-item lst">Print your note, or copy it to your word processor or EHR.
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-md-6">
            <div class="content rght-content ">
                <h4>BENEFITS OF THE ONLINE SUBSCRIPTION VERSION:</h4>
                <ul class="list-group content-list">
                    <li class="list-group-item lst">Can be used on all of your tablets (iPads, Chromebooks),
                        laptops and desktops.</li>
                    <li class="list-group-item lst">New content and features added and updated regularly</li>
                    <li class="list-group-item lst">Offers almost unlimited space for you to create your own
                        content</li>
                    <li class="list-group-item lst">Access to all your customizations from all of your devices
                    </li>
                    <li class="list-group-item lst">All your customizations are stored safely for future use
                    </li>
                    <li class="list-group-item lst">Users can edit the pre-set statements</li>
                    <li class="list-group-item lst">Low monthly or annual fee options</li>
                    <li class="list-group-item lst">Ideal for clinics and groups (with discount rates for
                        groups of 3 or more)</li>
                </ul>
            </div>
            <div class="col-md-6">
                <div class="content rght-content rght-lower-content">
                    <h4>BENEFITS OF THE NOTE DESIGNER DOWNLOAD VERSION:</h4>
                    <ul class="list-group content-list">
                        <li class="list-group-item lst">One-time fee</li>
                        <li class="list-group-item lst">Can download onto all your Mac and/or Windows
                            computers</li>
                        <li class="list-group-item lst">Offers temporary short-term storage on your computer
                        </li>
                        <li class="list-group-item lst">Users can hide pre-set statements they do not use
                        </li>
                        <li class="list-group-item lst">Users can create and customize hundreds of their own
                            statements</li>
                        <li class="list-group-item lst">Group rates available (contact us for more details)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <h1 class="scnd-pg-h2-pricing">WHICH NOTE DESIGNER <br>
            VERSION IS BEST FOR YOU? </h1>
        <img src="Pricing_27.png" alt="Screen" class="screen w-50 mx-auto d-block"> -->
    </div>
    <!--row-->

    <div class="row forth-pg">
        <div class="section">
            <div class="container">
                <h1 style="border-bottom:3px solid white;margin-top:10rem;letter-spacing:2rem;color: white;">
                    TESTIMONIALS
                </h1>
                <div class="row pic">
                    <div class="col-md-2 hide pic-down"><img src="Home_35.png" class="img-fulid" alt="boy pic">
                    </div>
                    <div class="col-md-2 hide"><img src="Home_32.png" class="img-fulid" alt="boy pic">
                    </div>
                    <div class="col-md-2  hide pic-down"><img src="Home_38.png" class="img-fulid" alt="boy pic">
                    </div>
                    <div class="col-md-2 hide "><img src="Home_34.png" class="img-fulid" alt="boy pic">
                    </div>
                    <p class="forth-pg-p">" The software has already saved me hours of work <br> and a
                        truckload of
                        frustration.Thanks!"</p>
                    <p class="forth-pg-p-scnd">- R.P., MAMFT</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row fifth-pg">
        <div class="section" style="padding-bottom:20rem" id="resume">
            <div class="container">
                <h3 class=" scroll-animation fifth-pg-h3">WATCH THE VIDEO</h3>
                <div class="row fifth-pg-row ">
                    <div class="col-md-6 ">
                        <img src="youtube.png" class="img-fluid" alt="" style="height:60rem;width:80%" />
                    </div>
                    <div class="col-md-6">
                        <h4>HEADING</h4>
                        <p class="fifth-pg-p">Ria Notes was created to streamline the process of
                            conceptualizing
                            and documenting
                            our clinical work.With over 350 pre-set phrase and statements, plus the
                            option
                            tp
                            create your own, your
                            therapy notes are compeleted with ease and efficiency.Ria Notes arranges
                            your
                            selection and additional
                            comments into an organized narrative describing the clinical session.Comes
                            with
                            modules for Treatment Planning
                            and Intake & Termination Summaries.Watch our video to see how it work and
                            how
                            Ria
                            Notes can save you valuable
                            time with your record keeping.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row sixth-pg">
        <div class="section">
            <div class="row">
                <div class="col-md-6 sixth-pg-left">
                    <h3 class=" scroll-animation fifth-pg-h3">contract</h3>
                    <ul class="list-group sixth-pg-ul">
                        <li class="list-group-item sixth-pg-list">
                            <div class="md-v-line"></div><i class="fa-solid fa-envelope pe-5"></i>
                            E-MAIL <p class="text-muted sixth-pg-list-p">rianote@gmail.com</p>
                        </li>
                        <li class="list-group-item sixth-pg-list">
                            <div class="md-v-line"></div><i class="fa-solid fa-phone pe-5"></i> PHONE
                            <p class="text-muted sixth-pg-list-p">(541)754-3010</p>
                        </li>
                        <li class="list-group-item sixth-pg-list">
                            <div class="md-v-line"><i class="fa-solid fa-location-dot pe-5"></i>
                                ADDRESS <p class="text-muted sixth-pg-list-p">Crophos Inc. <br>76
                                    Camptown Road
                                    Chicago, <br> IL 60710 United states </p>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 sixth-pg-right ">
                    <div>
                        <form class="form">
                            <div class="row ">
                                <div class="col mt-5">
                                    <input type="text" class="form-control form-input" placeholder="Enter email" name="email">
                                </div>
                                <div class="col mt-5">
                                    <input type="password" class="form-control form-input" placeholder="Enter password" name="pswd">
                                </div>
                            </div>
                            <div class="mb-3 mt-3">
                                <input type="text" class="form-control form-topic" id="pwd" placeholder="Your Topic" name="pswd">
                            </div>
                            <div class="form-check mb-3">
                                <textarea class="form-control form-textarea" rows="5" id="comment" name="text" placeholder="Message...."></textarea>
                            </div>
                            <button type="submit" class="btn btn-warning form-btn">SEND
                                MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection