<?php
use src\Core\Route;

// Route::reg([
//   ["get","/@MainController@main"],
// ]);

if(ss()) {
  Route::reg([
    ["get","/@MainController@main"],
  ]);
}else {
  Route::reg([
    ["get","/@MainController@login"],
  ]);
}