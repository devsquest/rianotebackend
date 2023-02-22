<?php

namespace App\Http\Controllers\newAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Section;
use App\Models\Note;
use Illuminate\Support\Facades\Auth;

class SectionController extends Controller
{
    public function index()
    {

    }
    public function create()
    {
        $parentSections = Section::where('parent_id', '=', null)->pluck('name', 'id')->all();
        $notes = Note::where('status', '=', 1)->get();
        return view('admin_new.sections.create', compact('parentSections', 'notes'));
    }
    public function store(Request $request)
    {
        $data = [
            "parent_id" => $request->parent_id,
            "name" => $request->name,
            "note_id" => $request->note_id,
            "type" => $request->type,
        ];
        $section = Section::create($data);
        return back()->with('success','Section Created Successfully.');
    }
}
