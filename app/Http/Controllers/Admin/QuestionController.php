<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\Section;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class QuestionController extends Controller
{
    public $successStatus = 200;

    /**
     * @return View
     */
    public function index(){
        $questions = Question::paginate(5);

        return view('question.list-question', [
            'questions' => $questions,
            'user' => Auth::user(),
            'sections' => Section::all()
        ]);
    }

    /**
     * @return Application|RedirectResponse|Redirector
     */
    public function addQuestion(){
        return view('question.add-question', [
            'user' => Auth::user(),
            'sections' => Section::all()
        ]);
    }

    /**
     * @param Request $request
     * @return Application|RedirectResponse|Redirector
     */
    public function saveQuestion(Request $request){
        $data = request()->all();

        $question = new Question();
        $question->question_text = $data['question-text'];
        $question->question_type = $data['question-type'];
        $question->selection_type = $data['selection-type'];
        $question->section_id = $data['section-type'];
        $question->save();

        return redirect('admin/question-list')->with('status', 'Question Has Been Updated/Inserted');
    }

    public function deleteQuestion($id) {
        Question::destroy($id);
        return redirect('admin/question-list')->with('status', 'Question Has Been Deleted Successfully');
    }

    public function editQuestion($id)
    {
        $question = Question::find($id);

        return view('question.add-question', [
            'user' => Auth::user(),
            'editQuestion' => $question,
            'sections' => Section::all()
        ]);
    }

    public function updateQuestion(Request $request, $id)
    {
        $data = $request->all();

        $question = Question::find($id);
        $question->question_text = $data['question-text'];
        $question->question_type = $data['question-type'];
        $question->selection_type = $data['selection-type'];
        $question->section_id = $data['section-type'];
        $question->save();

        return redirect('admin/question-list')->with('status', 'Section Has Been Updated');
    }
}
