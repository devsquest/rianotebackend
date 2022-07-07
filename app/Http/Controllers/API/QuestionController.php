<?php
namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Section;
use Illuminate\Support\Facades\Auth;
use Validator;

class QuestionController extends Controller
{
    public $successStatus = 200;
    public function index(){
        $sections = Section::all();
        return response()->json(['success' => $sections], $this-> successStatus);
    }
}
