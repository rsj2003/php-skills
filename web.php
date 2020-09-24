<?php
use src\Core\Route;

// Route::reg([
//   ["get","/main@MainController@page/main"],
// ]);

if(ss()) {
  Route::reg([
    ["get","/@MainController@main"],
  ]);
}else {
  Route::reg([
    ["get","/@User@login"],
    ["post","/login@User@loginAction"],
  ]);
}