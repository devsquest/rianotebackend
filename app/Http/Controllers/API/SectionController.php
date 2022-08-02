<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Section;
use App\Models\Question;

class SectionController extends Controller
{
    public $successStatus = 200;

    public function index($note_id, $type = null, $parent_id = null)
    {
        if ($parent_id == null) {
            $sections = Section::where('parent_id', null)->where('note_id', $note_id)->get();
            $response = ['status' => 'success', 'msg' => '', 'data' => [
                'sections' => $sections,
            ]];
        } else {
            if ($type == 'questionnaire') {
                $sections = Section::where('parent_id', $parent_id)->where('note_id', $note_id)->get();
                $response = ['status' => 'success', 'msg' => '', 'data' => [
                    'sections' => $sections,
                ]];
            } else {
                $questions = Question::where('section_id', $parent_id)->get();
                $response = ['status' => 'success', 'msg' => '', 'data' => [
                    'sections' => $questions,
                ]];
            }
        }
        return response()->json($response, $this->successStatus);
    }
    public function getSectionContent(Request $request)
    {
        $questions = Section::find($request->id)->questions;
        foreach ($questions as $question) {
            $options = $question->options;
            if (!empty($options)) {
                $question['options'] = $options;
            }
        }
        $response = ['status' => 'success', 'msg' => '', 'data' => [
            'questions' => $questions,
        ]];
        return response()->json($response, $this->successStatus);
    }
}
