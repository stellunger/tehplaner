<?php



$to = "imstellunger@yandex.ru";
$subject = "Письмо с Tehplaner.ru (партнер)";
$message = "Привет!\n\n";

if ($_SERVER['REQUEST_METHOD']=='POST') {
    $message .= "Имя: " . $_POST['name2'] . "\n";
    //$message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Телефон: " . $_POST['phone2'] . "\n";    
    $message .= $_POST['extra'];

    mail($to, $subject, $message);
}

?>