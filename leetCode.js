import colors from "colors";

(() => {
  console.log("************** suma dos numeros **************".cyan);

  // suma dos numeros

  // Enfoque de dos punteros

  function searchTwoNumbers(array, n) {
    // primero crearemos un array de arrays donde cada array sera representado por el numero en cuestion al lado de su indice
    const newArray = array.map((element, index) => [element, index]);
    // luego ordeno
    newArray.sort((acc, current) => acc[0] - current[0]);
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
    let max = array.length - 1;
    while (min < max) {
      let suma = newArray[min][0] + newArray[max][0];
      if (suma === n) {
        return [newArray[min][1], newArray[max][1]];
      } else if (suma < n) {
        min++;
      } else {
        max--;
      }
    }
    return [];
  }
  //console.log(searchTwoNumbers([1,4,3,7], 5))

  // Enfoque HashMap,  buscando complementos

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
      console.log(numToIndex, "complementos".bgBlue);
    }
    return []; // No solution found!
  }
  //console.log(twoSumHash([5,2,6,3], 8));

  // buscando complementos 2
  function someThing(array, number) {
    const comp = {};
    for (let i = 0; i < array.length; i++) {
      console.log(comp, "objeto en cada iteracion".bgMagenta);
      const subtract = number - array[i];
      if (comp.hasOwnProperty(subtract)) {
        return [comp[subtract], i];
      }
      comp[array[i]] = i;
    }
    return [];
  }
  //console.log(someThing([1,3,7,1,4], 5));

  // recalcar que los map aceptan valores unicos si insertamos una clave identica a otra ya existente esta ultima sobreescribira la anterior

  // Para inicializar los mapas con datos, se introduce como parámetro un array de arrays donde cada subarray representara un elemento en el mapa
  const fx = new Map([
    [1, 4],
    [2, 6],
    [1, 8888],
  ]);
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
})();

(() => {
  console.log("******** palindromo ***********".cyan);

  // palindromo

  // solucion 1
  var isPalindrome = function (x) {
    let reverse = x.toString().split("").reverse().join("");
    return reverse == x ? true : false;
  };
  //console.log(isPalindrome(10));

  // solucion 2
  var isPalindrome1 = function (x) {
    const splitNumber = x.toString().replace(/,/gi, "").split("");

    console.log(splitNumber);
    if (splitNumber.length === 1) return true;
    let min = 0;
    let max = splitNumber.length - 1;
    if (splitNumber.length === 0) return true;

    if (splitNumber[min] == splitNumber[max]) {
      min++;
      max;
      console.log(min, max);
      let result = isPalindrome1(splitNumber.slice(min, max));

      return result;
    } else {
      return false;
    }
  };
  //console.log(isPalindrome1(551));
})();

