<?php
    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $subject = "=?utf-8?B?".base64_encode("Сообщение с Сайта")."?="; 
    $headers = "From: $email\r\nReply-to: $email\r\nContentType: text/html; charset=utf-8\r\n"
    
    $success = mail("coach.in.ukraine@gmail.com",$subject,$message,$headers);

?>