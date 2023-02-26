<?php

namespace App\Http\Controllers\newAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Section;
use App\Models\Question;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search = $request->get('search');
        $questions = Question::when($search, function ($query) use ($search) {
            $query->where('question_text', 'like', $search);
        })->paginate(25);
        return view('admin_new.questions.index', compact('questions'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $sections = Section::with('parent')->get();
        return view('admin_new.questions.create', compact('sections'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = [
            'question_text' => $request->question_text,
            'question_type' => $request->question_type,
            'selection_type' => $request->selection_type,
            'section_id' => $request->section_id,
            'only_show_options' => isset($request->only_show_options) ? 1 : 0,
        ];
        $question = Question::create($data);
        return back()->with('success', 'Section Created Successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $sections = Section::with('parent')->get();
        $question = Question::where('id', $id)->first();
        return view('admin_new.questions.edit', compact('sections', 'question'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $question = Question::find($id);
        $data = [
            'question_text' => $request->question_text,
            'question_type' => $request->question_type,
            'selection_type' => $request->selection_type,
            'section_id' => $request->section_id,
            'only_show_options' => isset($request->only_show_options) ? 1 : 0,
        ];
        if ($question->update($data)) {
            return back()->with('success', 'Question Update Successfully.');
        } else {
            return back()->with('success', 'Error in Update.');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
