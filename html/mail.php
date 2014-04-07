<?php



$to = "imstellunger@yandex.ru";
$subject = "Письмо с Tehplaner.ru";
$message = "Привет!\n\n";

if ($_SERVER['REQUEST_METHOD']=='POST') {
    $message .= "Имя: " . $_POST['name'] . "\n";
    //$message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Телефон: " . $_POST['phone'] . "\n";    
    $message .= $_POST['extra'];

    mail($to, $subject, $message);
}

?>