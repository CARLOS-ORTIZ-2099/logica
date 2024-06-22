const colors = require('colors');



// excersice one
(() => {
    
    // aplana de manera recursiva un arreglo
    console.log('***************** flat array *******************'.cyan);

    function flatArray(array) {
        let tempo = []
        for(let i = 0; i < array.length; i++) {
            // si se cumple que el elemento iterado es un arreglo entonces llamar recursivamente a la funcion
            if(Array.isArray(array[i])){
            tempo = [...tempo,...flatArray(array[i])]
            }
            else {
                tempo = [...tempo, array[i]]
            }
            // caso contrario el elemento en cuestion sera copiado a otro arreglo
        }
        return tempo

    }
    const ar = [1,2,[3,4,[5,6,[7,{name : 'carlos', age : 20}], 8]], 9, [10], 11]
    //console.log(flatArray(ar));




    console.log('***************** binary search *******************'.cyan);
    // buscar con busqueda binaria
    function binarySearch (array, min, max, target) {
        
        while(min <= max) {
            let half = Math.floor((min + max)/2)
            if(array[half] === target){
                return half
            }
            else if(array[half] > target) {
                max = half - 1
            }
            else {
                min = half + 1
            }
        }
        return -1
    }
    const arraySeach = [1,2,3,4,5,6,7,8,9]
    //console.log(binarySearch(arraySeach, 0, arraySeach.length-1, 9));




    console.log('***************** merge sort *******************'.cyan);
    // ordenar un arreglo con merge sort
    function mergeSort(array, min, max) {
        // caso base si el min es menor que max dividir el arreglo, caso contrario retornar
        // el arreglo
        if(min < max) {
            // llamar recursivamente
            let half = Math.floor((min + max)/2)
        // console.log(half);
            mergeSort(array, min, half)
            mergeSort(array, half+1, max)
            merge(array, min, half, max)
            
        }
        return array

    }

    function merge(array, min, half, max) {
        let left = min
        let right = half + 1
        let tempo = []
        // [500, -1, 100, 10, -54, 0, 99, 1, 14]
    // console.log(left,right, max);
        // comparar y combinar mientras las variables no excedan su maximo permitido
        while(left <= half && right <= max) {
            // comparar y combinar
            if(array[left] >= array[right]) {
                tempo.push(array[right])
                right++
            }else {
                tempo.push(array[left])
                left++
            }

        }
    
        // llegara un punto en donde alguno de los 2 subarreglo se copie antes que 
        // el otro deberiamos copiar los elementos restantes de ese arreglo al arreglo 
        // temporal
    // console.log(left,right, max, half);
        while(left <= half) {
            // comparar y combinar
            tempo.push(array[left])
            left++
        }

        while(right <= max) {
            // comparar y combinar
            tempo.push(array[right])
            right++

        }
    
        // luego copiamos los elementos del arreglo temporal 
        // al array original
    for(let i = min; i <= max; i++) {
            array[i] = tempo[i - min]
    }


    }
    const arrayUnorderedOne = [500, -1, 100, 10, -54, 0, 99, 1, 14]
    //console.log(mergeSort(arrayUnorderedOne, 0, arrayUnorderedOne.length - 1));




    console.log('***************** quick sort *******************'.cyan);
    // ordenar un arreglo con quick sort

    function quickSort(array, min, max) {
        // esta funcion se encargara de dividir el arreglo en partes pequeñas 
        // a tal punto de que nos quedemos con un subarreglo de un elemento
        // caso base : si elminimo es menor que el maximo significa que aun podemos 
        // dividir el arreglo, caso contrario devolvemos el arreglo
        if(min < max) {
            let q = partition(array, min, max)
            quickSort(array, min, q-1)
            quickSort(array, q+1, max)

        }
        return array
    }

    function partition(array, min, max) {
        let q = min
        let j = min

        for(let i = min; i < max; i++, j++) {
            if(array[j] <= array[max]) {
                let tempo = array[j]
                array[j] = array[q]
                array[q] = tempo
                q++
            }
        }

        let tempo = array[max]
        array[max] = array[q]
        array[q] = tempo
        console.log(array);
        return q
    }

    const arrayUnordered = [100, 10, -15, 0, 5, 88, 99, -999, 999]
   // console.log(quickSort(arrayUnordered, 0, arrayUnordered.length-1));


})();


