var progLanguages =['C','C++','JAVA','PYTHON','SWIFT','PHP','C SHARP'];

var formId = document.getElementById('dati');

var cont = 0; 
totLang = progLanguages.length;

var htmlContent = '';

//preferibile da utillizzare se si vuole iterare sui valorei di un array
for (var program of progLanguages){
  
  //console.log(progLanguages[cont]);
  htmlContent += '<div><input type="checkbox" value="'+cont+'">'+program+'+ '+cont+'</div>';
  cont++;
  
}
//console.log(htmlContent);
formId.innerHTML = htmlContent;