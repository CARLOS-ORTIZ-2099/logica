import { faL } from "@fortawesome/free-solid-svg-icons";
import colors from "colors";


/* whatIsInAName(
    [ { first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" } ], 
    
    { last: "Capulet" } ) 
    debería regresar [{ first: "Tybalt", last: "Capulet" }].

*/ 


/* 
    whatIsInAName( [ { "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 } ], 
    { "apple": 1 } )
    debería regresar [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
*/


/* 
    whatIsInAName([ { "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 } ], 
    { "apple": 1, "bat": 2 } )
    
    debería regresar [ { "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 } ].
*/ 



/* 

    whatIsInAName([ { "apple": 99, "bat": 100 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 } ], 
    { "apple": 1, "bat": 2 } )
    
    debería regresar [ { "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 } ].

*/


/* 
    whatIsInAName([ {"a": 1, "b": 2, "c": 3} ], 
        {"a": 1, "b": 9999, "c": 3})
        debería regresar[]
*/



/* 
    Esperando :whatIsInAName([ {"a": 1, "b": 2, "c": 3, "d": 9999} ], 
        {"a": 1, "b": 9999, "c": 3} )
        debería regresar[]
*/

/* pseudocodigo : 
   - primero debemos de recorrer el array de objetos , 
   - evaluar las propiedades de cada objeto que se este recorriendo es decir las propiedades 
   del objeto a evaluar deben estar incluidas en los objetos que se esten recorriendo
   - asi mismo los valores deberan ser iguales tambien
   -en caso no haya coincidencia alguna se retornara un array vacio
    
*/

function whatIsInAName(collection, source) {
    let ar = []
    collection.forEach((valor) => {
        let count = 0
        for(let clave in valor){
           // console.log(valor)
            for(let clave1 in source){

                if(clave == clave1 && valor[clave] == source[clave1]){
                    count++
                    
                    if(count == Object.entries(source).length){
                        ar.push(valor)
                    }
                }
        
            }
            
        }
    })
   console.log(ar)
   return ar
}

/* whatIsInAName(
[ 
    { "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 } ],
    { "apple": 1, "cookie": 2 }
) */




const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function paresImpares(arrayNumbers) {
    const container = {pares:[], impares:[]}
    for(let i = 0; i < arrayNumbers.length; i++){
        arrayNumbers[i] % 2 == 0 
        ? container.pares.push(arrayNumbers[i])
        : container.impares.push(arrayNumbers[i])
 
    }
    return container
}

/* console.log(paresImpares(numeros)) */


function esPrimo(number) {
    let count = 0
   for(let i = 1; i <=number; i++){
        if( number % i === 0 ){
            count++
        }
   }
   if(count === 2){
     return true
   }else{
    return false
   }

}
/* console.log(esPrimo(7)) */



function factorial(number) {
    if(number == 0){
        return 1
    }
    let count = 1
    for (let i = number; i >=1 ; i--) {
       count*=i
        
    }
    return count
}

/* console.log(factorial(4)) */



function palindromo(text) {
    function palindromo(text) {
        const cleanedText = text.replace(/[! , ' ']/ig, '').toLowerCase();
        const reversedText = cleanedText.split('').reverse().join('');
    
        console.log(reversedText);
        console.log(cleanedText);
    
        return cleanedText === reversedText;
    }
    
    console.log(palindromo('radar'));
    
}

/* console.log(palindromo('radar')) */




function sumaDigitos(numbers) {
    let arrayNumbers = numbers.toString().split('')
    let sum = 0
    for (let i = 0; i < arrayNumbers.length; i++) {
      sum+= parseInt(arrayNumbers[i])
        
    }
    return sum
}
/* console.log(sumaDigitos(741)) */




function rangoPrimos(numberInit, numberFinal) {
    let arrayContainer = []
    for (let i = numberInit; i <= numberFinal; i++) {
        let count = 0;
        for (let y = 1; y <= Math.sqrt(i); y++) {
            if (i % y === 0) {
                count++;
                if (y !== i / y) {
                    // Asegura que no cuente el mismo divisor dos veces (cuando y === i / y).
                    count++;
                }
            }
        }
        if (count === 2) {
            arrayContainer.push(i);
        }
    }

    return arrayContainer;
}

/* console.log(rangoPrimos(5, 10)) */



function pruebaPrimo(number) {

    let contador = 0
/* la razon de iterar hasta la raiz cuadrada de un numero para verificar si al dividir ese numero con sus 
   predecesores es por que si hay un divisor mayor que su raiz cuadrada tambien habra un divisor menor 
*/
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            contador++;
            if (i !== number / i) {
                contador++;
            }
        }
    }
    return contador === 2 ? 'es primo' : 'no es primo';
}
//console.log(pruebaPrimo(81))

