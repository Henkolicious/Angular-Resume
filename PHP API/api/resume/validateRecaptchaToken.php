<?php
    header("Content-Type: application/json;charset=utf-8");
    header('Access-Control-Allow-Origin: *');

    $postdata = file_get_contents("php://input");    

    if (isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        $secret = $request->secret;
        $response = $request->response;
        $remoteip = $request->remoteip;
        $verificationUrl = $request->verificationUrl;
      
        $data = array(
            'secret' => $secret, 
            'response' => $response,
            'remoteip' => $remoteip
        );

        // use key 'http' even if you send the request to https://...
        $options = array(
            'http' => array(
                'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
                'method'  => 'POST',
                'content' => http_build_query($data)
            )
        );

        $context  = stream_context_create($options);
        echo file_get_contents($verificationUrl, false, $context);        
    }
?>