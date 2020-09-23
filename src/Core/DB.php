<?php
namespace src\Core;

class DB {
  static $db;

  public function getDB() {
    if(is_null(self::$db))
      self::$db =new PDO("mysql:host=locaalhost; dbname=php_skills; charset=utf8mb4;", "root", "");
    return self::$db;
  }

  public function query($sql, $d) {
    $row = getDB()->prepare($sql);
    try{
      $row->execute($d);
    }catch(\Exception $e) {
      echo $e->getMessage();
    }
  }

  public function fetch($sql, $d) {
    $row = getDB()->prepare($sql);
    $row->execute($d);

    return $row->fetch();
  }

  public function fetchAll($sql, $d) {
    $row = getDB()->prepare($sql);
    $row->execute($d);

    return $row->fetchAll();
  }
}