/*  
    Supongamos que 
    n no es un número primo y tiene un divisor d mayor que su raíz cuadrada.
    Entonces, hay otro número k tal que = d×k=n. Si d es mayor que la raíz
    cuadrada de n, entonces k debe ser menor que la raíz cuadrada de n. Por
    lo tanto, ya hemos considerado k en iteraciones anteriores.

    raiz cuadrada de 36 = 6
    n = 36
    d = 9
    d*k = 36
    k = 36/9
    k = 4 
*/



// emparejamiento de adn

/* 
    teniendo en cuenta que  los pares deben de estar formados por AT y CG que Por ejemplo,
    para la entrada GCG, devuelve
    [["G", "C"], ["C","G"], ["G", "C"]]
    - pairElement("ATCGA")debería regresar 
    [ ["A","T"],["T","A"],["C","G"],["G","C"],["A","T"] ]
*/

/* pesudocodigo 
   aqui lo que hacemos es recibir el string, dividir el string en caracteres individuales,
   luego recorro cada caracter y evaluo si el caracter que se esta recorriendo actualmente
   esta incluido en alguno de los 2 arrays que conforman lo nucleobases, si la condicion marca 
   true evaluar ese array especifico
  
*/

function pairElement(str) {
    let nucleo1 = 'AT';
    let nucleo2 = 'CG';
    let split =  str.split('');
    let newA = []
   for(let i = 0; i < split.length; i++){
        if(nucleo1.includes(split[i])){
          let respose =  [...nucleo1].find((ele) => ele!= split[i])
          newA.push([split[i], respose])

        }else if(nucleo2.includes(split[i])){
          let respose =  [...nucleo2].find((ele) => ele!= split[i])
          newA.push([split[i], respose])
        }
   }
   return newA
}
  
// console.log(pairElement("CTCTA"));



// suma de los numeros impares de la serie de fibonacci

/* pseudocodigo
   aqui lo que hacemos es recibir el numero, iterar el numero a la inversa
   es decir del mayor hasta 0
   luego por cada iteracion hacer una evaluacion  que diga si un numero es impar en la serie o no , si es asi se sumara 
*/

function sumFibs(num) {
    let count = 0
    let array = [0, 1]
    for (let i = 1; i <=num; i++) {
       let sumados = array[i]+array[i-1]
       if(sumados%2 != 0 && sumados  <= num){
            count+= sumados
       }
       array.push(sumados)
        
    }
 return count+1
}
  
// console.log(sumFibs(75025))




// corroborar si es primo o no 

/*
    An integer is prime if it is not divisible by any prime less than or equal to its square root
*/



/* cuando busquemos numeros primos y querramos ahorrar recursos una buena idea es 
   solo buscar hasta la raiz cuadrada de dicho numero ya que un numero se puede considerar primo si los divisores(sin incluir al 1 y al mismo numero) de dicho numero no son mayores que la raiz de dicho numero

*/

function isPrime(number) {
    const square =Math.floor(Math.sqrt(number))
    console.log(`raiz cuadrada: ${square}`)
   
    for(let i = 2; i <= square; i++){
        console.log(i)
        if(number % i == 0){
            return false
        }
    }
    return true
}

//console.log(isPrime(17))



/* pseudocodigo: para verificar la primalidad de un numero
   entonces cuando me digan algo como verificar si un numero es primo o no, solo debería buscar hasta su raíz cuadrada  ya que si en el rango de números de esa raíz cuadrada hay un numero (menor o igual a la raiz) que sea divisible por el numero dado entonces tambien habra otro mayor y eso quiere decir que tiene multiples divisores y no puede ser primo, por otro lado si  en el rango de numeros de la raiz no hay numeros (menores o iguales )a la raiz que sean divisibles por dicho numero tampoco habra uno mayor, es asi o me equivoco? 


*/


function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      const sqrt = Math.sqrt(num);
      for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
}
//console.log(sumPrimes(10))



// minimo comun multiplo 

