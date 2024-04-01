let price = 1.87
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
const equivalences=[
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
]
let number=[]
// creamos una variable que contenga el dinero que el cliente paga
let moneyPaid=114
let change
let changeAux



// creamos una funcion que calcule el numero de monedas de cada denominacion
function calculateTheNumberCoin(){
    changeAux=change
    for(let i=8; i>=0; i--){
        if(changeAux>=equivalences[i][1]){
            number[i]=parseInt(changeAux/equivalences[i][1])
            changeAux=changeAux*100-number[i]*equivalences[i][1]*100
            changeAux=changeAux/100
            
                     
        }
    }    
}

// creamos una funcion para calcular el cambio
function calculateTheChange(){
    change=moneyPaid-price
    
    
    // llamamos a una funcion que calcule el numero de monedas que se debe devolver
    calculateTheNumberCoin()
}


// creamos una funcion que evalue si el pago es suficiente
function enoughMoney(){
    if(moneyPaid<price){
        console.log('Saldo insuficiente')
    }else{
        // llamamos una funcion que calcule el cambio
        calculateTheChange()
    }
}

enoughMoney()

console.log("Usted paga "+moneyPaid)
console.log("El producto cuesta "+price)

console.log('Su cambio es '+change)
for(let j=0; j<9; j++){
    if(number[j]!=undefined){
        console.log(`Recibe ${number[j]} monedas de tipo ${equivalences[j][0]} que cada una vale ${equivalences[j][1]}`)
    }
}