// excersice two
(() => {
    console.log(`***************** array chunking *****************`.cyan);
    // array chunking : particionar un arreglo en tantas porciones como lo indique el segundo parametro
    // example : ([1,2,3,4,5,6,7,8], 3) => [ [1,2,3], [4,5,6], [7,8] ]

    function arrayChunks(array, target) {
        // solucion 1
        if(target <=0) return false
        let aux = []
        for(let i = 0; i < array.length; i+=target) {
           // console.log(i);
            aux = [...aux, array.slice(i, i+target)]
        }
        return aux

        // solucion 2
        /* 
            const result = []
            let index = 0
            while(index < array.length){
                console.log(index, index+target);
                result.push(array.slice(index, index+target))
                index+=target
                
            }
            return result
        
        */
    }
    let ar = [1,2,3,4, 5, 6, 7,8]
    let target = 3
   // console.log(arrayChunks(ar, target));



   console.log(`***************** title case *****************`.cyan);
   // title case : convertir las primeras letras en mayusculas
   // example : 'hello wordl' => 'Hello World' 
   function titleUpper(string) {
    // solucion 1
        let chartSplit = string.split(' ')
        let text = ``
        for(let char of chartSplit) {
            char = char.replace(char[0], char[0].toUpperCase())
            text+=` ${char}`
        }
        return text.trim()

     // solucion 2
    /* let words = string.split(' ')
    return words.map(word => word[0].toUpperCase()+word.slice(1)).join(' ') */
   }
   let string = `hello world to all`
   //console.log(titleUpper(string));
 
 

   console.log(`***************** anagrama *****************`.cyan);
   // anagramas : un anagrama es aquella cadena de tiene la misma cantidad de caracteres que otra cadena y que al darle
   // un orden en especifico estas 2 formaran lo mismo
   // example : 'pokemon => nompoke
   function anagrama(targetOne, targetTwo) {
    // primer paso normalizar las cadenas
        let tOne = targetOne.replace(/\s/g, '').replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase()
        let tTwo = targetTwo.replace(/\s/g, '').replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase()
        console.log(tOne, tTwo);
        // segundo paso verificar que tengan la misma longitud caso contrario 
        // retornar false
        if(tOne.length !== tTwo.length) return 'no son anagramas!'.cyan

        // solucion 1
        /*  console.log(tOne.split('').sort().join(''));
        console.log(tTwo.split('').sort().join(''));
        return tOne.split('').sort().join('') === tTwo.split('').sort().join('') 
        ? 'anagrama': 'no anagrama'
        */
        
        // solucion 2 
        let obj1 ={}
        for(let i = 0; i < tOne.length; i++){
            obj1[tOne[i]] ?  obj1[tOne[i]]++ : obj1[tOne[i]] = 1
        }
        console.log(obj1);

        let obj2 ={}
        for(let i = 0; i < tTwo.length; i++){
            obj2[tTwo[i]] ?  obj2[tTwo[i]]++ : obj2[tTwo[i]] = 1
        }
        console.log(obj2);
        
        for(key in obj1) {
            console.log(key, (obj2[key]));
            if(obj1[key]!= obj2[key]){
                return 'no es anagrama'.bgRed
            }
            
        }
        return 'es anagrama'.bgBlue

   }
   //console.log(anagrama('pokemon', 'nompoke'));


   console.log(`***************** contar vocales *****************`.cyan);
   // contar vocales : cuantas vocales estan presentes en una cadena 
   // example : 'my message' => 3
   function countVowels(string) {
        let vowels = ['a','e', 'i', 'o', 'u']

        let count = 0
        for(char of string) {
            console.log(char);
            vowels.includes(char) ? count+=1 : ''
        }
        
        return `hay ${count} vowels`.cyan

   }
   //console.log(countVowels('how are you'));



   console.log(`***************** fizz buzz *****************`.cyan);
   // fizz buzz : fizz para aquellos multiplos de 3, buzz para aquellos que sean multiplos de 5
   // fizz buzz para aquellos que sean multiplos de 3 y 5
   function fizzBuzz(n){
        for(let i = 1; i <=n; i++) {
            if(i % 3 == 0 && i%5 == 0 ){
                console.log(`fizz buzz ${i}`.cyan);
            }
            else if(i % 3 == 0){
                console.log(`fizz ${i}`.red);
            }
            else if(i % 5 == 0){
                console.log(`buzz ${i}`.magenta);
            }
            
            else{
                console.log(`no enter ${i}`.yellow);
            }
        }
   }
   //console.log(fizzBuzz(15));



   console.log(`***************** steps *****************`.cyan);
   // steps : imprimir en consola # n cantidad de niveles, por cada nivel este # aumentara en 1
   function steps(step, target) {
        if(target <= step) {
           // console.log(`#`.repeat(target)+' ');
           let text =``
           for(let i = 0; i < target; i++){
            text+=`#`
           }
           console.log(`${text} `);
           steps(step, target+1)
        }
   }
   // steps(3, 1)
  

    // pyramid : inprimir en consola una piramide de n cantidad de niveles, formada por
    // #, donde este simbolo incrementara su cantidad por cada nivle que se avanze
    // --- Directions
    // Write a function that accepts a positive number N.
    // The function should console log a pyramid shape
    // with N levels using the # character.  Make sure the
    // pyramid has spaces on both the left *and* right hand sides
    // --- Examples
    //   pyramid(1)
    //       '#'
    //   pyramid(2)
    //       ' # '
    //       '###'
    //   pyramid(3)
    //       '  #  '
    //       ' ### '
    //       '#####'
    //      '#######'

    // solucion 1
    console.log(`***************** piramid *****************`.cyan);
    function pyramid(n, level, body, space) {
        if(level <= n) {  
            let text =``
            for(let i = 0; i < body; i++){
                text+=`#`
               
            }
            text = text.padStart(space+text.length, ' ').padEnd(space+text.length+space, ' ')
            console.log(`${text}`);
            pyramid(n, level+1, body+2, space-1)
        }
        
    }
    let n = 3   
   // pyramid(n,1,1,n-1)
   /*  let fx ='hola mundo'
    let res = fx.padStart(1+fx.length, '*').padEnd(1+fx.length+1, ']')
    console.log(res); 
    */
    

    // solucion 2
    function pyramid1(n) {
        const mid = Math.floor((2*n-1)/2)
        console.log(mid);
        // recorriendo las filas
        for(let row = 0; row < n; row++){
            let line = ''
            // recorriendo las columnas | este sera el patron de como van creciendo las 
            // columnas en tanto vamos avanzando por los niveles 2*n-1
            for(let col = 0; col <= 2*n-1; col++) {
                // esta condicion corrobora que los extremos siempre esten representado
                // por espacios
                // basicamente no encargamos de llenar con asteriscos siempre y cuando
                // la columna  sea mas grande o igual que la resta entre la mitad y el numero de filas
                // y mientras la columna no se mas grande que la suma de la mitad de las columnas + el numero de fila 
                if(col >= mid -  row && col <= mid + row) {
                    line+='#'
                }
                else{
                    line+=' '
                }
            }
            console.log(line);
        }

    }

   // pyramid1(3)

})();