/* pseudocodigo MCM : crear una funcion que recibe como parametro un arreglo
 este arreglo tendra 2 elementos, donde cada uno de ellos representara un numero o punto de partida
 y el otro un numero o punto de finalizacion, la idea sera encontrar el MCM de los numeros que esten 
 en el rango indicado por el punto de partida y finalizacion.
 para hallar el minimo comun multiplo de un rango de numeros haremos lo siguiente : primero empezaremos a
 evaluar cada numero con el menor numero posible a dividir que sera 2, no empezamos en 1 ya que cualquier
 numero dividido en 1 da el mismo numero por eso empezamos en 2, si hay algun numero divisible por 2 
 cambiamos el valor de dicho numero o numeros y seguimos preguntando si en ese rango despues de haber 
 cambiado los valores sigue habiendo numeros divisibles por 2 si es asi seguimos ejecutando la misma logica
 en caso no haya mas numeros seguimos con el numero 3 y el ciclo es el mismo si hay numeros divisibles por
 3 cambiamos esos numeros y volvemos a preguntar si sigue habiendo numeros divisibles por 3 si no es asi 
 seguimos con el siguiente que es 4 ahora en caso no hubiera numeros divisibles por 4 ya que si hubiesen 
 numeros divisibles por 4 tambien hubiesen sido divisibles por 2 y ya los hubiesemos evaluado, entonces 
 pasamos al siguiente 5 y asi de manera gradual hasta dejar todos los valores de ese rango en 1
*/

    // solucion 1
function smallestCommons(arrayRange){
    if(arrayRange[0] > arrayRange[arrayRange.length-1]){
        arrayRange.sort()
    }
    let ar = []
    let point = []
    for (let j = arrayRange[0]; j <=arrayRange[arrayRange.length-1]; j++) {
        ar.push(j)   
    }
    console.log(ar)
    
    let p = 2

    while(ar.some((nu) => nu > 1)){
       console.log(p)
       let nl = null
       for (let i = 0; i < ar.length; i++) {
        
            if(ar[i] % p === 0){
                nl = 1
                ar[i] = ar[i]/p 
                
            }
            if(nl != null && i >= ar.length-1){
                point.push(p)
            }
           // console.log('indice ' + i)
       } 

       if(ar.every((nu) => nu%p !==0)){
            p++
       }
       
    }
        
    
   console.log({ar,point})
   return point.reduce((acc, current) => acc*current)

}
   //console.log(smallestCommons([23, 18])) 


   // solucion 2
function smallestCommons1(arrayRange) {
    const gcd = (a, b) => {
      while (b !== 0) {
        [a, b] = [b, a % b];
      }
      return a;
    };
  
    const lcm = (a, b) => (a * b) / gcd(a, b);
  
    arrayRange.sort((a, b) => a - b);
    let result = arrayRange[0];
    for (let i = arrayRange[0] + 1; i <= arrayRange[1]; i++) {
      result = lcm(result, i);
    }
  
    return result;
}
  
  //console.log(smallestCommons1([1, 5]));


  // solucion 3

function smallestCommons2(arr) {
   
   // primero ordenamos el arreglo de menos a mas 
    const [min, max] = arr.sort((a, b) => a - b);
  // aqui lo que hacemos es calcular la cantidad de elementos dentro de un rango 
    const numberDivisors = max - min + 1;
    console.log('valor:'.bgBlue +' ' + numberDivisors)

  /* entonces se itera desde el valor minimo hasta el maximo y se
     multiplica el valor de la variable con cada numero de ese rango,
     para hallar un limite superior , el proposito es : establecer un
     punto máximo hasta el cual se buscarán los múltiplos comunes
     dentro del rango proporcionado. 
  */  

    let upperBound = 1;

    for (let i = min; i <= max; i++) {
      upperBound *= i;
    }
    console.log(upperBound)

    /* hacemos un for que va desde el numero maximo hasta el limite
       superior, y la varaible incial va creciendo de max en max, 
       luego hacemos un recorrrido del minimo al maximo y comparamos
       cada numero de ese rango con la variable multiple del bucle externo haber si es divisible por alguno de ellos, si es asi la varaible divisorCount ira creciendo y alfinal evaluaremos 
       si esa varaibel es igaul al numero de elementos del rango 
       dado, si es asi quiere decir que multiple es divisible por todos por todos los numeros de ese rango
    */
  
    for (let multiple = max; multiple <= upperBound; multiple += max) {
    
      let divisorCount = 0;
      

      for (let i = min; i <= max; i++) {
      
        if (multiple % i === 0) {
          divisorCount += 1;
        }
      }

      if (divisorCount === numberDivisors) {
        return multiple;
      }

    }
}
  
console.log(smallestCommons2([23, 18]))



// Déjalo caer 

/* 
   Dada la matriz arr, itere y elimine cada elemento comenzando desde el primer 
   elemento (el índice 0) hasta que la función func regrese true cuando el elemento
   iterado pasa a través de él. Luego devuelva el resto de la matriz una vez que 
   se cumpla la condición; de lo contrario, arr debe devolverse como una matriz vacía.

*/


