<?php
	// с кодировкой возможны проблемы, поэтому если вдруг появятся каркозябры, попробуйте добавить следующую строчку кода 
        header('Content-Type: text/html; charset=windows-1251');
	
	// сторонняя страница сайта, с которой будем брать контент. 
	$content = file_get_contents('https://github.com/Diablolend/My-First-Site-Expirience/commits/master');
 
	// определяем начало необходимого фрагмента кода, до которого мы удалим весь контент
	$pos = strpos($content, '<div class="js-navigation-container js-active-navigation-container mt-3"><span class="needed-text">');
 
	// удаляем все до нужного фрагмента
	$content = substr($content, $pos);
 
	// находим конец необходимого фрагмента кода
	$pos = strpos($content, '</span></div>');
 
	// отрезаем нужное количество символов от конца фрагмента
	$content = substr($content, 0, $pos);
 
    //если в нужном контенте встречается не нужный кусок текста, то его вырезаем
    $content = str_replace('текст, который нужно вырезать','', $content); 
 
	// выводим необходимый контент
	echo $content;
?>