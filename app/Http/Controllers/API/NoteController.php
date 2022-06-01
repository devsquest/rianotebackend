<?php
namespace App\Http\Controllers\API;
use App\Section;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Note;
use Validator;
class NoteController extends Controller
{
    public $successStatus = 200;
    public function index(){
        $notes = Note::all();
        return response()->json(['success' => $notes], $this->successStatus);
    }
    public function getSectionByType(Request $request){
        $sections = Section::select("sections.id as id","sections.name as name")
            ->join("notes", "notes.id", "=", "sections.note_id")
            ->where("notes.id", '=', $request->id)
            ->where("sections.parent_id", '=', null)
            ->get();
        foreach($sections as $section){
            $child = Section::select("sections.id as id","sections.name as name")->where('parent_id', '=', $section->id)->get();
            if(!empty($child)){
                $section['children']=$child;
            }
        }
        return response()->json(['success' => $sections], $this-> successStatus);
    }
}