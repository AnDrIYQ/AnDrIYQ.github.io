<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'lib/Exception.php';
require 'lib/PHPMailer.php';
require 'lib/SMTP.php';

header('Content-type: application/json');

$mail = new PHPMailer(true);
$data = json_decode(file_get_contents('php://input'), true);

try {
    $mail->SMTPDebug = 0;                    
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.gmail.com';                    
    $mail->SMTPAuth   = true;                              
    $mail->Username   = 'andrexonerhg@gmail.com';                    
    $mail->Password   = 'KjKsxpjj1234554321';                              
    $mail->SMTPSecure = 'tls';            
    $mail->Port       = 587;

    //Recipients
    $mail->setFrom('travels@site.com', 'Site');
    $mail->addAddress('andrexonerhg@gmail.com');              

    //Content
    $mail->isHTML(true);                                 
    $mail->Subject = 'Message from site Mamchur Auto';
    $mail->Body    = '<h1> Номер клієнта: ' . $data['phone']  . '</h1>';

    $mail->send();
    echo json_encode(['message' => 'success']);
} catch (Exception $e) {
    echo json_encode(['message' => 'error']);
}


