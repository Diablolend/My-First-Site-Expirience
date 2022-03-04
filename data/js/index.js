// Основной JavaScript практического сайта.

// alert('Привет-привет! Основной модуль JS успешно подгружен!')

// Плавные анимации для кнопок скролла вверх и вниз.
function ScrollUp(){
    var t,s;
    s=document.body.scrollTop||window.pageYOffset;
    t=setInterval(function(){if(s>0)window.scroll(0,s-=5);else clearInterval(t)},5);
}
function ScrollDown(){
    var t,s,d;
    s=document.body.scrollTop||window.pageYOffset;
    t=setInterval(function(){if(s>=0)window.scroll(0,s+=5);else clearInterval(t)},5);
}