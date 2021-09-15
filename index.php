<?php

spl_autoload_register(function ($class_name) {
    	$file = lcfirst(str_replace('\\', '/', $class_name));
    	include $file.".php";
});


$controller = new Controllers\AccueilController();
$controller -> display();