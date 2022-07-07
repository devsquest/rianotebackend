<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::get('notes', 'API\NoteController@index');
Route::post('login', 'API\UserController@login');
Route::post('register', 'API\UserController@register');
Route::group(['middleware' => 'auth:api'], function(){
    Route::get('details', 'API\UserController@details');
    Route::post('/user-info', 'API\UserController@updateUser');
    Route::get('sections', 'API\SectionController@index');
    Route::get('notes', 'API\NoteController@index');
    Route::get('notes/{id}', 'API\NoteController@getSectionByType');
    Route::get('headings/{id}', 'API\HeadingController@getHeadingsByType');
    Route::post('headings/save', 'API\HeadingController@saveHeading');
    Route::put('headings/{id}', 'API\HeadingController@editHeading');
    Route::delete('headings/{id}', 'API\HeadingController@deleteHeadingById');
    Route::get('questions/{id}', 'API\SectionController@getSectionContent');
    Route::put('option/{id}', 'API\OptionController@editOption');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
