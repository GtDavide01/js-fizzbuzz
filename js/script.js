//richiamo div html
const listNumber = document.getElementById("listnumberfizzbuzz");
console.log(listNumber);

//varibaile che contiene il messaggio 
let stampa = "";
//stampo in console i numeri da 1 a 100 
for ( let i=1 ; i<= 100 ; i++){
    
    //SE sono multipli di 3 e di 5 si chiameranno FizzBuzz 
    if (i%3===0 && i%5===0){
        stampa = "FizzBuzz"
        console.log(stampa);
        message.classList.add("square");
    }//Altrimenti SE sono multipli di 3 si chiametaano Fizz
    else if(i%3===0){
        stampa = "Fizz";
        console.log(stampa);
    }//Altrimenti SE sono multipli di 5 si chiameranno Buzz
    else if (i%5===0){
        stampa = "Buzz";
        console.log(stampa);
    }//Altrimenti stampa semplicemtne il numero
    else{
        stampa = i ; 
        console.log(i);
    } 
    
   

}

