<?php

namespace App\Http\Controllers;

use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index()
    {
        return view('person.index');
    }

    public function people()
    {
        $people = Person::with([
                'status',
                'status.people'
            ])
            ->orderBy('name')
            ->get();

        // ...

        // if ()
        $people->load('image'); // image relationship loaded
                                // (the $people collection thinks)

        // maybe the relations changed ?

        // load the relations again (even if they have been already
        // loaded)
        $people->load('image');

        // load image and status relationships only if it has not
        // been loaded yet
        // to ensure that we have the image and status relationships
        // loaded no matter what happened before in the code
        $people->loadMissing(['image', 'status']);

        return view('person.people', compact('people'));
    }
}
