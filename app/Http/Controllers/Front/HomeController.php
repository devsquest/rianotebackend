<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subscription;

class HomeController extends Controller
{
    public function index()
    {
        return view('front.home');
    }
    public function about()
    {
        return view('front.about');
    }
    public function pricing()
    {
        $subscriptions = Subscription::where('status', 1)->get();
        return view('front.pricing', compact('subscriptions'));
    }
    public function faq()
    {
        return view('front.faq');
    }
    public function test()
    {
        return view('front.test');
    }
    public function commingSoon()
    {
        return view('front.comming_soon');
    }
}
