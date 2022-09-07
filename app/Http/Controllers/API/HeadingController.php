<?php

namespace App\Http\Controllers\API;

use App\Models\Heading;
use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HeadingController extends Controller
{
    /** @var int $successStatus */
    public $successStatus = 200;

    /**
     * @return JsonResponse
     */
    public function index()
    {
        $headings = Heading::all();
        return response()->json(['success' => $headings], $this->successStatus);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getHeadingsByType(Request $request): JsonResponse
    {
        $headings = DB::table('headings')->where('note_id', '=', $request->id)
            ->where('user_id', '=', Auth::user()->id)
            ->get();

        return response()->json(['success' => $headings], $this->successStatus);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function saveHeading(Request $request): JsonResponse
    {
        $data = [
            'note_id' => $request->note_id,
            'heading_text' => $request->heading_text,
            'heading_content' => $request->heading_content,
            'user_id' => Auth::user()->id
        ];
        $heading = Heading::create($data);
        $response = ['status' => 'success', 'msg' => 'Heading Created Successfully', 'data' => $heading];
        return response()->json(['success' => $response], 201);
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function editHeading(Request $request, $id)
    {
        $option = Heading::findOrFail($id);
        $option->update([
            'heading_text' => $request->get('heading_text'),
            'heading_content' => $request->get('heading_content')
        ]);
        $response = ['status' => 'success', 'msg' => 'Heading Updated Successfully', 'data' => []];
        return response()->json($response, 200);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function deleteHeadingById(Request $request, $id)
    {
        $heading = Heading::findOrFail($request->id);
        $heading->delete();
        $headings = Heading::all();
        return response()->json(['success' => $headings], 200);
    }
    public function allHeadings($note_id)
    {
        $user = Auth::user();
        $headings = Heading::where('user_id', $user->id)->where('note_id', $note_id)->get();
        return response()->json(['success' => $headings], 200);
    }
}
