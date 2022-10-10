//richiamo div html
const listNumber = document.getElementById("listnumberfizzbuzz");
console.log(listNumber);

//stampo in console i numeri da 1 a 100 
for ( let i=1 ; i<= 100 ; i++){
    //SE sono multipli di 3 e di 5 si chiameranno FizzBuzz 
    if (i%3===0 && i%5===0){
        let i = "FizzBuzz"
        console.log(i);
         //creo variabile che contiene un elemento square 
        const message = document.createElement("square");
         message.innerHTML = i;
        listNumber.append(message);
    }//Altrimenti SE sono multipli di 3 si chiametaano Fizz
    else if(i%3===0){
        let i = "Fizz";
        console.log(i);
         //creo variabile che contiene un elemento square 
         const message = document.createElement("square");
         message.innerHTML = i;
        listNumber.append(message);
    }//Altrimenti SE sono multipli di 5 si chiameranno Buzz
    else if (i%5===0){
        let i = "Buzz";
        console.log(i);
         //creo variabile che contiene un elemento square 
         const message = document.createElement("square");
         message.innerHTML = i;
        listNumber.append(message);
    }//Altrimenti stampa semplicemtne il numero
    else{
        console.log(i);
         //creo variabile che contiene un elemento square 
         const message = document.createElement("square");
         message.innerHTML = i;
        listNumber.append(message);
    } 
    
   

}

