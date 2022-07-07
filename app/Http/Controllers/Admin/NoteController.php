<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use Illuminate\Support\Facades\Auth;

class NoteController extends Controller
{
    /**
     * @return View
     */
    public function index(){
        $notes = Note::paginate(5);

        return view('note.list-note', [
            'notes' => $notes,
            'user' => Auth::user()
        ]);
    }
    /**
     * @return Application|RedirectResponse|Redirector
     */
    public function addNote(){
        return view('note.add-note', [
            'user' => Auth::user()
        ]);
    }

    /**
     * @param Request $request
     * @return Application|RedirectResponse|Redirector
     */
    public function saveNote(Request $request){
        $data = $request->all();
        $status = false;
        if($request->has('note-status')){
            $status = true;
        }

        Note::create([
            'name' => $data['note-name'],
            'status' => $status
        ]);

        return redirect('admin/note-list')->with('status', 'Note Has Been Inserted');
    }

    public function deleteNote($id) {
        Note::destroy($id);
        return redirect('admin/note-list')->with('status', 'Note Has Been Deleted Successfully');
    }

    public function editNote($id)
    {
        $note = Note::find($id);
        // Load user/createOrUpdate.blade.php view
        return view('note.add-note', [
            'user' => Auth::user(),
            'note' => $note
        ]);
    }

    public function updateNote(Request $request, $id)
    {
        $data = $request->all();
        $status = false;

        if($request->has('note-status')){
            $status = true;
        }

        $note = Note::find($id);
        $note->name = $data['note-name'];
        $note->status = $status;
        $note->save();

        return redirect('admin/note-list')->with('status', 'Note Has Been Updated');
    }
}