(() => {
  console.log("************** prefijo comun mas largo ***************".cyan);
  // prefijo comun mas largo

  // solucion 1
  var longestCommonPrefix = function (strs) {
    if (strs[0] == "") return "";
    if (strs.length === 1) return strs[0];

    strs.sort((acc, current) => acc.length - current.length);
    let concatenados = "";
    for (let i = 0; i < strs.length - 1; i++) {
      concatenados = "";
      for (let j = 0; j < strs[i].length; j++) {
        if (strs[i][j] === strs[i + 1][j]) {
          console.log(`son iguales ${strs[i][j]}`);
          concatenados += strs[i][j];
        } else {
          break;
        }
      }
      strs[i + 1] = concatenados;
    }
    return concatenados;
  };
  //console.log(longestCommonPrefix(["cir","car"]));

  // solucion 2
  function prefixed(strs) {
    if (strs == null || strs.length == 0) return "";

    const firstLetter = strs[0];
    let min = 0;
    let max = firstLetter.length - 1;
    let result = "";

    while (min <= max) {
      let half = Math.floor((min + max) / 2);
      let slice = firstLetter.slice(0, half + 1);

      function test(array, slice, half) {
        for (let i = 1; i < array.length; i++) {
          if (slice != array[i].slice(0, half + 1)) {
            return false;
          }
        }
        return true;
      }

      if (test(strs, slice, half)) {
        result = slice;
        min = half + 1;
      } else {
        max = half - 1;
      }
    }
    return result;
  }
  //console.log(prefixed(["flower","flow","flight"]));

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
  //console.log(longestCommonPrefix2( ["flower","flow","flight"]));

  // merge sort
  function mergeSort(array, min, max) {
    // caso base para detener la recursividad, si esto sucede quiere decir que la matriz ya solo conteine un elemento
    if (min < max) {
      // si  se cumple el caso base llamaremos recursivamente
      let half = Math.floor((min + max) / 2);
      mergeSort(array, min, half);
      mergeSort(array, half + 1, max);
      merge(array, min, half, max);
    }

    return array;
  }
  const arrayUnordered = [10, 5, -1, 0, 90, 55, 7, 63];
  //console.log(mergeSort(arrayUnordered, 0, arrayUnordered.length-1));
  // funcion para  comparar y mezclar elementos de un arreglo
  function merge(array, min, half, max) {
    // creando un array temporal que guardara los elementos que se inserten
    const temp = [];
    // creando variables que indexen la primer posicion del arreglo izquierdo y derecho
    let left = min;
    let right = half + 1;

    // hacemos conparaciones de los elementos de ambos arreglo, mientras
    // la primer el indice minimo de los arreglo de la izquierad y derecha sean menores o iguales a half y max posiciones maximas permitidos de cada arreglo

    while (left <= half && right <= max) {
      // comparamos elementos de ambos arreglos
      if (array[left] <= array[right]) {
        temp.push(array[left]);
        left++;
      } else {
        temp.push(array[right]);
        right++;
      }
    }

    // llegara un punto en que todos los elementos de un arreglo se copien antes que el otro
    // entonces copiaremos todos los elementos restantes de ese arreglo al arreglo temporal
    // esto mientras el indice minimo que hace referencia a cada arreglo sea menor o igual a su maximo permitido

    while (left <= half) {
      // si esto se cumple quiere decir que aun hay elementos en el arreglo que referencia la varaible left
      temp.push(array[left]);
      left++;
    }

    while (right <= max) {
      // si esto se cumple quiere decir que aun hay elementos en el arreglo que referencia la varaible right
      temp.push(array[right]);
      right++;
    }

    // luego copiamos todos los elementos del arreglo temporal al arreglo original
    console.log(temp);
    console.log(min, max);
    // iteramos desde la posicion minimo de la porcion actaul del array hasta la porcion maxima del array actual
    for (let i = min; i <= max; i++) {
      // esta porcion quiere decir que min y max son posiciones que marcan trozos del array original, i-min ajusta la posicion del arreglo temporal para que las posiciones que se copien sean correctas, por ejemplo si min es 4 y max es 7 estariamos diciendo: quiero que en el array original en la posicion 4 se copie del arreglo temporal la posicion 4-4= 0, luego array[5] = array[5-4] =1 y asi ya que el arreglo temporal solo tendra un trozo de un arreglo y array tendra todo el arreglo completo
      array[i] = temp[i - min];
    }
  }
})();

