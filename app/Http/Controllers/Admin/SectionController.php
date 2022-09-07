<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Note;
use App\Models\Section;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class SectionController extends Controller
{
    public $successStatus = 200;

    /**
     * @return View
     */
    public function index()
    {
        $sections = Section::paginate(15);
        $parentSections = Section::where('parent_id', '=', null)->pluck('name', 'id')
            ->all();

        return view('section.list-section', [
            'parentSections' => $parentSections,
            'sections' => $sections,
            'user' => Auth::user()
        ]);
    }

    /**
     * @return Application|RedirectResponse|Redirector
     */
    public function addSection()
    {
        return view('section.add-section', [
            'user' => Auth::user(),
            'notes' => Note::where('status', '=', 1)->get(),
            'parentSections' => Section::where('parent_id', '=', null)->pluck('name', 'id')->all()
        ]);
    }

    /**
     * @param Request $request
     * @return Application|RedirectResponse|Redirector
     */
    public function saveSection(Request $request)
    {
        $data = $request->all();
        Section::create([
            'name' => $data['section-name'],
            'parent_id' => $data['parent-section'],
            'note_id' => $data['section-note'],
            'type' => $data['type']
        ]);
        return redirect('admin/section-list')->with('status', 'Section Has Been Updated/Inserted');
    }

    public function deleteSection($id)
    {
        Section::destroy($id);
        return redirect()->back()->with('status', 'Section Has Been Deleted Successfully');
    }

    public function editSection($id)
    {
        $section = Section::find($id);

        return view('section.add-section', [
            'user' => Auth::user(),
            'editSection' => $section,
            'notes' => Note::where('status', 1)->get(),
            'parentSections' => Section::where('parent_id', '=', null)->pluck('name', 'id')->all()
        ]);
    }

    public function updateSection(Request $request, $id)
    {
        $data = $request->all();

        $section = Section::find($id);
        $section->name = $data['section-name'];
        $section->parent_id = $data['parent-section'];
        $section->type = $data['type'];
        $section->note()->associate(Note::find($data['section-note']));
        $section->save();

        return redirect('admin/section-list')->with('status', 'Section Has Been Updated');
    }
}