// excersice three
(() => {

    console.log('************* check if the property exist***************'.cyan);
    
    function isExists() {
        let objt = {a:'1',f:'2', h:'3'}

        // de esta manera tambien podemos comprobar si una propiedad exista en un objeto
        if('f' in objt){
            console.log( 'esta incluido'.blue);
        }else{
            console.log( 'no esta incluido'.red);
        }
    }
    // isExists()



    console.log('************* securely access an object ***************'.cyan);
    console.log('solution one'.cyan);
    /*  utilizando javascript, implementar un metodo que permita acceder de forma 
        segura a propiedades de un objeto, incluso cuando dichas  propiedades no existen.
        
        - la funcion debe admitir tres parametros : el objeto al que se va a acceder
        - el valor por defecto que va a devolver la funcion en caso de que la 
        propiedad no exista dentro del objeto.
        - y por ultimo, un string indicando el path de la propiedad a consultar 

        - el path delimitara el camino en el cual se encuentra la propiedad a 
        consultar
        - los distintos niveles de profundidad se delimitaran con puntos
        - ademas este ultimo parametro es opcional. en caso de no proveerse, la
        funcion devolvera otra funcion que esperara ser invocoda con el path de
        la propiedad como argumento

    */

    // solucion 1
    function safeEnter(obj, messsageDefault, path) {
            if(path === undefined) {
                // si no existe la ruta retornaremos otra funcion que esperar a ajecutarse y 
                // ejecutara la misma funcion safeenter 
                return function backupFunction(pathAux) {
                    // esta funcion solo tomara como nuevo parametro el pathaux, ya que una funcion hija
                    //  "recuerda" los valores, parametros, etc de su contexto padre 
                    safeEnter(obj, messsageDefault, pathAux)
                }
            }
            // si el path existe
            let keys = path.split('.')
            console.log(keys);
            // tomamos como referencia el obj 
            let currentObj = obj
            // recorreremos cada una de las calves 
            for(let key of keys) {
                console.log(key);
                // por cada clave que recorramos corroboraremos que esten presentes en el objeto obj
                if(key in currentObj) {
                    console.log(currentObj[key]);
                    currentObj = currentObj[key]
                }else {
                    return messsageDefault
                }
            }
            return currentObj
    }

    const obj = {
        name : 'carlos',
        age : 21,
        address : {city : 'city center', loc : {alt : 100, lat : 200, zip: { loc : 10000 }}},
        friends : [ 
            {name : 'mateo', addres : {city : 'city pineaple', loc : {alt : 600, lat : 700, zip: { loc : 800 }}}} ,
            {name : 'maria', addres : {city : 'city apple', loc : {alt : 900, lat : 1000, zip: { loc : 1001 }}}} ,
        
        ]
    } 
    const result = safeEnter(obj, 'this is backup message', 'address.loc')
   // console.log(result);
    // si no se pasa una ruta entonces la funcion devolvera otra funcion esperando una ruta valida
   // result('address.city')


   // solucion 2
   console.log('solution two'.cyan);
    function safeGet(obj, defaultValue, path){
        // si la ruta no existe llamamos a otra funcion que esperar a ssr ejecutada y esta
        // asu vez ejecutara la misma funcion pero con un nuevo tercer parametro
        // los 2 parametros anteriores siguen siendo los mismos ya que esta funcion
        // hija 'recuerda' los valores, parametros de su contexto 
        if( path === undefined){
            return function value(pathAuxiliar){
              //  console.log(pathAuxiliar);
                safeGet(obj, defaultValue, pathAuxiliar)
            }
        }

        const keys = path.split(".")
       // console.log(keys);
        let current = obj
       // console.log(current);
    // iterando el array con todas las propiedades
        for(const key of keys){
        // comprobando que el objeto current exista y que el tipo de dato sea
        // un objeto y que la llave en cada iteracion este presente en el objeto current  
            if(current && typeof current === 'object' && key in current){
                current = current[key]
              //  console.log(current);
            }else {
                return defaultValue
            }
        }
        
        return current

    }

    const obj1 = {
        a: {
            b : {
                c:25,
                d:null,
                e:false
            },
            f:['property nested']
        }
    }

    let res = safeGet(obj1, 'default', 'a.f')
    console.log(res);
    




})();



