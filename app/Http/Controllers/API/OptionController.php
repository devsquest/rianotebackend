<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Option;
use Illuminate\Http\Request;

class OptionController extends Controller
{
    public function editOption(Request $request, $id)
    {
        $option = Option::findOrFail($id);
        $option->update([
            'option_text' => $request->get('option_text')
        ]);
        return response()->json($option, 200);
    }
}
