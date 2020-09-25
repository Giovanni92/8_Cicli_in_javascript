

/*                          <--- per fare andare il ciclo la condizione deve essre vera
while(condizione) {
    //istruzione
}


*/




var maxNum = 10;
var contatore = 1;

  while(contatore<= maxNum){
   // console.log(contatore);
    contatore ++;
  }

// ciclare un array

var colors =['red','blue','green','yellow'];
  var totElement = colors.length;
   var cont = 0;

  while(cont< totElement){
   //   console.log(colors[cont]);
    cont++;
  }
// modo due

while(colors.length){
   console.log(colors.pop());
}
console.log('lungheza=' +colors.length);