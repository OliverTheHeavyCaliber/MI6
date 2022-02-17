<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mission;

class MissionController extends Controller
{
    public function store(Request $request){
        $this->validate($request, [
            'name'=>'required|min:3|max:255',
            'year' => 'required|numeric|min:1960|max:2100',
            'outcome'=>'required|in:in-progress,success,failure'
        ]);

        $mission = Mission::create($request->all());

        return [
            'status' => 'success',
            'message' => 'I was success'
        ];
    }
}
