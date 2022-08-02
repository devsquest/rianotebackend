<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Option;
use App\Models\Question;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class OptionController extends Controller
{
    public $successStatus = 200;

    /**
     * @return View
     */
    public function index(){
        $options = Option::paginate(15);

        return view('option.list-option', [
            'options' => $options,
            'user' => Auth::user()
        ]);
    }

    /**
     * @return Application|RedirectResponse|Redirector
     */
    public function addOption(){
        return view('option.add-option', [
            'user' => Auth::user(),
            'questions' => Question::all()
        ]);
    }

    /**
     * @param Request $request
     * @return Application|RedirectResponse|Redirector
     */
    public function saveOption(Request $request){
        $data = $request->all();

        Option::create([
            'option_text' => $data['option-text'],
            'question_id' => $data['question-type']
        ]);

        return redirect('admin/option-list')->with('status', 'Option Has Been Updated/Inserted');
    }

    public function deleteOption($id) {
        Option::destroy($id);
        return redirect('admin/option-list')->with('status', 'Option Has Been Deleted Successfully');
    }

    public function editOption($id)
    {
        $option = Option::find($id);

        return view('option.add-option', [
            'user' => Auth::user(),
            'editOption' => $option,
            'questions' => Question::all()
        ]);
    }

    public function updateOption(Request $request, $id)
    {
        $data = $request->all();

        $option = Option::find($id);
        $option->option_text = $data['option-text'];
        $option->question_id = $data['question-type'];
        $option->save();

        return redirect('admin/option-list')->with('status', 'Option Has Been Updated');
    }
}
