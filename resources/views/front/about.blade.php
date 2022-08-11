@extends('front.layouts.app')
@section('title', 'About')
@section('content')
<div class="container-fluid ">
    <div class="row note-header-about">
        <div class="col-md-6 ">
            <div class="logo-placeholder-note-front mt-4">
                <p class="tag m-b-5 "><img src="{{ asset('front/img/Faster_note logo.png') }}" class="logo-img" alt=""></p>
            </div>
            <div>
                <h1 class="note-down-logo-about-us">ABOUT US</h1>
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
    <div class="row scnd-pg-about">
        <div class="col-md-12">
            <h3 class="scnd-pg-h-about">NOTE DESIGNER WAS <br>
                DEVELOPED BY PATRICIA AND <br>
                MARK, A HUSBAND AND WIFE <br>
                TEAM OF PSYCHOLOGISTS <br>
                WHO WERE INTERESTED IN <br>
                HELPING CLINICIANS WITH THE <br>
                OFTEN VEXING TASK OF <br>
                CLINICAL RECORD KEEPING. <br>
                HERE IS A BIT OF their story....
            </h3>
            <p class="scnd-pg-p-about">As a clinical psychologist in practice for over 20 years, I (Patricia) was well
                aware of the challenges <br>
                of keeping good clinical records - feeling overwhelmed when staring down at the blank page after a
                <br>
                session, often writing far too much detail as I tried to capture the complexity of what had gone on,
                <br>
                and then feeling nervous about what I had written, whether it was too much, or not enough, or if it
                <br>
                was even legible! <br> <br>
                After several years of this struggle with my paperwork, I decided to review the literature on proper
                <br>
                note writing and began to build a checklist of well-articulated statements and phrases that capture
                <br>
                what tends to go on during a clinical hour: I would simply check off what seemed to apply in any
                <br>
                given session and then add a few comments to fill in any further details. Though using the checklist
                <br>
                was definitely helpful, it didn't have the quality and clinical feel provided by a more coherent
                <br>
                narrative.
            </p>
            <!-- <button class="readmore-btn"> READ MORE</button> -->
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