(() => {
  console.log("************ subarray suma maxima ***************".cyan);
  /* 
   Ejercicio: Encontrar el Subarray con la Suma Máxima
   Escribe una función llamada subarraySumaMaxima que tome un array de números enteros
   como argumento y devuelva el subarray (contiguo) que tiene la suma máxima de todos los
   subarrays posibles. 
   */

  /* function subarraySumaMaxima(arr) {
   let maxHastaAhora = arr[0];
   let maxGlobal = arr[0];
   let inicioMaxSubarreglo = 0;
   let finMaxSubarreglo = 0;
   let inicioSubarregloTemp = 0;

   for (let i = 1; i < arr.length; i++) {
       if (arr[i] > maxHastaAhora + arr[i]) {
           maxHastaAhora = arr[i];
           inicioSubarregloTemp = i;
       } else {
           maxHastaAhora = maxHastaAhora + arr[i];
       }

       if (maxHastaAhora > maxGlobal) {
           maxGlobal = maxHastaAhora;
           inicioMaxSubarreglo = inicioSubarregloTemp;
           finMaxSubarreglo = i;
       }
   }

   return arr.slice(inicioMaxSubarreglo, finMaxSubarreglo + 1);
}


const numeros = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(subarraySumaMaxima(numeros))
// Output esperado: [4, -1, 2, 1] */

  // solucion 1
  function subarreglos(array) {
    // creando variables que indexen los inicios y finales de cada subarreglo
    // de manera predeterminada empezaremos en el primer elemento conforme
    // lo vallamos recorriendo ireos evaluando y cambiando
    let maxtemp = array[0];
    let maxglobal = array[0];
    let iniciosubarreglo = 0;
    let finsubarreglo = 0;
    let inicioarreglotemp = 0;

    for (let i = 1; i < array.length; i++) {
      // primero evaluo si el elemento actual es mayor que la suma dle acumulado mas el mismo elemento si es asi quiere decir que el elemento actual hace que la suma decresca y eso marcara el final y a su vez el inicio de un subarreglo
      if (array[i] > maxtemp + array[i]) {
        maxtemp = array[i];
        // marcamos el inicio de un nuevo subarreglo
        inicioarreglotemp = i;
      } else {
        maxtemp = maxtemp + array[i];
      }

      // luego comprobaremos si el acumulado temporal es mayor que el global
      if (maxtemp > maxglobal) {
        maxglobal = maxtemp;
        iniciosubarreglo = inicioarreglotemp;
        finsubarreglo = i;
      }
    }

    return array.slice(iniciosubarreglo, finsubarreglo + 1);
  }
  const numeros = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  //console.log( subarreglos(numeros) );

  function test(string, stringAux) {
    let array = string.split("");
    let long = stringAux.length;
    let ar = [];

    for (let i = 0; i < array.length; i++) {
      console.log(`me ejecuto`);
      if (array.slice(i, i + long).join("") == stringAux) {
        // si el total de caracteres faltantes es menor al string auxiliar parar de recorrer
        ar.push(i);
      }
    }
    return ar;
  }
  //console.log(test("abracadabra", "abra"));
})();

