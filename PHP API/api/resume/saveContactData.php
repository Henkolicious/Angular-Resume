<?php
    header("Content-Type: application/json;charset=utf-8");
    header('Access-Control-Allow-Origin: *');

    $postdata = file_get_contents("php://input");    

    if (isset($postdata) && !empty($postdata)) {
        
        // Write to file
        try {
            $request = json_decode($postdata);
            $textarea = $request->textarea;

            $my_file = 'file.txt';
            $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);        
            fwrite($handle, $textarea . "\n");
        }
        catch (Exception $e) {
            logError('Exception from writing to file: ',  $e->getMessage(), "\n");
        }        

        // Send mail
        emailData("me@henriklarsson.eu", "## Contact ##", $textarea);
    }

    function emailData($email, $subject, $message){
        try {
            $headers = "Content-Type: text/html; charset=UTF-8";
            $message = wordwrap($message, 70);
            mail($email, $subject, $message, $headers);
        }
        catch (Exception $e) {
            logError('Exception from sending mail: ',  $e->getMessage(), "\n");
        }        
    }

    function logError($message){
        try {
            $my_file = 'log.txt';
            $handle = fopen($my_file, 'a') or die('Cannot open file:  ' . $my_file);
            fwrite($handle, $message . "\n");
        }
        catch(Exception $e) {
            throw $e;
        }
    }
?>