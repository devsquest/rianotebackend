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
    public function index(){
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
        $param = [];
        /** @var Heading $heading */
        $heading = DB::table('headings')->where('note_id', '=', $request->get('note_id'))
            ->where('id','=',$request->get('head_id'))->get();

        if (isset($heading[0])) {
            $heading = $heading[0];
            $param['heading_text'] = (empty($request->get('heading_text')) ? $heading->heading_text : $request->get('heading_text'));
            $param['heading_content'] = (empty($request->get('heading_content')) ? (empty($heading->heading_content)? '' : $heading->heading_content) : $request->get('heading_content'));
            DB::table('headings')->where('note_id', '=', $request->get('note_id'))
                ->where('id','=',$request->get('head_id'))->update([
                'heading_text' => (empty($request->get('heading_text')) ? $heading->heading_text : $request->get('heading_text')),
                'heading_content' =>(empty($request->get('heading_content')) ? (empty($heading->heading_content)? '' : $heading->heading_content) : $request->get('heading_content')),
                'note_id' => $request->get('note_id'),
                'user_id' => Auth::user()->id
            ]);
        } else {
            $heading = new Heading();
            $heading->heading_text = ($request->get('heading_text'));
            $heading->heading_content = ($request->get('heading_content'));
            $heading->user_id = Auth::user()->id;
            $heading->note_id = ($request->get('note_id'));
            $heading->save();
        }

        $headings = DB::table('headings')->where('note_id', '=', $request->get('note_id'))
            ->where('user_id', '=', Auth::user()->id)
            ->get();

        return response()->json(['success' => $headings], $this->successStatus);
    }

    /**
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function editHeading(Request $request, $id): JsonResponse
    {
        $option = Heading::findOrFail($id);
        $option->update([
            'heading_text' => $request->get('heading_text'),
            'heading_content' => $request->get('heading_content')
        ]);
        return response()->json($option, 200);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function deleteHeadingById(Request $request)
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
