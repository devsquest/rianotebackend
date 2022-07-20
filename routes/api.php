<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\NoteController;

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

Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/logout', [UserController::class, 'logout']);
    Route::get('/details', 'API\UserController@details');
    Route::post('/user-info', 'API\UserController@updateUser');
    Route::get('/sections', 'API\SectionController@index');
    Route::get('/notes', [NoteController::class, 'index']);
    Route::get('/notes/{id}', [NoteController::class, 'getSectionByType']);
    Route::get('/headings/{id}', 'API\HeadingController@getHeadingsByType');
    Route::post('/headings/save', 'API\HeadingController@saveHeading');
    Route::put('/headings/{id}', 'API\HeadingController@editHeading');
    Route::delete('/headings/{id}', 'API\HeadingController@deleteHeadingById');
    Route::get('/questions/{id}', 'API\SectionController@getSectionContent');
    Route::put('/option/{id}', 'API\OptionController@editOption');
});
