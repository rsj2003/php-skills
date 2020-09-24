<?php 
namespace src\Controller;
use src\Core\DB;

class User
{
  public function login() {
    view("login",[]);
  }
	function loginAction(){
		extract($_POST);
    $user = DB::fetch("SELECT * FROM user WHERE email = ? AND pass = ?",[$id, $pass]);

    echo $user;
    $user = DB::fetch("SELECT * FROM user WHERE email = ?",[$id]);

    echo $user;
    $user = DB::fetch("SELECT * FROM user WHERE pass = ?",[$pass]);

    echo $user;
    
		// $user = DB::fetch("SELECT * FROM user WHERE email = ? AND pass = ?",[$id, $pass]);
		// if($user) {
		// 	$_SESSION['user'] = $user;
		// 	move("/","로그인 되었습니다.");
		// }else {
    //   back("아이디 또는 비밀번호가 일치하지 않습니다.");
		// }
	}
	function logout() {
		unset($_SESSION['user']);
		move("/","로그아웃되었습니다.");
	}
}