import colors from "colors";

(() => {
  console.log("************ patron de Frecuency Counter*************".cyan);

  /* se pasaran 2 arreglos, se debe corroborar si los elementos del primer arreglo estan incluidos en el segundo arreglo pero elevados al cuadrado, el orden en como esten los elementos no importa
    ejemplo : [1,2,3] => [4,1,9] => true
    ejemplo : [1,2,3] => [1,9] => false
    ejemplo : [1,2,3] => [4,4,1] => false
    
    */

  // solucion 1
  function values(ar1, ar2) {
    const set = new Set(ar2);
    console.log(set);
    const ex = ar1;
    for (let i = 0; i < ex.length; i++) {
      if (!set.has(ex[i] ** 2)) {
        return false;
      }
    }
    return true;
  }
  //console.log(values([1,2,3], [4,1,9]));

  // solucion 2
  function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
      // evaluando que la clave del objeto 1 elevado al 2 este en el objeto 2
      if (!(key ** 2 in frequencyCounter2)) {
        return false;
      }
      // comprobando que el recuento de cada propiedad sea igual en ambos objetos
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        return false;
      }
    }
    return true;
  }
  //console.log(same([1,2,3], [4,1,9]));

  // anagrama
  function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
    const lookup = {};
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }
    console.log(lookup);
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // cuando el contador del caracter sea 0 se marcara como falsy eso quire decir que si encontramos
      // otro caracter cuyo recuento ya es 0, se marcara como falsy ya que ya no hay mas caracteres identicos en el objeto
      // asi nos aseguramos que en ambos arreglos hayan la misma cantidad de caracteres identicos
      if (!lookup[letter]) {
        return false;
      } else {
        // aqui disminuimos el recuente en 1 por cada iteracion
        // esto con el fin de que que cuando se encuentre otro caracter
        // identico en la iteracion este contador sea 0 lo que marca un valor falsy
        lookup[letter] -= 1;
        //console.log(lookup);
      }
    }
    console.log(lookup);
    return true;
  }
  //console.log(validAnagram('tigreie', 'gretiii'));
})();

(() => {
  console.log("************ patron de Punteros múltiples *************".cyan);
  function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === 0) {
        return [arr[left], arr[right]];
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  //console.log(sumZero([-3,-2,-1,0,1,2,3,4,5,6]));

  // solucion 1
  function countUniqueValues(array) {
    //console.log(array);
    if (array.length < 1) {
      return 0;
    }
    let count = 1;
    let value = array[0];
    for (let i = 0; i < array.length; i++) {
      if (value !== array[i]) {
        value = array[i];
        count++;
      }
    }
    return count;
  }
  //console.log(countUniqueValues([-2,-1,-1,0,1]));

  // solucion 2
  function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
      console.log(i, j);
    }
    return i + 1;
  }

  //console.log(countUniqueValues([-2,-1,-1,0,1]));
})();

