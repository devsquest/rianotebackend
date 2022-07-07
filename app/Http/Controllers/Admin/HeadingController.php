<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Heading;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;

class HeadingController extends Controller
{
    public $successStatus = 200;

    /**
     * @return \Illuminate\View\View
     */
    public function index(){
        $userId = Auth::user()->getAuthIdentifier();
        $headings = Heading::where([
            ['user_id', '=', $userId]
        ])->get();

        return view('heading.list-heading', [
            'headings' => $headings
        ]);
    }

    /**
     * @return Application|RedirectResponse|Redirector
     */
    public function addHeading(){
        return view('heading.add-heading');
    }

    /**
     * @param Request $request
     * @return Application|RedirectResponse|Redirector
     */
    public function saveHeading(Request $request){
        $data = $request->all();
        $userId = Auth::user()->getAuthIdentifier();

        Heading::create([
            'heading_text' => $data['heading_text'],
            'heading_content' => $data['heading_content'],
            'note_id' => $data['note_id'],
            'user_id' => $userId,
        ]);
        return redirect('admin/heading-list')->with('status', 'Heading Has Been Updated/Inserted');
    }
}
