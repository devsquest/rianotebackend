<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Front\HomeController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;

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

Route::get('/clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    Artisan::call('view:clear');
    return 'Cleared!';
});

Route::get('/', [HomeController::class, 'commingSoon'])->name('front.comming_soon');
Route::get('/homepage', [HomeController::class, 'index'])->name('front.home');
Route::get('/homepage/about', [HomeController::class, 'about'])->name('front.about');
Route::get('/homepage/pricing', [HomeController::class, 'pricing'])->name('front.pricing');
Route::get('/homepage/faq', [HomeController::class, 'faq'])->name('front.faq');
Route::get('/homepage/test', [HomeController::class, 'test'])->name('front.test');

Auth::routes(['register' => false]);

Route::get('/note/{view?}', [\App\Http\Controllers\HomeController::class, 'index'])->where('view', '(.*)')->name('vue_page');

Route::prefix('admin')->group(function () {
    Route::get('note-list', [\App\Http\Controllers\Admin\NoteController::class, 'index'])
        ->middleware('auth');

    Route::get('add-note', [\App\Http\Controllers\Admin\NoteController::class, 'addNote'])
        ->middleware('auth');

    Route::post('save-note', [\App\Http\Controllers\Admin\NoteController::class, 'saveNote'])
        ->middleware('auth');

    Route::post('update-note/{id}', [\App\Http\Controllers\Admin\NoteController::class, 'updateNote'])
        ->middleware('auth');

    Route::get('delete-note/{id}', [\App\Http\Controllers\Admin\NoteController::class, 'deleteNote'])
        ->middleware('auth');

    Route::get('edit-note/{id}', [\App\Http\Controllers\Admin\NoteController::class, 'editNote'])
        ->middleware('auth');

    Route::get('heading-list', [\App\Http\Controllers\Admin\HeadingController::class, 'index'])
        ->middleware('auth');

    Route::get('add-heading', [\App\Http\Controllers\Admin\HeadingController::class, 'addHeading'])
        ->middleware('auth');

    Route::get('section-list', [\App\Http\Controllers\Admin\SectionController::class, 'index'])
        ->middleware('auth');

    Route::get('add-section', [\App\Http\Controllers\Admin\SectionController::class, 'addSection'])
        ->middleware('auth');

    Route::post('save-section', [\App\Http\Controllers\Admin\SectionController::class, 'saveSection'])
        ->middleware('auth');

    Route::post('update-section/{id}', [\App\Http\Controllers\Admin\SectionController::class, 'updateSection'])
        ->middleware('auth');

    Route::get('delete-section/{id}', [\App\Http\Controllers\Admin\SectionController::class, 'deleteSection'])
        ->middleware('auth');

    Route::get('edit-section/{id}', [\App\Http\Controllers\Admin\SectionController::class, 'editSection'])
        ->middleware('auth');

    Route::get('question-list', [\App\Http\Controllers\Admin\QuestionController::class, 'index'])
        ->middleware('auth');

    Route::get('add-question', [\App\Http\Controllers\Admin\QuestionController::class, 'addQuestion'])
        ->middleware('auth');

    Route::post('save-question', [\App\Http\Controllers\Admin\QuestionController::class, 'saveQuestion'])
        ->middleware('auth');

    Route::post('update-question/{id}', [\App\Http\Controllers\Admin\QuestionController::class, 'updateQuestion'])
        ->middleware('auth');

    Route::get('delete-question/{id}', [\App\Http\Controllers\Admin\QuestionController::class, 'deleteQuestion'])
        ->middleware('auth');

    Route::get('edit-question/{id}', [\App\Http\Controllers\Admin\QuestionController::class, 'editQuestion'])
        ->middleware('auth');

    Route::get('option-list', [\App\Http\Controllers\Admin\OptionController::class, 'index'])
        ->middleware('auth');

    Route::get('add-option', [\App\Http\Controllers\Admin\OptionController::class, 'addOption'])
        ->middleware('auth');

    Route::post('save-option', [\App\Http\Controllers\Admin\OptionController::class, 'saveOption'])
        ->middleware('auth');

    Route::post('update-option/{id}', [\App\Http\Controllers\Admin\OptionController::class, 'updateOption'])
        ->middleware('auth');

    Route::get('delete-option/{id}', [\App\Http\Controllers\Admin\OptionController::class, 'deleteOption'])
        ->middleware('auth');

    Route::get('edit-option/{id}', [\App\Http\Controllers\Admin\OptionController::class, 'editOption'])
        ->middleware('auth');

    Route::get('users-list', [\App\Http\Controllers\Auth\UserController::class, 'index'])
        ->middleware('auth');

    Route::post('add-user', [\App\Http\Controllers\Auth\UserController::class, 'create'])
        ->middleware('auth');

    Route::get('register', [\App\Http\Controllers\Auth\UserController::class, 'showRegistrationForm'])
        ->middleware('auth');

    Route::post('update-user/{id}', [\App\Http\Controllers\Auth\UserController::class, 'updateUser'])
        ->middleware('auth');

    Route::get('switch-user/{id}', [\App\Http\Controllers\Auth\UserController::class, 'switchUserStatus'])
        ->middleware('auth');

    Route::get('edit-user/{id}', [\App\Http\Controllers\Auth\UserController::class, 'editUser'])
        ->middleware('auth');
});

// Route::group(['as' => 'admin.', 'prefix' => 'admin', 'middleware' => ['auth']], function () {
//     /**Dashboard */
//     Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
//     /**User */
//     Route::get('/users', [UserController::class, 'index'])->name('user_index');
//     Route::get('/users/add', [UserController::class, 'create'])->name('user_create');
//     Route::post('/users/add', [UserController::class, 'store'])->name('user_store');
//     Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name('user_edit');
//     Route::post('/users/{id}/edit', [UserController::class, 'update'])->name('user_update');
//     Route::post('/users/enterdetail', [UserController::class, 'enterDetail'])->name('user_enter_detail');
// });
