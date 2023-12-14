<?php 

// Preleva json
$disk_string = file_get_contents("dischi.json");

// Invia json
header("Content-Type: application/json");
echo $disk_string;