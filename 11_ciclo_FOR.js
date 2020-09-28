//for(inizializzazione; condizione; modifica) { blocco di codice}
//ini<ializzazione: viene eseguita all'inizion del ciclo
//Condizione: Viene verificata prima di ogni iterazione
//Modifica: Viene eseguita dopo ogni ciclo

for(var i =0; i<10; i++){
    //console.log(i);
  }
  
  
  
  for(var j =0;;j++){
    
      if(j%2!=0){
        continue;
      }
       if(j>9){
         break;
       }
     console.log(j);
   
    
    
    
  }