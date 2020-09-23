<?php
namespace src\Controller;
class MainController {
  public function main() {
    view("main",[]);
  }
  public function login() {
    view("login",[]);
  }
}