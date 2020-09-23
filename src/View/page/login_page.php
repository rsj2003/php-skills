<!-- <!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>php_skills</title>
  <link rel="stylesheet" href="./src/css/login.css">
</head>
<body>
  <div class="center">
    <form action="/login" method="POST" class="login_form">
      <input type="text" placeholder="아이디" id="id" name="id">
      <input type="password" placeholder="비밀번호" id="pass" name="pass">
      <input type="submit" value="로그인">
    </form>
  </div>
</body>
</html> -->
<?php
session_start();

require "lib.php";
require "web.php";

use src\Core\DB;

// echo $_POST["id"];
// echo $_POST["pass"];


// $users = DB::fetchAll("SELECT * FROM users",[]);

// foreach($users as $v) {
//   echo $v["id"];
// }

// echo "asdf";

$user = src\Core\DB::fetch("SELECT * FROM user WHERE id = ? AND pass = ?",[$_POST["id"], $_POST["pass"]]);


if($user) {
  $_SESSION["user"] = $user;
  move("/","로그인 되었습니다.");
}else {
  back("아이디 또는 비밀번호가 일치하지 않습니다.");
}
?>