// excersice four

(() => {
    console.log('**************** eliminar duplicados ******************'.cyan);
    // eliminar duplicados
    let array = [1, 2, 2, 1];
    let uniqueArray = array.filter((value, index, self) => {
        //console.log(self, value , self.indexOf(value), index);
        return self.indexOf(value) === index;
    });

    //console.log(uniqueArray); // Mostrará [1, 2, 3, 4, 5]

    const set = new Set([
        1,
        2,
        3,
        3,
        4,
        5,
        true,
        false,
        false,
        {},
        {},
        "hola",
        "HOla",
    ]);
    //console.log(set);

    console.log('**************** truthy y falsy ******************'.cyan);

    // devuelve el primer valor truthy o el ultimo valor falsy
    let result = null || []
    //console.log(result);

    // devuelve el primer valor falsy o el ultimo valor truthy
    let result1 = 10 && []  && {} &&  evaluate(5)
    //console.log(result1)


    function evaluate(number) {
        return number*number
    }


})();


// excersice five

(() => {
    console.log(`*************** encontrar las sumas ******************`.cyan);
    /*  Dado un arreglo de números enteros, escribe un programa que encuentre todos los pares de elementos
        cuya suma sea igual a un número específico dado.
        Por ejemplo, dado el arreglo[2, 4, 3, 5, 7, 8, 9] y el número objetivo 10, el programa debería
        imprimir los pares(3, 7) y(2, 8). 

    */

    // solucion 1
    function numbersPeers(array, target) {
        const set2 = new Map()
        const result = []
        for(let i = 0; i < array.length; i++) {
            let subtract = target - array[i]
            if(!set2.has(array[i])){
                set2.set(subtract, array[i])

            }
            // validando escenarios donde el elemento actual este como clave o donde
            // el residuo este establecido como clave, esto con el fin de que no haya repetidas
            else if(!set2.get(array[i]) || !set2.get(subtract)){
                console.log(set2.get(array[i]))
                result.push([set2.get(array[i]), array[i]])
                set2.set(subtract, array[i])    
            }
        }
    console.log(set2);
    return result
    }
    const arrayNumbersTarget = [2, 4, 3, 5, 7, 8, 9,1,1,1,1,9,1]

    // console.log(numbersPeers(arrayNumbersTarget, 10))



    // solucion 2
    function findPairs(array, target) {
        const seen = new Set();
        const result = [];

        for (let i = 0; i < array.length; i++) {
            const complement = target - array[i];
            if (seen.has(complement)) {
                result.push([complement, array[i]]);
            }
            seen.add(array[i]);
        }
        console.log(seen);
        return result;
    }

    const arrayNumbersTarget2 =[2, 4, 3, 5, 7, 8, 9,11,9,9,1,1,1]
    //console.log(findPairs(arrayNumbersTarget2, 10));
    /*  const g = new Map([[1,2], [3,4]])
        console.log(g);
        console.log(g.get(3)); 
    */


     console.log('******************* conteo de caracteres***************'.cyan);   
    /* Dada una cadena de texto, escribe un programa que cuente el número de veces que aparece cada carácter
       en la cadena y luego imprima un resumen mostrando cada carácter y su conteo. 

    */

    function verifyChain(string) {
        const splitString =  string.split('')
        console.log(splitString);
        const storage = {}  
    
        for(let i = 0; i < splitString.length; i++) {
            if(storage[splitString[i]]){
                storage[splitString[i]]++
            }else{
                storage[splitString[i]] = 1
            }
        }
        
        return storage
    
    }
   //console.log(verifyChain('hello world'));


   console.log('******************* encontrar el maximo ***************'.cyan);  
   function fx(array) {
        let max = array[0]
        for (let i = 1; i < array.length; i++) {
            array[i] >= max  ? max = array[i] : ''
        }
        return max
    }
    let ar = [-2, 7, 2, 9, 5]
    //console.log(fx(ar));


    /*  Dada una matriz (array) de números enteros, escribe un programa que encuentre 
        el subarreglo (subarray) contiguo con la suma más grande. El programa debería
        devolver la suma de ese subarreglo.

        Por ejemplo, dado el arreglo [-2, 1, -3, 4, -1, 2, 1, -5, 4], el subarreglo 
        contiguo con la suma más grande es [4, -1, 2, 1], y la suma de ese subarreglo 
        es 6. 

    */

})();



