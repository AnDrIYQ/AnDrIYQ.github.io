<?php

 if (!empty($_POST)) {
   
   $to = "manager@4social.agency";
	$headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .=  "Reply-To: ". $to ."\r\n";
    $headers .=  'X-Mailer: PHP/' . phpversion();

  $name = $_POST['sname'];
  $phone = $_POST['sphone'];
   
   $subject = "Social";

   $message = '<h1>From ' . $subject . '...<br> ' . 'Name: ' . $name . ' ...<br> ' . 'Phone: ' . $phone . ' </h1>';

  mail($to, $subject, $message, $headers);

  echo 'Done!';
 } 
