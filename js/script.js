
/*

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

*/

let gridElement= document.querySelector("#grid");


for(let i=1; i<=100; i++){
    let result="";
    const newElement= document.createElement("div");
    newElement.className="square"
    
    if(i % 3 == 0){
        result += "Fizz";
        newElement.className+=" tree";
    }
    if(i % 5 == 0){
        result+="Buzz";
        newElement.className+=" five";
    }
    if(result == ""){
        result = i;
        newElement.className+=" number";
    }
    
    newElement.innerHTML= result;


    gridElement.append(newElement);
}
