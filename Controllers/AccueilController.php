<?php

namespace Controllers;

class AccueilController
{
	public function __construct()
	{
		
	}
	public function display()
	{
		$template = "views/accueil.phtml";
		include 'views/layout.phtml';
	}
}