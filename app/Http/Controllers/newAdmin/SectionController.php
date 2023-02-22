<?php

namespace App\Http\Controllers\newAdmin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Section;
use App\Models\Note;

class SectionController extends Controller
{
    public function index(Request $request)
    {
        $sections = Section::when($request->search, function($query)use($request){
            $query->where('name', 'like', $request->search);
        })->paginate(25);
        $parentSections = Section::where('parent_id', '=', null)->pluck('name', 'id')
        ->all();
        return view('admin_new.sections.index', compact('sections', 'parentSections'));
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
    public function edit($id)
    {
        $sectionMain = Section::find($id);
        $parentSections = Section::where('parent_id', '=', null)->pluck('name', 'id')->all();
        $notes = Note::where('status', '=', 1)->get();
        return view('admin_new.sections.edit', compact('parentSections', 'notes', 'sectionMain'));
    }
    public function update(Request $request, $id)
    {
        $data = [
            "parent_id" => $request->parent_id,
            "name" => $request->name,
            "note_id" => $request->note_id,
            "type" => $request->type,
        ];
        $section = Section::find($id)->update($data);
        return back()->with('success','Section Updated Successfully.');
    }
}
