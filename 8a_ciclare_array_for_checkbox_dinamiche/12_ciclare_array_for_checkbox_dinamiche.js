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