(() => {
    console.log(`************** version 1 de quick sort ******************`);
    // quick sort
    // ordena un arreglo 

    function quickSort(array, min, max) {
        // mientras el minimo sea menor que el maximo usar recursividad
        // para dividir el arreglo
        if(min < max) {
            // antes debere ejecutar una logica
            const q = partition(array, min, max)
            quickSort(array, min, q-1)
            quickSort(array, q+1, max)
        }   
        return array

        // caso contraio devuelvo el mismo arreglo y esto da entender que el 
        // arreglo ya no puede dividirse mas

    }

    function partition(array, min, max) {
        /* la logica de esta funcion sera seleccionar un pivote(por facilidad seleccionamos el ultimo elemento
        del arreglo), todos los elementos menores o iguales al pivote estaran en la izquierda y los mayores
        estaran a la derecha del pivote. 
        
        */

        // inicialmente estas dos varaibles iniciaran en el valor minimo
        // conforme vallamos recorriendo estas cambiaran su valor 
        let q = min
        let j = min
        
        for(let i = min; i <max; i++, j++) {
            if(array[j] <= array[max]) {
                // cambiar elemento en posicion q * elemento en posicion j
                let tempo = array[q]
                array[q] = array[j]
                array[j] = tempo
                q++
            }
        }

        let tempo = array[q]
        array[q] = array[max]
        array[max] = tempo
        console.log(array);
        return q
    }
    // [2,0,15,99,7]
    const arrayUnordered = [2,0,15,99,7]

    //console.log(quickSort(arrayUnordered, 0 , arrayUnordered.length-1));

    /*  Podrías no necesariamente escoger el elemento de hasta al derecha en cada
        subarreglo como el pivote. En lugar de eso, podrías escoger un elemento en 
        el subarreglo de manera aleatoria y usar ese elemento como el pivote. Pero 
        espera, la función partition supone que el pivote está en la posición de 
        hasta la derecha del subarreglo. No hay problema, solo intercambia el 
        elemento que escojas como el pivote con el elemento de hasta la derecha, y 
        después haz la partición como antes. A menos que tu enemigo sepa cómo 
        escoges ubicaciones aleatorias en el subarreglo, ¡tú ganas! 
    */


    console.log(`**************version 2 de quick sort******************`);

    function quickSortOne(array, min, max) {
        if(min < max) {
            let q =  partitionOne(array, min, max)
            quickSortOne(array,min, q-1)
            quickSortOne(array,q+1, max)
        }

        return array
    }

    const a = [2,0,15,99,7]

    //console.log(quickSortOne(a, 0 , a.length-1));

    function partitionOne(array, min, max) {
        let pivote = array[max]

        for(var j = min, q = min; j < max; j++) {
            if(array[j] <= pivote){
                let tempo = array[q]
                array[q] = array[j]
                array[j] = tempo
                q++

            }
        }
        let tempo = array[j]
        array[j] = array[q]
        array[q] = tempo  

        return q
    
    }


})();