(() => {
  console.log("************* fusionar 2 listas ordenadas ***************".cyan);

  /* Se le proporcionan los encabezados de dos listas vinculadas ordenadas list1y list2.
      Combine las dos listas en una lista ordenada . La lista debe hacerse empalmando los 
      nodos de las dos primeras listas. 
      Entrada: lista1 = [1,2,4], lista2 = [1,3,4]
      Salida: [1,1,2,3,4,4]
   */

  function mergeTwoLists(list1, list2) {
    let nuevo = [];
    let left = 0;
    let right = 0;

    // comparamos y mezclamos

    while (left < list1.length && right < list2.length) {
      if (list1[left] <= list2[right]) {
        nuevo.push(list1[left]);
        left++;
      } else {
        nuevo.push(list2[right]);
        right++;
      }
    }
    // los elementos de un arreglo se habran copiando antes que el otro hacemos
    // copiamos los elementos restantes a el arreglo nuevo
    while (left < list1.length) {
      nuevo.push(list1[left]);
      left++;
    }
    while (right < list2.length) {
      nuevo.push(list2[right]);
      right++;
    }

    return nuevo;
  }

  let array1 = [1, 2, 4];
  let array2 = [1, 3, 4];

  //console.log(mergeTwoLists(array1, array2));

  console.log("******** eliminar duplicados **********".cyan);

  // solucion 1
  function removeDuplicates(nums) {
    const unicos = {};
    const duplicados = {};
    let point = 0;

    for (let i = 0; i < nums.length; i++) {
      // primero voy a evaluar si la propiedad el objeto unicos existe si existe lo inserto en el objeto duplicados con una clave distinta
      // y el valor del numero repetido
      if (!unicos.hasOwnProperty(nums[i])) {
        // point++
        unicos[nums[i]] = point++;
      } else {
        duplicados[i] = nums[i];
      }
    }
    console.log(unicos, duplicados);
    let obj = Object.entries(unicos);
    console.log(obj);
    for (let i = 0; i < obj.length; i++) {
      nums[obj[i][1]] = parseInt(obj[i][0]);
    }
    for (let j = point; j < nums.length; j++) {
      nums[j] = "_";
    }
    console.log(nums);
    return point;
  }

  // [1,1,2] || [0,0,1,1,1,2,2,3,3,4]
  //const k =   removeDuplicates( [1,1,2])

  //solucion 2
  function removeDuplicates1(nums) {
    if (nums.length === 0) return 0;

    let k = 1; // k es el índice de colocación para elementos únicos
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        nums[k] = nums[i];
        k++;
      }
    }

    // Llenar el resto de la matriz con '_'
    for (let i = k; i < nums.length; i++) {
      nums[i] = "_";
    }

    console.log(nums);
    return k;
  }

  let duplicados = [1, 1, 2];
  //const y = removeDuplicates1(duplicados)

  console.log("******** eliminar elemento de una matriz **********".cyan);
  // Entrada: nums = [3,2,2,3], val = 3
  // Salida: 2, nums = [2,2,_,_]

  // Entrada: nums = [0,1,2,2,3,0,4,2], val = 2
  // Salida: 5, nums = [0,1,4,0,3,_,_,_]
  var removeElement = function (nums, val) {
    let k = undefined;
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val && k == undefined) {
        k = i;
        nums[i] = "_";
      } else if (nums[i] != val && k != undefined) {
        let tempo = nums[i];
        nums[i] = nums[k];
        nums[k] = tempo;
        k++;
      } else if (nums[i] == val && k != undefined) {
        nums[i] = "_";
      }
    }

    console.log(nums);
    console.log(k);
    return k;
  };

  //const k = removeElement([0,1,2,2,3,0,4,2], 2)
  //console.log(k);

  console.log("****** encontrar el indice de una cadena en otra *******".cyan);
  // Dadas dos cadenas needley haystack, devuelve el índice de la primera aparición de needle en haystack, o -1 si needle no forma parte de haystack.

  /* Entrada: haystack = "sadbutsad", needle = "sad"
         Salida: 0
         Explicación: "sad" ocurre en el índice 0 y 6. 
         La primera aparición es en el índice 0, por lo que devolvemos 0. 
         haystack = "leetcode", needle = "leeto"
      */

  var strStr = function (haystack, needle) {
    let longAux = needle.length;

    for (let i = 0; i < haystack.length; i++) {
      console.log("ejecutando".yellow);
      if (haystack.slice(i, i + longAux) == needle) {
        return i;
      }
      if (haystack.length - i < longAux) {
        return -1;
      }
    }
    return -1;
  };

  // const index = strStr('leetcode', 'leeto')
  // console.log(index);

  console.log("****** buscar posicion de insercion *******".cyan);

  /* Dada una matriz ordenada de números enteros distintos y un valor
         objetivo, devuelve el índice si se encuentra el objetivo. De lo
         contrario, devuelva el índice donde estaría si se insertara en orden.

         Entrada: números = [1,3,5,6], objetivo = 5
         Salida: 2

         Entrada: números = [1,3,5,6], objetivo = 2
         Salida: 1

         Entrada: números = [1,3,5,6], objetivo = 7
         Salida: 4
      */

  var searchInsert = function (nums, target) {
    let min = 0;
    let max = nums.length - 1;
    let half;
    while (min <= max) {
      half = Math.floor((min + max) / 2);
      if (nums[half] === target) {
        return half;
      } else if (nums[half] <= target) {
        min = half + 1;
      } else {
        max = half - 1;
      }
    }
    //return -1
    // console.log(half);

    if (nums[half] < target) {
      return ++half;
    } else if (nums[half] > target) {
      return half;
    }
  };

  const k = searchInsert([1, 2, 3, 5], 4);
  //console.log(k);
})();