(() => {
  console.log("************ patron de ventana deslizante *************".cyan);
  /* este patrón implica la creación de una ventana que puede ser una matriz o 
      un número de una posición a otra dependiendo de una determinada condición, 
      la ventana aumenta o se cierra (y se crea una nueva ventana) muy útil para
      realizar un seguimiento de un subconjunto de datos en una matriz/cadena, etc.
 
   */

  // example escribe una funcion que devuelve la suma maxima de n numeros consecutivos en un arreglo
  // example :  maxSubarraySum([1,2,5,2,8,1,5], 2) => 10

  function maxSubarraySum1(arr, num) {
    if (num > arr.length) {
      return null;
    }

    let max = -Infinity;
    console.log(arr.length - num + 1);
    // aqui estamos iterando solamente hasta una posicion que no sobrepase el limite de elementos del arreglo
    for (let i = 0; i < arr.length - num + 1; i++) {
      let temp = 0; // el acumulador

      for (let j = 0; j < num; j++) {
        //console.log(i);
        temp += arr[i + j];
      }

      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  //console.log(maxSubarraySum1([1,2,5,2,8,1,5], 3));

  function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    // recorremos el primer grupo de valores
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    // mantenemos un registro de la suma previa
    tempSum = maxSum;
    // recorremos el resto de elementos
    for (let i = num; i < arr.length; i++) {
      // aqui lo que hacemos es asignarle a la variable temporal un nuevo valor en cada recorrido de los elementos restantes
      // ese valor sera la suma temporal menos el primer elemento de la suma previa + el siguiente elemento de la secuencia
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
  }
  //console.log(maxSubarraySum([1,2,5,2,8,1,5], 3));
})();

(() => {
  console.log("************ ejercicios *************".red);
  // Suma máxima de subarreglo de tamaño fijo:

  /* Dada una matriz de números enteros y un número entero k, encuentra la suma
      máxima de cualquier subarreglo de tamaño k. 
      Ejemplo: Entrada: nums = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
      Salida: 39 (subarreglo [4, 2, 10, 23]) 
   
   */

  function sumMaxArray(array, k) {
    if (array.length - 1 < k) return null;
    let sumMax = 0;
    let tempo = 0;
    // recorremos la primera porcion, para luego iterar el resto de elementos
    for (let i = 0; i < k; i++) {
      sumMax += array[i];
    }

    tempo = sumMax;
    // recorremos el resto de elementos
    for (let j = k; j < array.length; j++) {
      // en tanto voy recorriendo cada elemento al acumulado le quito el primer elemento de la secuencia anterior y le agrego el elemento de la siguiente secuencia
      tempo = tempo - array[j - k] + array[j];
      sumMax = Math.max(sumMax, tempo);
    }
    return sumMax;
  }
  const nums = [1, 4, 2, 10, 23, 3, 1, 0, 20];
  const k = 4;
  //console.log(sumMaxArray(nums, k));

  // Subcadena de longitud máxima con caracteres distintos:

  /* Dada una cadena, encuentra la longitud de la subcadena más larga que contiene
      todos los caracteres distintos.
      Ejemplo: Entrada: s = "abcabcbb"
      Salida: 3 (subcadena "abc")
   */

  function subStringLong(string) {
    let left = 0;
    const map = new Map();
    let max = 0;

    for (let i = 0; i < string.length; i++) {
      // preguntamos si en el map ya existe el caractere recorrido y si su posicion que ocupa en el mapa esta en el rango de la venta actual
      if (map.has(string[i]) && map.get(string[i]) >= left) {
        // left indica el inicio de mi ventana
        left = map.get(string[i]) + 1;
      }
      // seteamos un nuevo valor para el mapa
      map.set(string[i], i);
      max = Math.max(max, i - left + 1);
    }
    return { max };
  }
  //console.log(subStringLong('abcddabcefbb'))

  // Mínimo Subarreglo Contiguo con Suma Mayor o Igual a S

  /* Dado un arreglo de números enteros no negativos y un entero S, encuentra la
      longitud del subarreglo mínimo cuya suma sea mayor o igual a S. Si no
      existe, retorna 0

      Ejemplo:
      Entrada: nums = [2, 3, 1, 2, 4, 3], S = 7
      Salida esperada: 2
      Explicación: El subarreglo mínimo con suma mayor o igual a 7 es [4, 3], que 
      tiene longitud 2. 
   */

  function minMaxArray(array, s) {
    let left = 0;
    let sum = 0;
    let min = Infinity;

    for (let right = 0; right < array.length; right++) {
      sum += array[right];
      while (sum >= s) {
        min = Math.min(min, right - left + 1);
        sum -= array[left];
        left++;
      }
    }

    return min === Infinity ? 0 : min;
  }

  //console.log(minMaxArray([2, 3, 1, 2, 4, 3], 7));

  /* Máxima suma de subarreglo circular 
      Descripción:
      Dado un array circular de enteros, encuentra la suma máxima de un
      subarreglo continuo. El array es circular, lo que significa que el
      final del array se conecta al principio del array.
      
      maxCircularSum([1, -2, 3, -2])  // Devuelve 3 (subarreglo [3])

      maxCircularSum([5, -3, 5])      // Devuelve 10 (subarreglo [5, 5])

   
   */

  function sumCir(array) {
    let max = array[0];
    let left = 0;
    let sum = array[0];

    for (let i = 1; i < array.length; i++) {
      sum += array[i];
      while (sum <= max && left < i) {
        // hacer algo
        sum = sum - array[left];
        left++;
      }
      if (left == array.length - 1) {
        sum += array[0];
      }
      max = Math.max(max, sum);
    }

    return { max };
  }

  //console.log(sumCir([1, -2, 3, -2]));

  /* Subcadena anagramática 
      Descripción:
      Dado un string s y un string p, encuentra todas las posiciones
      iniciales de las subcadenas de s que son anagramas de p.

      findAnagrams("cbaebabacd", "abc") // Devuelve [0, 6] ("cba" y "bac") 
      findAnagrams("abab", "ab")        // Devuelve [0, 1, 2] ("ab", "ba",
      "ab")


   */

  // dado un arreglo encontrar los inidces de los elementos cuya suma me den un valor objetivo

  function targetNumber(array, target) {
    // primero creo una estructura que guardara el registro de cada elemento

    const map = new Map();

    // luego recorremos cada elementos del array
    for (let i = 0; i < array.length; i++) {
      //console.log(target - array[i]);
      if (!map.has(target - array[i])) {
        map.set(array[i], i);
      } else {
        return [map.get(target - array[i]), i];
      }
    }
  }

  //console.log( targetNumber( [5,5,5, 6] , 10 ) );
})();
