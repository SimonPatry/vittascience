<?php

spl_autoload_register(function ($class_name) {
    	$file = lcfirst(str_replace('\\', '/', $class_name));
    	include $file.".php";
});

session_start();

if (isset($_GET['page']))
{
	switch($_GET['page'])
	{
		case 'admin':
			$controller = new Controllers\AdminController();
			$controller -> display();
		break;
	}
}
else if(isset($_GET['ajax']) && isset($_SESSION['admin'])){
	switch($_GET['ajax'])
	{
		case 'categories':
			$controller = new Controllers\CategoriesController();
			$controller -> displayCategories();
			break;
	}
}
else
{
	$controller = new Controllers\AccueilController();
	$controller -> display();
}