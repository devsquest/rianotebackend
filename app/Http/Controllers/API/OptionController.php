<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Option;
use Illuminate\Http\Request;

class OptionController extends Controller
{
    public function addOption(Request $request)
    {
        $data = [
            'option_text' => $request->option_text,
            'question_id' => $request->question_id
        ];
        $option = Option::create($data);
        $response = ['status' => 'success', 'msg' => 'Option added', 'data' => ['option' => $option]];
        return response()->json($response, 201);
    }
    public function editOption(Request $request, $id)
    {
        $option = Option::findOrFail($id);
        $option->update([
            'option_text' => $request->get('option_text')
        ]);
        return response()->json($option, 200);
    }
    public function updateExistingOption(Request $request)
    {
        $id = $request->id;
        $option = Option::findOrFail($id);
        $option->update([
            'option_text' => $request->get('option_text')
        ]);
        return response()->json($option, 200);
    }
}