(() => {
  console.log("*********** longitud de la ultima palabra ************".cyan);
  /* Dada una cadena s que consta de palabras y espacios, devuelve la longitud de la última 
      palabra de la cadena. Una palabra es un maximal. subcadena que consta únicamente de
      caracteres que no  son espacios. 
      example : Entrada: s = "Hola mundo"
      Salida: 5
      Explicación: La última palabra es "Mundo" con longitud 5. los espacios no se deberian contar
   */

  var lengthOfLastWord = function (s) {
    const divide = s.trim().split(" ");
    const lastString = divide[divide.length - 1];
    return lastString.length;
  };

  // console.log(lengthOfLastWord("luffy is still joyboy"))

  console.log("************* mas uno **************".cyan);

  /* Se le proporciona un número entero grande representado como una matriz de números enteros 
      digits, donde cada uno digits[i]es el dígito del número entero. Los dígitos están ordenados
      del más significativo al menos significativo de izquierda a derecha. El número entero grande
      no contiene ningún inicial .ith0 Incrementa el número entero grande en uno y devuelve la 
      matriz de dígitos resultante.
      example : Entrada: dígitos = [1,2,3]
      Salida: [1,2,4]
      Explicación: La matriz representa el número entero 123.
      Incrementar en uno da 123 + 1 = 124.
      Por tanto, el resultado debería ser [1,2,4].
   */

  var plusOne = function (digits) {
    const convert = digits.join("");
    const value = BigInt(convert) + BigInt(1);
    const newResult = value.toString().split("");
    console.log(newResult);
    return newResult;
  };
  //console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

  console.log("************* agregar binario **************".cyan);

  /* 
         Dadas dos cadenas binarias a y b, devuelve su suma como una cadena binaria .
         Entrada: a = "11", b = "1"
         Salida: "100" 
      
      */

  var addBinary = function (a, b) {
    const decimalToBinary = {
      0: "0000",
      1: "0001",
      2: "0010",
      3: "0011",
      4: "0100",
      5: "0101",
      6: "0110",
      7: "0111",
      8: "1000",
      9: "1001",
    };

    if (a.length > b.length) b = equalLong(a, b);
    else if (b.length > a.length) a = equalLong(b, a);
    function equalLong(mayor, menor) {
      //console.log(mayor, menor);
      let diference = mayor.length - menor.length;
      //console.log(diference);
      for (let k = 0; k < diference; k++) {
        menor = `0` + menor;
      }
      //console.log(menor);
      return menor;
    }

    let l = "";
    let k = 0;
    for (let i = a.length - 1, j = b.length - 1; i >= 0; i--, j--) {
      let sum = parseFloat(a[i]) + parseFloat(b[j]) + parseFloat(k);
      let binary = decimalToBinary[sum];
      //console.log(binary);
      const significativo = binary.slice(binary.indexOf(1));
      //console.log(`${significativo}`.red);
      l = significativo[significativo.length - 1] + l;
      k = significativo.slice(0, significativo.length - 1) || 0;
      //console.log(l, k);
    }
    l = k + l;
    console.log(l);
    return l[0] == "0" ? l.slice(1) : l;
  };
  //console.log(addBinary('11', '1'))
})();

(() => {
  // Paréntesis válidos
  /* Dada una cadena s que contiene solo los caracteres '(', ')', '{', '}' 
      y , determine si la cadena '[' de ']' entrada es válida.

      Una cadena de entrada es válida si: 
      -Los corchetes abiertos deben cerrarse con el mismo tipo de corchetes.
      -Los corchetes abiertos deben cerrarse en el orden correcto.
      -Cada corchete cerrado tiene un corchete abierto correspondiente del
      mismo tipo.
      example : Entrada: s = "()"
                Salida: verdadero
                Entrada: s = "( )[]{ }"
                Salida: verdadero
                Entrada: s = "(]"
                Salida: falso
               
   */
  var isValid = function (s) {
    const stack = [];
    const map = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
    for (let char of s) {
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else if (char === ")" || char === "]" || char === "}") {
        if (stack.pop() !== map[char]) {
          return false;
        }
      }
    }

    return stack.length === 0;
  };

  //console.log(isValid("()")); // true
  //console.log(isValid("()[]{}")); // true
})();