(() => {
    console.log('******************** matriz espiral ********************'.cyan);

    // --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const result = []
    let counter=1, startRow=0, endRow=n-1, startCol=0, endCol=n-1
    for(let i=0; i<n; i++){
      result.push([])
    }
  
    while(startRow<=endRow && startCol<=endCol){
      //Top
    for(let i=startCol; i<=endCol; i++){
      result[startRow][i] = counter
      counter++
    }
    startRow++
  
    //Right
    for(let i=startRow; i<=endRow; i++){
      result[i][endCol] = counter
      counter++
    }
    endCol--
  
    //Bottom
    for(let i=endCol; i>=startCol; i--){
      result[endRow][i] = counter
      counter++
    }
    endRow--
    //Left
    for(let i=endRow; i>=startRow; i--){
      result[i][startCol] = counter
      counter++
    }
    startCol++
    }
  
    return result
  }
  
  console.log(matrix(4));

})();



(() => {
    console.log('******************** max min ********************'.cyan);

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


    console.log('******************** fibonnaci ********************'.cyan);

    // example : fibonacci de 4  = f(4-1) + f(4-2)
    function fibonnaci(numberTarget) {

        if(numberTarget <=1){
            return numberTarget
        }
    
        return fibonnaci(numberTarget-1) + fibonnaci(numberTarget-2)

    }
    //console.log(fibonnaci(4));


    console.log('******************** pase por valor ********************'.cyan);

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

})();
