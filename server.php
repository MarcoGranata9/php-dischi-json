<?php 

// Preleva json
$disk_string = file_get_contents("dischi.json");

$disk_arr = json_decode($disk_string, true);

if(isset($_GET["id"])) {
    $disk = $disk_arr[$_GET["id"]];
    $disk_string = json_encode($disk);
} else {
    $disk_string;
}

// Invia json
header("Content-Type: application/json");
echo $disk_string;