// Основной JavaScript практического сайта.
// alert('Привет-привет! Основной модуль JS успешно подгружен!')

// Чекер адреса страницы и удаления записи localStorage для вкладок
if (sessionStorage.getItem('last_path') != window.location.pathname) {
    sessionStorage.setItem('last_path', window.location.pathname);
    sessionStorage.removeItem('Tab_Status')
}

// Код для плавного переключения страниц
$(document).ready(function() {    
    $("body").css("opacity", "1");
});

// Спойлер для сайта
$(document).ready(function(){
    $('.spoiler_head').click(function(){
        $(this).next('.spoiler_body').toggle('normal');
        return false;
    });
});

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

// Генерация таблицы
function CreateTablePreset() {
    document.write ('<table width="100%" border="1">');
    for (i=1; i<6; i++) {
    document.writeln("<tr>");
        for (j=1; j<6; j++) document.write("<td>" + i + j + "<\/td>");
        document.writeln("<\/tr>");
    }
    document.write ("<\/table> "); 
    //alert('Таблица создана!')
}

// Webamp - https://github.com/captbaritone/webamp
function Web_player() {
    const app = document.getElementById("app")
    const webamp = new Webamp();
    webamp.renderWhenReady(app);
}

// Замена css tabs. Jeb mosniy. Переключает вкладки без отдельных страниц.
function showTab(tabs, tab){
    var links = tabs.querySelectorAll(".my-tabs-link > a")
    links.forEach(function(link) {
        console.log(link.getAttribute("href"))
        document.querySelector(link.getAttribute("href")).style.display = 'none';
    });
    document.querySelector(tab.getAttribute("href")).style.display = 'block';
    sessionStorage.setItem('Tab_Status', tab.getAttribute("href"));
}

document.addEventListener('DOMContentLoaded', function(){ 
    var my_tabs_array = document.querySelectorAll(".my-tabs");
    var tabId = sessionStorage.getItem('Tab_Status');
    if (tabId != null){
    showTab(document.querySelector(".my-tabs a[href='" + tabId + "']").closest(".my-tabs"), document.querySelector(".my-tabs a[href='" + tabId + "']"))
    }
    if (document.location.hash!=''){
        showTab(document.querySelector(".my-tabs a[href='" + document.location.hash + "']").closest(".my-tabs"), document.querySelector(".my-tabs a[href='" + document.location.hash + "']"))
    }
    
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
