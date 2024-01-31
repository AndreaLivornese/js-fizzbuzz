
/*

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

*/

let gridElement= document.querySelector("#grid");


for(let i=1; i<=100; i++){
    let result="";

    if(i % 3 == 0){
        result += "Fizz"
    }
    if(i % 5 == 0){
        result+="Buzz"
    }else{
        result = i;
    }

    const newElement= document.createElement("div");
    newElement.innerHTML= result;


    gridElement.append(newElement);
}
