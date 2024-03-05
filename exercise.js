import color from 'colors'

function maxMin(array) {
    let max = array[0]
    let min = array[0]
    for(let i = 1; i < array.length; i++){
        if(max < array[i]){
            max = array[i]
        }
        if(min > array[i]){
            min = array[i]
        }
    }
    return {max, min}

}

// console.log(maxMin(array))

const array = [22,6,4,7,8,99, 9,1,88,-100,0,3]
function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let current = array[i]
        let indice = i
        // current = -99 || indice = 5
        for(let j = i+1; j < array.length; j++){
            if(current > array[j]){
                current = array[j]
                indice = j
            }
        }
        let tempo = array[i]
        array[i] = array[indice]
        array[indice] = tempo

    }

    let max = array[array.length - 1]
    let min = array[0]
    return {max, min}
}

console.log(selectionSort(array))


// fibonnaci

// example : fibonacci de 4  = f(4-1) + f(4-2)

function fibonnaci(numberTarget) {

    if(numberTarget <=1){
        return numberTarget
    }
   
   return fibonnaci(numberTarget-1) + fibonnaci(numberTarget-2)

}

console.log(fibonnaci(4));

let numberTarget = 5
// pase por valor en funciones
function passByValue() {
    for(let i = 1; i < 5; i++){
        numberTarget*=i
    }

    return  numberTarget

}


console.log(passByValue())
console.log(numberTarget)