/* pseudocodigo dejalo caer:
   primero empezamos recorriendo el arreglo, cada elemento iterado, lo pasaremos a la funcion, si nos da false, eliminaremos dicho numero del arreglo y segiremos iterando, en caso nos devuelva true, pararemos la
   iteracion y devolveremos el arreglo con los numeros restantes 

*/

function dropElements(arr, func) {
    let range = arr.length
    for(let i = 0; i < range; i++){
       const boolean =  func(arr[0])
       if(boolean == true){
            break
       }else{
        arr.shift()
       }
    }
    return arr
}
  
// console.log(dropElements( [1, 2, 3, 4], function(n) {return n > 5; }) )





// aplanando arrays     

// aplanando arrays de un solo nivel 
var arrayvar = [['element 1'], ['element 2',[[],[]],[]]];

var flattenArray = [].concat.apply([], arrayvar);


// console.log(flattenArray);




// de esta manera aplanamos un arreglo de cualquier dimension
function steamrollArray(arr) {
    return console.log(arr.flat(Infinity));
}
  
//console.log(steamrollArray( [[["a"]], [["b"]]] ))



// aplanando un array multidimensional

/* Para aplanar el array, usaremos la función reduce para ejecutar una función 
   reduce que concatene la entrada si no era un array; de lo contrario, la 
   reduciremos de nuevo de forma recursiva. 
*/


function myFlatFunction(array) {

  
    const result =  array.reduce((acc, current)=> {
        console.log(acc)
        return acc.concat( Array.isArray(current) ? myFlatFunction(current) : current )
    },[]  );

    return result

}

let flatArray = [['element 1'], [ 'element 2', [3,[4]] ],[5]];
// console.log( myFlatFunction(flatArray));


function flatArrayNew(array) {
    let store = []
    console.log(array)
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
        if(Array.isArray(array[i])){
            
            store =  store.concat(flatArrayNew(array[i]))
               
        }else{
            store.push(array[i])
        }
    }
return store
}

const arrMult = [1, [2], [3, [[4]]]]

// console.log(flatArrayNew( arrMult ))



function arrayRollFlat(array) {
    let store = []
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
        // esta condicion nos sirve para crear un nuevo contexto, y en ese nuevo contexto ejecutar la misma logica
        if(Array.isArray(array[i])){
            console.log(`this is array nested`.bgCyan)
            store = store.concat(arrayRollFlat(array[i]))
        }else {
          // en caso no fuera un arreglo insertamos ese elemento al store y lo retronamos al contexto superior  
            store.push(array[i])
        }
    }
return store

}
const ArraysTestNested = [1, 2, [3, [4,5] ], [6], [7] ]

console.log(arrayRollFlat(ArraysTestNested ) )


// convertir binario a texto

/* pasos para convertir binario a texto:
  para hacerlo primero nesesitamos saber como pasar de binario a decimal, esto por que
  segun el numero que obtengamos lo relacionaremos con alguna letra del alfabeto. tambien
  debemos saber que cada cadena de bytes esta formado por 8 digitos entre 1 y 0, por ejemplo
  01010010 y cada cadena de bytes representara una letra. empezamos relacionando cada byte
  con una potencia de 2 empezando de derecha a izquierda en el ejemplo anterior, 0 = 2^7, 
  1 = 2^6 ..., luego solo nos quedamos con las potencias cuyo valor este relacionado con 
  los 1 ya que los 0 no tienen valor, sumamos los valores de las potencias que esten relaci-
  onadas con 1 y ese valor lo relacionamos con la letra del alfabeta que coincida con esa
  posicion, pero debemos omitir los tres primeros caracteres de la izquierda, estos
  solo nos serviran para indicar si la letra esta en mayuscula o minuscula, ejemplo los 3 
  primeros de la izquierda que sean 010 = indica que la letra estara en mayuscula, 011 = indica
  que la letra estara en minuscula  
*/

/* pseudocodigo para convertir binario a texto: primero recibimos el texto,
   transformamos ese texto en un array, donde cada cadena sera un elemento
   de dicho array, recorremos caracter por caracter de cada cadena, excluyendo
   los 3 primeros caracteres de la izquierda, ya que estos solo serviran para 
   evaluar si un caracter va en mayuscula o minuscula, los caracteres sobrantes 
   los vinculamos con una potencia de 2 empezando desde el caracter de la dere-
   cha, una vez que nos quedamos con aquellas potencias que coincidan con los 1
   ya que 0 no tiene valor, y hacemos una sumatoria de ellos, una vez que ten-
   gamos la suma y ademas los 3 caracteres de la izquierda guardados en memoria, 
   los pasaremos como parametros de otra funcion que se encargara de evaluar 
   dichos parametros y devolver un caracter sea en mayuscula o minuscula  

*/


