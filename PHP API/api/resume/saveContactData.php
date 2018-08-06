<?php
    header("Content-Type: application/json;charset=utf-8");
    header('Access-Control-Allow-Origin: *');

    $postdata = file_get_contents("php://input");    

    if (isset($postdata)) {
        $request = json_decode($postdata);
        $textarea = $request->textarea;

        $my_file = 'file.txt';
        $handle = fopen($my_file, 'a') or die('Cannot open file:  '.$my_file);        
        fwrite($handle, $textarea . "\n");       
    }
?>