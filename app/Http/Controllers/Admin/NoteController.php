<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Note;
use App\Models\User;
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
    public function index()
    {
        $notes = Note::paginate(15);

        return view('note.list-note', [
            'notes' => $notes,
            'user' => Auth::user()
        ]);
    }
    /**
     * @return Application|RedirectResponse|Redirector
     */
    public function addNote()
    {
        return view('note.add-note', [
            'user' => Auth::user(),
            'users' => User::where('isAdmin', 0)->get(),
        ]);
    }

    /**
     * @param Request $request
     * @return Application|RedirectResponse|Redirector
     */
    public function saveNote(Request $request)
    {
        $data = $request->all();
        $status = false;
        if ($request->has('note-status')) {
            $status = true;
        }

        Note::create([
            'name' => $data['note-name'],
            'user_id' => $data['userid'],
            'status' => $status
        ]);

        return redirect('admin/note-list')->with('status', 'Note Has Been Inserted');
    }

    public function deleteNote($id)
    {
        Note::destroy($id);
        return redirect('admin/note-list')->with('status', 'Note Has Been Deleted Successfully');
    }

    public function editNote($id)
    {
        $note = Note::find($id);
        // Load user/createOrUpdate.blade.php view
        return view('note.add-note', [
            'user' => Auth::user(),
            'note' => $note,
            'users' => User::where('isAdmin', 0)->get(),
        ]);
    }

    public function updateNote(Request $request, $id)
    {
        $data = $request->all();
        $status = false;

        if ($request->has('note-status')) {
            $status = true;
        }

        $note = Note::find($id);
        $note->name = $data['note-name'];
        $note->user_id = $data['userid'];
        $note->status = $status;
        $note->save();

        return redirect('admin/note-list')->with('status', 'Note Has Been Updated');
    }
}