// solucion 1
function binaryAgent(str) {
   const overLetters =  str.split(' ')
  
  let phraseJoin = ''
   for(let i = 0; i < overLetters.length; i++){
        
        let numberRemains = overLetters[i].substring(3,overLetters[i].length)
        let threeFirst = overLetters[i].substring(0,3)
        console.log(threeFirst)
        let init = 0
        let sum = 0
        if(threeFirst != '010' && threeFirst != '011' ){
          //  console.log(overLetters[i] + 'dscds'.bgBlue)
            for(let k = overLetters[i].length-1; k >=0; k--){
                let potencia1 = 2**init
                if(overLetters[i][k] == 1){
                    sum+=potencia1
                }
                init++
            }
            phraseJoin+= findLetter(sum)
        }
        else{
            for(let j = numberRemains.length-1; j >= 0; j--){
                let potencia = 2**init
             
                if(numberRemains[j] == 1){
                    sum+=potencia
                }
                
                init++
            }
         console.log(sum + 'sum'.bgBlue)
           phraseJoin+= findLetter(sum, threeFirst)
        }
       
   }
   return phraseJoin
}

//console.log(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'))



function findLetter(sum, letters) {
    console.log(sum)
   // console.log(letters)
    let minus = '011'
    let mayus = '010'
    const abecedario = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g',
        8: 'h',
        9: 'i',
        10: 'j',
        11: 'k',
        12: 'l',
        13: 'm',
        14: 'n',
        15: 'o',
        16: 'p',
        17: 'q',
        18: 'r',
        19: 's',
        20: 't',
        21: 'u',
        22: 'v',
        23: 'w',
        24: 'x',
        25: 'y',
        26: 'z',
        32: ' ',
        33: '!',
        39: "'",
        63: '?'
    };

    let letterTarget =  abecedario[sum]
    if(letters == mayus){
        console.log(letterTarget.toUpperCase())
        return letterTarget.toUpperCase()
    }else if(letters == minus){
        console.log(letterTarget)
        return letterTarget
    }else{
        return abecedario[sum]
    }
}



// solucion 2

function binaryAgent1(str) {
    // Separate the binary code by space.
    str = str.split(" ");
    var power;
    var decValue = 0;
    var sentence = "";
  
    // Check each binary number from the array.
    for (var s = 0; s < str.length; s++) {
      // Check each bit from binary number
      for (var t = 0; t < str[s].length; t++) {
        // This only takes into consideration the active ones.
        if (str[s][t] == 1) {
          // This is quivalent to 2 ** position
          power = Math.pow(2, +str[s].length - t - 1);
          decValue += power;
  
          // Record the decimal value by adding the number to the previous one.
        }
      }
  
      // After the binary number is converted to decimal, convert it to string and store
      sentence += String.fromCharCode(decValue);
  
      // Reset decimal value for next binary number.
      decValue = 0;
    }
  
    return sentence;
}
  
  // test here
/* console.log(binaryAgent1(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
)) */



// todo sea verdad 

/* Compruebe si el predicado (segundo argumento) es verdadero en todos los elementos de
   una colección (primer argumento).En otras palabra, se le proporciona una colección de
   matrices de objetos. El predicado pre será una propiedad de objeto y deberá devolver
   true si su valor es truthy. En caso contrario, devuelva false. 

*/


function truthCheck(collection, pre) {
   // datos que equivalen a falsy: 0, null, NaN undefined, false, ""
    for(let i = 0; i < collection.length; i++){
         if(!collection[i][pre]){
            console.log('es falsy')
            return false
         }
         
    }

    return true
}
  
/*  console.log(truthCheck( [{name: "Pikachu", number: 25, caught: 3}, {name: "Togepi", number: 175, caught: 1}, {name: "MissingNo", number: NaN, caught: 0}], "number")) */



const objTest = { name: 'carlos', age: 21 }
let response =  objTest.hasOwnProperty('new')
//console.log(response);

// hasOwnProperty: verifica si un objeto tiene una propiedad especifica




// Argumentos opcionales

