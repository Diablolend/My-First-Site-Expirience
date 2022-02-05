document.write ('<table width="100%" border="1">');
for (i=1; i<6; i++) {
document.writeln("<tr>");
    for (j=1; j<6; j++) document.write("<td>" + i + j + "<\/td>");
    document.writeln("<\/tr>");
}
document.write ("<\/table> ");
/// alert('Таблица в спойлере создана!')