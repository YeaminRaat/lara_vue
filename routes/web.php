<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\TestController;


Route::get('/', function () {
    return view('test');
});

Route::get('/admin-dashboard', [TestController::class, 'index']);

Route::get('{path}',function(){
	return view('router_view');
})->where( 'path', '.*' );