function addTogether(...rest) {
    console.log(rest)
    if(rest.some((element) => typeof element != 'number')){
        return undefined
    }

    else if(rest.length <=1){    
        function closure(z){
            if(typeof z != 'number'){
                return undefined
            }
            console.log(rest[0] + 'xxxx'.bgBlue)
            return rest[0] + z
        }
        return closure

    }else{
        let sum = 0
        for (let i = 0; i < rest.length; i++) {
            //console.log(rest[i]);
            sum+=rest[i]
        }
        return sum
    }
    
}
  
console.log(addTogether(3)(4))


// palindromo
function palindrome(str) {
    let ref = str.replace(/[^A-Za-z0-9]/g, '')
    let reverse = ref.split('').reverse().join('')
    console.log(ref);
    console.log(reverse);
    if(ref.toLowerCase() === reverse.toLowerCase()){
        return true
    }
    return false
}
  
console.log(palindrome("A man, a plan, a canal. Panama"));







// cifrado cesar
/* pseudocodigo para el cifrado cesar: deberemos recibir una cadena
   - deberemos tener un arreglo que represente a todas las letras del abecedario
   - tambien una variable que contenga los caracteres decodificados
   - iteraremos cada caracter de la cadena que recibamos como parametro de la funcion
   - obtendremos el indice de cada caracter de la cadena con respecto al arreglo del abecedario
   - si el indice obtenido es menor o igual a 13 le sumamos al indice obtenido la cantidad de 13, y buscamos en el arreglo de abecedario ese nuevo indice
   - si el indice es mayor a 13 al indice le restamos 13 y ese residuo sera el indice donde debere ubicarme en el arreglo que contenga las letras del abecedario
   - los caracteres especiales no se desplazaran, los mostramos tal cual.

*/



function rot13(str) {
    const abecedario = 'abcdefghijklmnopqrstuvwxyz'
    const split = abecedario.split('')
    console.log(split);
    let deco = ''
    for(let i = 0; i < str.length; i++){
      let indexLetter = split.indexOf(str[i].toLowerCase())
      if(indexLetter === -1){
        console.log(`no esta incluido ${str[i]}`);
        deco+=str[i]
      }else if(indexLetter <= 12){
        deco+= split[indexLetter + 13]
      }else{
        // la variable newIndex sera el residuo de indexLetter(numero mayor que la mitad del arreglo ) menos 13(posiciones a desplazar)
        // dicho de ora manera podrias verlo como que sera el residuo de lo que me falte por recorrer
        let newIndex =  indexLetter - 13
        deco+= split[newIndex]
      }
    }

    return deco.toUpperCase()
    
}
  

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))







// Validador de número de teléfono


function telephoneCheck(str) {
    const phonesNumbers = [
        "555-555-5555",
        "(555)555-5555",
        "(555) 555-5555",
        "555 555 5555",
        "5555555555",
        "1 555 555 5555"
    ]
    

  let newArray = phonesNumbers.map(ele => ele.replace(/1 /, ''))
  console.log(newArray);
    
  let newtext
    if(str.slice(0,2) == '1 '){
       str =  str.replace('1 ','')
       console.log(str);
       newtext = str.replace(/\d/g, '5');
       console.log(newArray);
       console.log(newtext);
    }
    else if(str[0] == '1'){
        str =  str.replace('1','')
        console.log(str);
        newtext = str.replace(/\d/g, '5');
        console.log(newArray);
        console.log(newtext);
    }
    else{
        newtext = str.replace(/\d/g, '5');
        console.log(str);
        console.log(newArray);
        console.log(newtext);
    }

    if(newArray.some(ele => ele == newtext)){
        return true
    }
    return false
 
}
  
console.log( telephoneCheck( "1 123)456-7890") )





// usando javascript, implemente una funcion que dado un numero entero, 
// retorne otro numero formado por sus mismos digitos ordenados descendenteme

function descentOrder(num) {
    const numstr = num.toString()
    const numArr = numstr.split("").sort((a,b) => b  - a)
    const fx = parseInt(numArr.join(""), 10)
   
    return fx
}


console.log(descentOrder(1023))


/* utilizando javascript, implementar un metodo que permita acceder de forma
   segura a propiedades de un objeto, incluso cuando dichas propiedades no existen.
   
   la funcion debe admitir tres parametros: el objeto al que se va a acceder.
   el valor por defecto que va a devolver la funcion en caso de que la
   propiedad no exista dentro del objeto; y por ultimo un string indicando
   el path de la propiedad a consultar.
  
   el path delimitara el camino en el cual se encuentra la propiedad a
   consultar.
   los distintos niveles de profundidad se delimitaran con puntos.
   ademas este ultimo parametro es opcional. en caso de no proveerse,
   la funcion devolvera otra funcion que esperara ser invocada con el path
   de la propiedad como argumento.

*/

