//dichiaro array vuoto
const lista= [];
//variabile in cui viene salvato l'input
let num;

//ciclo di richiesta
for(let i=0; i<6; i++){
    num= parseInt(prompt("inserisci un numero"));
    //controllo numerico
    //variabile di controllo
    let y=Number.isInteger(num);
    if(y){
        //controllo numero pari
        if(!(num%2==0)){
            lista.push(num);
            console.log(num);
        }
    }
    else{
        console.log("non è un numero");
        i--;
    }
    console.log(y);
}
//stampa array
for(let j=0;j<lista.length;j++){
    console.log(lista[j]);
}
