<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function reactApp()
    {
        return view('mission.react-app');
    }
}
