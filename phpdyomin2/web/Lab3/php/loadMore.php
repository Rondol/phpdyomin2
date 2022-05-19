<?php

require_once('connect.php');

$kol = $_POST['kol'];
$tek = $_POST['tek'];

$recipe = mysqli_query($connect, "SELECT * FROM `recipe`");
$recipe = mysqli_fetch_all($recipe);

if ($tek < 20) {
      for ($i = $tek; $i < ($tek + $kol); $i++) {
            $message[$i] = array(
                  'id_recipe' => $recipe[$i][0],
                  'recipe_img' => $recipe[$i][1],
                  'name_recipe' => $recipe[$i][2],
                  'recipe_price' => $recipe[$i][4]
            );
      }
      echo json_encode($message);
} else {
      return false;
}
