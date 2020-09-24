<?php
// require "web.php";

use src\Core\DB;

// echo $_POST["id"];
// echo $_POST["pass"];


// $users = DB::fetchAll("SELECT * FROM users",[]);

// foreach($users as $v) {
//   echo $v["id"];
// }

// echo "asdf";


$user = DB::fetch("SELECT * FROM user WHERE email = ? AND pass = ?",[$_POST["id"], $_POST["pass"]]);

echo $user;
$user = DB::fetch("SELECT * FROM user WHERE email = ?",[$_POST["id"]]);

echo $user;
$user = DB::fetch("SELECT * FROM user WHERE pass = ?",[$_POST["pass"]]);

echo $user;
// if($user) {
//   $_SESSION["user"] = $user;
//   move("/","로그인 되었습니다.");
// }else {
//   back("아이디 또는 비밀번호가 일치하지 않습니다.");
// }
?>