import colors from 'colors'

function twoSum(nums, target) {
// creando un array de arrays
   const numsWithIndex = nums.map((num, index) => [num, index]);
   
   numsWithIndex.sort((a, b) => a[0] - b[0]);
   console.log(numsWithIndex);
   let left = 0, right = nums.length - 1;

   while (left < right) {
       const sum = numsWithIndex[left][0] + numsWithIndex[right][0];
       if (sum === target) {
           return [numsWithIndex[left][1], numsWithIndex[right][1]];
       } else if (sum < target) {
           left++;
       } else {
           right--;
       }
   }

   return []; // No solution found!

}

console.log(twoSum([1,4,3,7], 5))




// Enfoque de dos punteros 

function searchTwoNumbers(array, n) {
// primero crearemos un array de arrays donde cada array sera representado por el numero en cuestion al lado de su indice
const newArray = array.map((element, index) => [element, index])
// luego ordeno
newArray.sort((acc, current) => acc[0] - current[0])
console.log(newArray);
// luego puedo ejecutar una logica similar a la de la busqueda binaria
// tener 2 punteros que referencien el inicio y otro que respresente el final 
// sumar ambos que numeros que tengan como posicion los valores de los punteros
// si esa suma es mas grande que el target debere disminiuir el valor maximo
// si esa suma es mas pequeña que el target debere aumentar el valor minimo
// por que esto ? por que como los numeros ya estan ordenados de mas a menos
// seria ilogico aumentar el minimo ya que el siguiente seria un numero mas grande y
// la suma con el numero final me daria un numero mas grande que el anterior
   let min = 0;
   let max = array.length - 1
   while(min < max){
      let suma = newArray[min][0] + newArray[max][0]
      if(suma === n){
         return [newArray[min][1], newArray[max][1]]
      }else if(suma < n){
         min++
      }else{
         max--
      }
   }
   return []
}

console.log(searchTwoNumbers([1,4,3,7], 5))





// Enfoque HashMap

// buscando complementos

function twoSumHash(nums, target) {
   const numToIndex = new Map();
   for (let i = 0; i < nums.length; i++) {
       const complement = target - nums[i];
       // corroboramos si dicha resta esta establecida como una clave del mapa
       if (numToIndex.has(complement)) {
       // si es asi devolveremos el valor de la clave correspondiente y el inidce del elemento que se este recorriendo actualmente  
           return [numToIndex.get(complement), i];
       }

       // caso contrario setearemos un nuevo elemento en el mapa con el numero del recorrido actual como clave y su indice como valor
       numToIndex.set(nums[i], i);
       console.log(numToIndex, 'complementos'.bgBlue);
   }
   return []; // No solution found!
}

console.log(twoSumHash([5,2,6,3], 8));


console.log('resultado'.bgCyan);
// buscando complementos 2
function someThing(array, number){
      const comp = {}
      for(let i = 0; i < array.length; i++){
         console.log(comp, 'objeto en cada iteracion'.bgMagenta);
         const subtract = number - array[i]
         if(comp.hasOwnProperty(subtract)){
            return [comp[subtract], i]
         }
         comp[array[i]] = i
      }
      return []
}

console.log(someThing([1,3,7,1,4], 5));




// recalcar que los map aceptan valores unicos si insertamos una clave identica a otra ya existente esta ultima sobreescribira la anterior

// Para inicializar los mapas con datos, se introduce como parámetro un array de arrays donde cada subarray representara un elemento en el mapa
const fx = new Map([[1,4], [2,6], [1,8888]])
/* console.log(fx.size);
console.log(fx.set(3, 1000));
console.log(fx.has(2));
console.log(fx.get(2));
console.log(fx.delete(3));
console.log(fx);
console.log(fx.clear());
console.log(fx); */
// size comprueba el numero de elementos que tiene el mapa
// set este metodo setea un elemento , es decir si el elemento existe lo sobreescribe, si no existe lo crea
// has comprueba si la clave existe no el valor
// get devuelve el valor de la clave correspondiente
// delete elimina un elemento con la clave del mapa
// clear vacia el mapa entero


// palindromo
// solucion 1 
var isPalindrome = function(x) {
    let reverse =  x.toString().split('').reverse().join('')
     return reverse == x ? true : false
    
};

console.log(isPalindrome(10));

// solucion 2 
console.log('ppp'.bgBlue);

var isPalindrome1 = function(x) {
   const splitNumber = x.toString().replace(/,/ig,'').split('')

   console.log(splitNumber);
   if(splitNumber.length === 1) return true
      let min = 0;
      let max = splitNumber.length-1
   if(splitNumber.length ===0) return true 

   if(splitNumber[min] == splitNumber[max]){
         min++
         max
         console.log(min, max);
         let result = isPalindrome1(splitNumber.slice(min,max));
        
        return result
   }else{
         return false
      
   }
   
};

console.log(isPalindrome1(551));



// prefijo comun mas largo
// solucion 1
var longestCommonPrefix = function(strs) {
   if(strs[0]== "") return ""
   if(strs.length === 1) return strs[0]
   
    strs.sort((acc, current) => acc.length - current.length)
    let concatenados = ''
    for(let i = 0; i < strs.length-1; i++){
      concatenados = ''
       for(let j = 0; j < strs[i].length; j++){
      
         if(strs[i][j] === strs[i+1][j]){
            console.log(`son iguales ${strs[i][j]}`);
            concatenados+= strs[i][j]
            
         }else{
            break
         }

       }
       strs[i+1] = concatenados

    }
    return concatenados
};


console.log(longestCommonPrefix(["cir","car"]));



// solucion 2
function prefixed(strs) {
   if(strs == null || strs.length == 0)return "";

   const firstLetter = strs[0]
   let min = 0;
   let max = firstLetter.length-1
   let result = ''

   while(min <= max){
     
      let half = Math.floor((min + max)/2)
      let slice = firstLetter.slice(0,half+1)
 
      function test(array, slice, half) {
         for(let i = 1; i < array.length; i++){
            if(slice != array[i].slice(0, half+1)){
               return false
            }
         }
         return true
      }

      if(test(strs, slice, half)){
         result = slice
         min = half + 1
      }
      else{
         max = half - 1
      }
   }
   return result
}

const prefixedArray = ["flower","flow","flight"]

console.log(prefixed(prefixedArray));




// solucion 3
function longestCommonPrefix2(array) {
   if (array == null || array.length === 0) return "";
// selecionando el primer elemento
   const firstLetter = array[0];

// recorriendo cada caracter del primer elemento
   for (let i = 0; i < firstLetter.length; i++) {
       const char = firstLetter[i];
// comaprando cada caracter del primer elemento con los demas
       for (let j = 1; j < array.length; j++) {
           if (array[j][i] !== char) {
               return firstLetter.slice(0, i);
           }
       }
   }

   return firstLetter; // En este punto, todas las cadenas son iguales, devuelve cualquiera de ellas
}

const prefixedArray2 = ["flower","flow","flight"];
console.log(longestCommonPrefix2(prefixedArray));
