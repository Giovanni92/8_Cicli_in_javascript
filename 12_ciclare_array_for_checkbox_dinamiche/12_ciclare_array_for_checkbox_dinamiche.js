

//PREMESSA - Usa jsbin per fare girare il codice e vedere in tempo reale la pagina html.
//il link alla lezione è: https://www.udemy.com/course/javascript-es6-guida-ecmascript-2015-corso-italiano/learn/lecture/4852090#questions

//47- ciclare un array con for per creare checkbox dinamici

var progLanguages =['C','C++','JAVA','PYTHON','SWIFT','PHP','C SHARP'];

var formId = document.getElementById('dati');

var cont = 0; totLang = progLanguages.length;

var htmlContent = '';

for (;cont < totLang; cont ++){
  
  //console.log(progLanguages[cont]);
  htmlContent += '<div><input type="checkbox" value="'+progLanguages[cont]+'">'+progLanguages[cont]+'</div>';
  
}
//console.log(htmlContent);
formId.innerHTML = htmlContent;

