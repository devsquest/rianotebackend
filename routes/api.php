<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\NoteController;
use App\Http\Controllers\API\HeadingController;
use App\Http\Controllers\API\SectionController;

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
    Route::get('/details', [UserController::class, 'details']);
    Route::post('/user-info', 'API\UserController@updateUser');
    Route::get('/sections/{note_id}/{parent_id?}', [SectionController::class, 'index']);
    Route::get('/notes', [NoteController::class, 'index']);
    Route::get('/notes/{id}', [NoteController::class, 'getSectionByType']);
    Route::get('/headings_all/{note_id}', [HeadingController::class, 'allHeadings']);
    Route::get('/headings/{id}', [HeadingController::class, 'getHeadingsByType']);
    Route::post('/headings/save', [HeadingController::class, 'saveHeading']);
    Route::put('/headings/{id}', [HeadingController::class, 'editHeading']);
    Route::delete('/headings/{id}', [HeadingController::class, 'deleteHeadingById']);
    Route::get('/questions/{id}', 'API\SectionController@getSectionContent');
    Route::put('/option/{id}', 'API\OptionController@editOption');
});
