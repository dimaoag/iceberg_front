<?php

//Script Foreach
$c = true;
$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

	if (isset($_POST['project_name'])) {
		$project_name = preg_replace('/[^a-zA-Zа-яА-Я0-9\' ]u/', '', $_POST['project_name']);
	} else {
		$project_name = 'Мери Мери';
	}

	if (isset($_POST['form_subject'])) {
		$form_subject = preg_replace('/[^a-zA-Zа-яА-Я0-9\' ]u/', '', $_POST['form_subject']);
	} else {
		$form_subject = 'Заявка с сайта на услугу -25%';
	}

	$admin_email  = 'salon.meri.meri@gmail.com';

	foreach ($_POST as $key => $value) {
		if ($value != '' && $key != 'project_name' && $key != 'admin_email' && $key != 'form_subject') {
			$message .= (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') .	
			'<td style="padding: 10px; border: #e9e9e9 1px solid;"><b>' . $key . '</b></td>
			<td style="padding: 10px; border: #e9e9e9 1px solid;">' . $value . '</td></tr>';
		}
	}

	$message = '<table style="width: 100%;">' . $message . '</table>';

	function adopt($text) {
		return '=?UTF-8?B?' . base64_encode($text) . '?=';
	}

	$headers = "MIME-Version: 1.0" . PHP_EOL .
	"Content-Type: text/html; charset=utf-8" . PHP_EOL .
	"From: " . adopt($project_name) . " <" . $admin_email . ">" . PHP_EOL .
	"Reply-To: " . $admin_email . PHP_EOL;

	mail($admin_email, adopt($form_subject), $message, $headers);

}
