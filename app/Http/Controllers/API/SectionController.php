<?php
namespace App\Http\Controllers\API;
use App\Option;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Section;
use Illuminate\Support\Facades\Auth;
use Validator;
class SectionController extends Controller
{
    public $successStatus = 200;
    public function index(){
        $sections = Section::all();
        return response()->json(['success' => $sections], $this-> successStatus);
    }
    public function getSectionContent(Request $request){
        $questions = Section::find($request->id)->questions;
        foreach($questions as $question){
            $options = $question->options;
            if(!empty($options)){
                $question['options'] = $options;
            }
        }
        return response()->json(['success' => $questions], $this-> successStatus);
    }
}