(() => {
  console.log("******** fusionar 2 listas enlazadas **********".cyan);
  // Fusionar dos listas ordenadas
  /* Se le proporcionan los encabezados de dos listas vinculadas ordenadas
      list1y list2.
      Combine las dos listas en una lista ordenada . La lista debe hacerse
      empalmando los nodos de las dos primeras listas.
      Devuelve el encabezado de la lista enlazada fusionada . 
      example : Entrada: lista1 = [1,2,4], lista2 = [1,3,4]
      Salida: [1,1,2,3,4,4]
   
   */

  class Node1 {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }

  class LinkedList1 {
    constructor() {
      this.head = null;
    }

    insertNode(value) {
      const newNode = new Node1(value, null);
      if (this.head === null) {
        this.head = newNode;
        return;
      }

      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    display() {
      let current = this.head;

      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }

  class Node2 {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }

  class LinkedList2 {
    constructor() {
      this.head = null;
    }

    insertNode(value) {
      const newNode = new Node2(value, null);
      if (this.head === null) {
        this.head = newNode;
        return;
      }

      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    display() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }

  const list1 = new LinkedList1();
  list1.insertNode(1);
  list1.insertNode(2);
  list1.insertNode(4);

  const list2 = new LinkedList2();
  list2.insertNode(1);
  list2.insertNode(3);
  list2.insertNode(4);

  var mergeTwoLists = function (list1, list2) {
    class Node {
      constructor(value, next) {
        this.value = value;
        this.next = next;
      }
    }

    class NuevoLinked {
      constructor() {
        this.head = null;
      }

      insertNode(value) {
        const newNode = new Node(value, null);
        if (this.head === null) {
          this.head = newNode;
          return;
        }

        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }

      toArray() {
        let current = this.head;
        const result = [];
        while (current) {
          result.push(current.value);
          current = current.next;
        }
        return result;
      }
    }

    const nuevoLinked = new NuevoLinked();
    // list1 y list2 son encabezados de las 2 listas enlazadas
    console.log(list1);
    console.log(list2);
    let current1 = list1;
    let current2 = list2;
    while (current1 && current2) {
      if (current1.value <= current2.value) {
        // aqui lo que deberiamos hacer es insertar el valor de list 1 a la instancia de LinkedList
        nuevoLinked.insertNode(current1.value);
        // y tambien cambiar el valor del head de list 1 y hacer que ahora apunte al siguiente nodo
        current1 = current1.next;
      } else {
        nuevoLinked.insertNode(current2.value);
        current2 = current2.next;
      }
    }

    // si aqui hay un encabezado valido seguir iterando

    while (current1) {
      // aqui lo que deberiamos hacer es insertar el valor de list 1 a la instancia de LinkedList
      nuevoLinked.insertNode(current1.value);
      // y tambien cambiar el valor del head de list 1 y hacer que ahora apunte al siguiente nodo
      current1 = current1.next;
    }

    while (current2) {
      // aqui lo que deberiamos hacer es insertar el valor de list 1 a la instancia de LinkedList
      nuevoLinked.insertNode(current2.value);
      // y tambien cambiar el valor del head de list 1 y hacer que ahora apunte al siguiente nodo
      current2 = current2.next;
    }

    console.log(nuevoLinked.head);
    return nuevoLinked.head;
  };

  //const head = mergeTwoLists(list1.head, list2.head)

  console.log("******** Contiene duplicados **********".cyan);
  var containsDuplicate = function (nums) {
    const ob = new Set();
    for (let i = 0; i < nums.length; i++) {
      if (ob.has(nums[i])) {
        return true;
      } else {
        ob.add(nums[i]);
      }
    }
    return false;
  };
  //console.log(containsDuplicate([0,4,5,0,3,6]));

  console.log("******** Contiene Duplicado II **********".cyan);
  /* Dada una matriz de enteros numsy un número entero k, devuelve true
        si hay dos índices distintos i y jen la matriz tal que nums[i] ==
        nums[j]yabs(i - j) <= k . 
        example : Entrada: números = [1,2,3,1], k = 3
        Salida: verdadero 


      */
  var containsNearbyDuplicate = function (nums, k) {
    const mapa = new Map();
    for (let i = 0; i < nums.length; i++) {
      // primero verificamos si el mapa ya contiene un indice repetido, si es asi hacemos una logica
      if (mapa.has(nums[i])) {
        // la logica sera hacer la diferencia entre el valor del mapa asociado a esa clave, menos el indice del valor actual del arreglo
        const getIndex = mapa.get(nums[i]);
        let diference = getIndex - i;
        diference < 0 ? (diference = diference * -1) : diference;
        if (diference <= k) {
          return true;
        }
      }

      // caso contrario lo añadimos al mapa
      mapa.set(nums[i], i);
      console.log(mapa);
    }
    return false;
  };
  //console.log(containsNearbyDuplicate([1,2,3,1,2,3] , 2));

  console.log("******** Número único **********".cyan);
  /* Dada una  matriz de números enteros no vacíanums , cada elemento aparece dos veces
         excepto uno. Encuentra ese único. Debe implementar una solución con una complejidad
         de tiempo de ejecución lineal y utilizar solo espacio adicional constante. 
         example : Entrada: números = [4,1,2,1,2]
         Salida: 4
      
      */

  var singleNumber = function (nums) {
    const ob = {};

    for (let i = 0; i < nums.length; i++) {
      if (ob[nums[i]]) {
        ob[nums[i]] = ob[nums[i]] + 1;
      } else {
        ob[nums[i]] = 1;
      }
    }
    let result = undefined;
    for (let key in ob) {
      if (result === undefined || ob[key] < result[1]) {
        result = [key, ob[key]];
      }
    }
    return parseFloat(result[0]);
  };

  //console.log(singleNumber([2,2,5,1,6,6,5,6]));
  //console.log(singleNumber([2,2,1,5,6,6,5,6]));
  //console.log(singleNumber([4,1,2,1,2]));
  //console.log(singleNumber([1]));
})();

(() => {
  // listas enlazadas
  var mergeTwoLists = function (list1, list2) {
    const nuevoLinked = new ListNode();

    let current = nuevoLinked;

    while (list1 && list2) {
      if (list1.val <= list2.val) {
        // aqui lo que deberiamos hacer es insertar el valor de list 1 a la instancia de LinkedList
        current.next = list1;
        // y tambien cambiar el valor del head de list 1 y hacer que ahora apunte al siguiente nodo
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }

    if (list1 !== null) {
      current.next = list1;
    }
    if (list2 !== null) {
      current.next = list2;
    }

    return nuevoLinked.next;
  };

  // arrays

  var merge = function (nums1, m, nums2, n) {
    /*       let arr = []
      let k = 0
      let j = 0
   

      while(k < m && j < n) {
         if(nums1[k] <= nums2[j]) {
            arr.push(nums1[k])
            k++
         }
         else {
            arr.push(nums2[j])
            j++
         }
      }

      console.log(nums1, nums2, arr);
      console.log(k, j);
      while(k < m){
         arr.push(nums1[k])
         k++
      }
      while(j < n){
         arr.push(nums2[j])
         j++
      }
      console.log(nums1, nums2, arr);
      console.log(k, j);
      for(let i = 0; i < nums1.length; i++){
         nums1[i] = arr[i]
      }
      console.log(nums1);
      return nums1 */

    let i = m - 1; // recorre en reversa los elementos de nums1, ignorando los invalidos
    let j = n - 1; // recorre en reversa los elementos de nums2

    let k = nums1.length - 1; //recorre en reversa los elementos de nums1, pero sin ignorar los invalidos

    while (j >= 0) {
      if (i >= 0 && nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
        k--;
      } else {
        nums1[k] = nums2[j];
        j--;
        k--;
      }
    }

    console.log(nums1);
    return nums1;
  };
  //merge([2,2,4,0,0,0], 3, [2,3,5], 3)
  // merge([4,5,6,0,0,0], 3, [1,2,3], 3)
  //merge([1,2,3,0,0,0], 3, [3,5,6], 3)
  //merge([4,0,0,0,0,0], 1, [1,2,3,5,6], 5)
})();

(() => {
  /* nos dan un array de numeros todos aparecen 2 veces ecepto 1 
     devolver ese elemento que aparece solo 1 vez, la complejidad
     tiene que ser lineal y tiempo constante
      ejemplo
      nums = [2,2,1]
      output = 1

      nums = [4,1,2,1,2]
      output = 4

     */
  function uniqueNumbers(array) {
    const newMap = new Map();
    // puntero que suma un numero si no existe y si existe se le disminuye el mismo numero repetido dejandonos asi con el unico numero que no se repite
    let point = 0;
    for (let i = 0; i < array.length; i++) {
      // si el numero iterado existe lo eliminamos y no insertamos el numero actual

      if (newMap.has(array[i])) {
        newMap.delete(array[i]);
        point -= array[i];
      }
      // si no existe lo insertamos
      else {
        newMap.set(array[i], i);
        point += array[i];
      }
    }

    return { newMap, point };
  }
  let nums = [7, 8, 7, 5, 1, 1, 10, 5, 10, 8, 55];

  console.log(uniqueNumbers(nums).point);

  // solucion usando el operador XOR
  function uniqueNumbersTwo(array) {
    let unique = 0;
    for (let element of array) {
      unique ^= element;
      console.log(unique);
    }

    return unique;
  }

  let nums1 = [7, 8, 7, 5, 1, 1, 10, 5, 10, 55, 8];
  console.log(uniqueNumbersTwo(nums1));
  /* 
    operador ^ XOR
este operador realiza una operacion a nivel de bits(operacion de bajo nivel)
sus reglas son que si al comparar 2 numeros
- estos son iguales el resultado es 0
- estos son distintos el resultado es 1
- si se opera el 0 con otro numero el resultado es el mismo numero
este operador es asociativo y commutativ
  */
})();
