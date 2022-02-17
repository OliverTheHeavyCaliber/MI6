<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PersonResource;
use Illuminate\Http\Request;

use App\Models\Person;

class PersonController extends Controller
{
    public function moviesTest()
    {
        return [
            'The Shawshank redemption',
            'The Godfather',
            'The Godfather II',
            'Dark Knight',
            '12 angry men',
            'Schindler\'s list',
            'Pulp fiction',
            'Lord of the Rings: Return of the King',
            'The good, the bad and the ugly',
            'Fight club'
        ];
    }

    public function show($person_id)
    {
        $person = Person::findOrFail($person_id);

        return new PersonResource($person);
    }

    public function index(Request $request)
    {
        // try to find "search=" in query string parameters
        $search_term = $request->input('search');

        // start building the query
        $query = Person::orderBy('name', 'asc');

        if ($search_term) {
            // if a search term was found, add searching (using LIKE) to the query
            $query->where('name', 'like', '%'.$search_term.'%');
        }

        // finish building and execute the query
        $people = $query->get();

        // return the results
        return $people;
    }

    public function search(Request $request)
    {
        $search_term = $request->input('search');

        $people = Person::with(['image', 'status', 'aliases'])->where('name', 'like', $search_term . '%')->orderBy('name')->get();

        $people->load('image');

        return PersonResource::collection($people);
    }
}
