<?php


header('Content-type: text/html; charset=utf-8');

echo '<pre>';

try {
    // Подключаемся к серверу
    $client = new SoapClient('http://turbosms.in.ua/api/wsdl.html');
    // Можно просмотреть список доступных методов сервера
    print_r($client->__getFunctions());

} catch(Exception $e) {
    echo 'Ошибка: ' . $e->getMessage() . PHP_EOL;
}
echo '</pre>';
