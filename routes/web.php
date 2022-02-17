<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'IndexController@index')->name('homepage');
Route::get('/people-of-interest', 'PersonController@index')->name('person.index');

// any URL that begins with /agent should display the agent.app view
Route::view('/agent/{param?}', 'agent.app')->where('param', '.*')->name('agent');

// any URL that begins with /missions should display the missions.app view
Route::get('/missions/{param?}', 'MissionController@reactApp')->where('param', '.*')->name('missions');


Route::get('/user', function(){
    return [
        'user' => Auth::user()
    ];
});


// test route /people just to see the effects of eager loading
Route::get('/people', 'PersonController@people');