function safeGet(obj, defaultValue, path){
    if(typeof path === undefined){
        return (p) => safeGet(obj, defaultValue,p)
    }

    const keys = path.split(".")
    let current = obj
    
    for(const key of keys){
        if(current && typeof current === 'object' && key in current){
            current = current[key]
        }else {
            return defaultValue
        }
    }
    return current

}

const obj = {
    a: {
        b : {
            c:25,
            d:null,
            e:false
        },
        f:0
    }
}

console.log(safeGet(obj, 'default', 'a.b.c'))



console.log('***********************'.green);

// Caja registradora

/* pseudocodigo para la caja registradora :
 - primero deberemos crear un objeto que tenga tantas propiedades como denominaciones tenga, cada una de esas propiedades
 hara referencia a la denominacion y el acceder a ellas sera mas facil  

 - hacer una resta entre el dinero entregado por el usuario(segundo parametro de la funcion) y el total del producto (primer
 parametro de la funcion ) para determinar el monto de cambio a dar

 - luego empezaremos a recorrer el arreglo que representa la caja con el dinero disponible, empezando desde la denominacion 
 mayor hasta la denominacion menor

 - luego por cada sub arreglo recorrido que representa cada una de las denominaciones haremos una condicional que evalue lo 
 siguiente : 
 si el monto a entregar de cambio es mayor o igual a la denominacion y si hay cantidades disponibles de esa denominacion para 
 entregar es decir que la denominacion tenga por lo menos 1 cantidad
 (para determinar si hay cantidades disponibles a entregar haremos una logica que sera : acceder al objeto que creamos en el
 primer paso y acceder a la propiedad cuya clave sea igual a la denominacion del monto que estemos recorriendo actualmente y 
 dividiremos el total de dinero disponible en caja de dicha denominacion entre el valor de la denominacion del objeto, por 
 ejemplo : si tengo una denominacion de penny con un total de 1.01, penny en el objeto tiene como valor 0.01, entonces haremos 
 una division del total 1.01 entre el valor de la denominacion 0.01 que sera igual a  1.01/0.01 esto dara como resultado 101
 monedas de 1 centavo o penny )restaremos cantidades es decir el cambio a dar menos el valor de la denominacion del objeto y
 tambien restaremos el disponible en caja de ese monto menos el valor de la denominacion y repetiremos este proceso de restar 
 cantidades hasta que alguna de estas no se cumpla ya sea que el monto a devolver sea menor a la denominacion o sea que ya no 
 hallan mas cantidades de dicha denominacion a dar, luego pasaremos a la siguiente denominacion mas alta

- si alguna de estas condiciones no se cumple seguiremos con la segunda denominacion mayor hasta que el monto a devolver sea 0

- al final lo que devolvera la funcion sera un objeto con la propiedad status "open" y otra propiedad change : que especifique el 
cambio en monedas y billetes de mayor  a menor

- en el caso de que no tengamos suficiente dinero en caja para entregar al cliente o no tengamos el dinero exacto para entregar 
devolveremos otro objeto con la propiedad status INSUFFICIENT_FUNDS

- en caso que tengamos la cantidad exacta para entregar, y las demas denominaciones esten en cero, se retornara un objeto con 
la propiedad con el status en closed y una propiedad change que sera el mismo arreglo que se entrego en primera instancia


*/




