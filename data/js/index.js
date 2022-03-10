// Основной JavaScript практического сайта.

// alert('Привет-привет! Основной модуль JS успешно подгружен!')

// Плавные анимации для кнопок скролла вверх и вниз.
function ScrollUp(){
    var t,s;
    s=document.documentElement.scrollTop||window.pageYOffset;
    t=setInterval(function(){if(s>0)window.scroll(0,s-=5);else clearInterval(t)},5);
}
function ScrollDown(){
    var t,s;
    s=document.documentElement.scrollTop||window.pageYOffset;
    t=setInterval(function(){if(s<document.documentElement.scrollHeight-document.documentElement.clientHeight)window.scroll(0,s+=5);else clearInterval(t)},5);
}

// Замена css tabs. Jeb mosniy. Переключает вкладки без отдельных страниц.
function showTab(tabs, tab){
    var links = tabs.querySelectorAll(".my-tabs-link > a")
    links.forEach(function(link) {
        console.log(link.getAttribute("href"))
        document.querySelector(link.getAttribute("href")).style.display = 'none';
    });
    document.querySelector(tab.getAttribute("href")).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function(){ 
    var my_tabs_array = document.querySelectorAll(".my-tabs");
    
    my_tabs_array.forEach(function(tabs) {
        var links = tabs.querySelectorAll(".my-tabs-link > a")
        links.forEach(function(link) {
            link.addEventListener("click", function(event){
                showTab(tabs, this)
                event.preventDefault()
            });
        });
    });
});