function checkCashRegister(price, cash, cid) {
    const copy = JSON.parse(JSON.stringify(cid))
    const amount = {
        "PENNY" : 0.01,
        "NICKEL" : 0.05,
        "DIME" : 0.1,
        "QUARTER" : 0.25,
        "ONE" : 1,
        "FIVE" : 5,
        "TEN" : 10,
        "TWENTY" : 20,
        "ONE HUNDRED" : 100
    }

    let change = cash - price
    let storage = []
    
  
    for(let i = cid.length - 1; i >= 0; i--){
    
        let valueCurrent = cid[i][0]
        let amountCurrent = cid[i][1]
      //  console.log(amountCurrent + 'valuecurrent'.bgGreen);
        let availableQuantity = Math.round(amountCurrent/amount[valueCurrent])
        let money = 0

        while(change.toFixed(2) >= amount[valueCurrent] && availableQuantity >=1){
           
              change =  change.toFixed(2) - amount[valueCurrent]
             
              availableQuantity =  availableQuantity - 1
              money+=amount[valueCurrent]
           
     
              cid[i][1] = cid[i][1].toFixed(2) -  amount[valueCurrent]
              
           
            if(storage.some((ele) => ele[0] === valueCurrent)){
                storage = storage.map(ele => ele[0] === valueCurrent ? [ele[0], ele[1] = money] : ele)
            }
            
            else{
                storage.push([valueCurrent, money])
            }
           
        }

    }
    console.log(cid);
    console.log(change);
   

    if(change > 0){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    else if(cid.every(ele  => ele[1] <= 0)){
  
        return {status : 'CLOSED', change : copy}
    }
    return {status: "OPEN", change: storage}
}
  


console.log(checkCashRegister(  50, 65, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE",0 ], ["FIVE", 5], ["TEN", 10], ["TWENTY", 0], ["ONE HUNDRED", 0]]  ))






// de entero a romano


function convertToRoman(num) {
    
    const values =[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5,  4, 1]
    const romans =['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V',  'IV', 'I']

    let res = ''
    values.forEach((value, i) => {
        while(num >= value){
            res = res + romans[i]
            num = num - value
        }
    })

    return res


}
   
console.log(convertToRoman(36))



// de entero a romano 2

function checkValue(valor) {
    let numero = 0;

       switch (valor) {
        case 'I':
        numero  += 1;        
        break;
        case 'V':
        numero += 5;        
        break;
        case 'X':
        numero += 10;        
        break;
        case 'L':
        numero += 50;        
        break;
        case 'C':
        numero += 100;        
        break;
        case 'D':
        numero += 500;        
        break;
        case 'M':
        numero += 1000;        
        break    
        default:
          console.log('Hubo un error');
          break;
      }

      return numero;

}



var romanToInt = function(romano) {
    let resultado = 0;
    const letters = romano.split("");
    letters.forEach((x, index) => {
       if (index + 1 != letters.length){
           if(checkValue(x) >= checkValue(letters[index+1])){
              resultado += checkValue(x);
           }else{
              resultado -= checkValue(x);
           }
       }else {
          resultado += checkValue(x);
       }
   });
   return resultado;
};

//console.log(romanToInt('MMMMDCCCXXXVVIV'));


// aplanar arreglos
function arrayFlat(array) {
    let concatenados = []
    for(let i = 0; i < array.length; i++){
       
        if(Array.isArray(array[i])){
            console.log(array[i], 'is array'.bgBlue);
            concatenados =  [...concatenados, ...arrayFlat(array[i])]
        }else{
            concatenados = [...concatenados, array[i]] //concatenados.concat(array[i])
            // [1,2,3]
        }
    }
    return concatenados
}

const arrayExample = [1,2,3,[4,5, [6,7, [8]], 9], 10]
console.log(arrayFlat(arrayExample))

console.log('recursividaddddddddddddddd'.bgBlue);


// el siguiente algoritmo recursivo para calcular x^n

/* 
- El caso base es cuando  n = 0  y  x^0 = 1 
- Si n es positivo y par, calcula y = x^n/2 de manera recursiva y después x^n = y * y ,Observa que puedes salirte con la tuya al hacer una sola llamada recursiva en este caso, al calcular x^n/2 una sola vez y después multiplicar el resultado de esta llamada recursiva por sí misma.
- Si n es positivo e impar, calcula x^n-1 de manera recursiva de modo que el exponente sea 0 o positivo y par. Después, x^n = x^n-1 * x .
- Si n es negativo, calcula x^-n de manera recursiva de modo que el exponente se vuelva positivo. Después, x^n = 1 / x^-n

*/

/* aqui podriamos decir que voy a multiplicar un numero por si
   mismo n veces
    

*/

ddd
var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    console.log('entrando a recursiva ');
    // base case
    if(n ===0) {
    return 1;
    }
    if(n < 0){
        console.log('negativo');
        return 1/(x)
    }
     // recursive case: n is odd
    if(isOdd(n)){
        return x *  power(x, n-1);
       
    }
    // recursive case: n is negative 
    if (n < 0) {
        return 1 / power(x, -n);
    }
    
  

    // recursive case: n is even
    if(isEven(n)){
        var y = power(x, n / 2);
        return y * y;
       /*  var y =(Math.floor((n)/2)); 
        return x * power(x, y); */
       
    }
};

/* console.log(power(3,0))
console.log(power(3,1)) */
console.log(power(3,-1))


// console.log(Math.floor(1/2));

// calcula la potencia de un numero de forma recursiva

// caso 2
function pow(number, powNumber){
    
    if(powNumber === 0){
        return 1
    }
    console.log('entrando');
    return number * pow(number, powNumber -1)

    
}
// console.log(pow(3,2))

/* console.log(2**1 * 2**1 * 2**1 * 2**1 * 2**1 * 2**1); */


