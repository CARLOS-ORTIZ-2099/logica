/* import colors from "colors"; */

// primer ejercicio
() => {
  /*nos piden encontrar el primer numero repetido en la secuencia  de
    un arreglo en caso no hubiera numeros retornar -1
    ejemplo : const giftIds = [2, 1, 3, 5, 3, 2]
    const firstRepeatedId = findFirstRepeated(giftIds)
    console.log(firstRepeatedId) // 3
    Aunque el 2 y el 3 se repiten
    el 3 aparece primero por segunda vez 

  */

  /*pseudocodigo : iterar elemento por elemento, e ir guardando 
    un registro de los elementos con los que ya nos topamos si 
    en determinada posicion hay un elemento que ya esta en 
    registro quiere decir que ese es el que se repite    
  */

  function findFirstRepeated(gifts) {
    const register = new Set();
    // Code here
    for (let number of gifts) {
      if (register.has(number)) {
        return number;
      }
      register.add(number);
    }
    return -1;
  }

  const giftIds = [5, 1, 5, 1];
  console.log(findFirstRepeated(giftIds));
};

// segundo ejercicio
() => {
  /*el ejercicio consiste en : dado un listado de regalos y una serie
    de materiales devolver un arreglo con los regalos que se pueden 
    fabricar con los materiales disponibles 
            
    const gifts = ['tren', 'oso', 'pelota'] => lista de regalos
    const materials = 'tronesa' => cada caracter representa un material
    (Un regalo se puede fabricar si contamos con todos los materiales
    necesarios para fabricarlo.)
    ejemplo : const gifts = ['tren', 'oso', 'pelota']
    const materials = 'tronesa'
    manufacture(gifts, materials) // ["tren", "oso"]
    'tren' SÍ porque sus letras están en 'tronesa'
    'oso' SÍ porque sus letras están en 'tronesa'
    'pelota' NO porque sus letras NO están en 'tronesa'
  */

  /*pseudocodigo : tener en cuenta que
    - no importa cuantas veces aparesca un caracter en cada regalo, 
    lo importante es que ese caracter sea cual sea su cantidad este 
    presente por lo menos 1 ves en la lista de materiales
    - recorreremos cada una de las cadenas del arreglo y por cada
    cadena evaluaremos si esta presente en la lista de materiales
    - si a la primera que un caracter de un regalo no este incluido 
    en la lista de materiales dejamos de iterar y lo descartamos       
  */

  function manufacture(gifts, materials) {
    // Code here
    const reg = new Set(materials);
    const acc = [];

    for (let j = 0; j < gifts.length; j++) {
      let element = gifts[j];
      let isValid = true;
      for (let k = 0; k < element.length; k++) {
        if (!reg.has(element[k])) {
          isValid = false;
          break;
        }
      }

      isValid && acc.push(element);
    }

    return acc;
  }
  console.log(manufacture(["libro", "ps5"], "psli"));
  console.log(manufacture(["tren", "oso", "pelota"], "tronesa"));
};

// tercer ejercicio
() => {
  /*el ejercicio se trata de : dada 2 cadenas de texto la primera 
    cadena es la original y la segunda la modificada devolver el 
    caracter extra o faltante que pueda haber entre dichas cadenas 
    ejemplo : const original = 'abcd'
    const modified = 'abcde'
    findNaughtyStep(original, modified) // 'e'
    const original = 'stepfor'
    const modified = 'stepor'
    findNaughtyStep(original, modified) // 'f'  
  */

  /*pseudocodigo : tendremos un puntero que ira incrementando en tanto
    iteremos la cadena original, evaluaremos si el caracter de la actual
    posicion de la cadena original esta presente en la misma posicion de 
    la cadena modified, si no esta en la misma posicion entonces retornamos
    dicho caracter, si la cadena modified es mayor que la cadena original
    significa que falta un caracter entonces haremos un segundo bucle pero
    para la cadena modified empezando desde el valor en donde se quedo
    nuestro puntero   
  */

  function findNaughtyStep(original, modified) {
    let i;
    for (i = 0; i < original.length; i++) {
      if (original[i] != modified[i]) {
        return original.length > modified.length ? original[i] : modified[i];
      }
    }
    if (i < modified.length) return modified[i];
    return "";
  }
  console.log(findNaughtyStep("xxxx", "xxoxx"));
  console.log(findNaughtyStep("abecd", "abcd"));
  console.log(findNaughtyStep("abcd", "abcde"));
};

// cuarto ejercicio
() => {
  /*el ejercicio consta en : crear una funcion que dada una cadena de 
    texto elimine los parentesis de dicha cadena e invierta los caracteres
    que esten dentro de esos parentesis
    ejemplo : 
    const a = decode('hola (odnum)')
    console.log(a) // hola mundo
    const b = decode('(olleh) (dlrow)!')
    console.log(b) // hello world!
    const c = decode('sa(u(cla)atn)s')
    console.log(c) // santaclaus
    Paso a paso: 'sa+u+cla-atn-s'
    1. Invertimos el anidado -> sa(ualcatn)s
    2. Invertimos el que queda -> santaclaus
    Notas:
    Las cadenas de entrada siempre estarán bien formadas con paréntesis que
    coinciden correctamente, no necesitas validarlos.
    En el mensaje final no deben quedar paréntesis.
    El nivel máximo de anidamiento es 2.
    - las letras dentro de los paréntesis deben ser leídas al revés
    - revierta los caracteres dentro de cada par de paréntesis, eliminando
    los paréntesis en el mensaje final.
  */

  // primer forma de solucionarlo
  function decode(message) {
    const register = [];

    for (let i = 0; i < message.length; i++) {
      let parentesis = message[i];

      if (parentesis === "(" || parentesis === ")") {
        if (register[register.length - 1]?.clave == "(" && parentesis == ")") {
          let char = message.slice(
            register[register.length - 1].posicion + 1,
            i
          );
          let charVuelta = char.split("").reverse().join("");
          message = message.replace(char, charVuelta);

          register.pop();
        } else {
          register.push({ clave: parentesis, posicion: i });
        }
      }
    }
    //console.log(charnew);
    let char = "";
    for (let j = 0; j < message.length; j++) {
      if (message[j] != "(" && message[j] != ")") {
        char += message[j];
      }
    }
    return char;
  }

  /*   console.log(decode("sa(u(cla)atn)s"));
  console.log(decode("hola (o(d)(n)um)"));
  console.log(decode("(olleh) (dlrow)!")); */

  // segunda forma de solucionarlo

  /*pseudocodigo :
    - primero creare un arreglo que guarde el registro de los parentesis
    que valla encontrando en el recorrido de la cadena
    - luego iteramos con un bucle mientras mi variable x sea menor a la
    longitud de la cadena
    - evaluo si el caracter iterado es igual a un parentesis de apertura o
    cierre
    - si es asi evaluo si el ultimo elemento de mi arreglo es un parentesis
    de apertura y el elemento actual es uno de cierre si es asi
    - le doy vuelta a los caracteres dentro de esos parentesis posteriormente elimino esos 2 parentesis
    - luego disminuyo el valor de mi variable x en 2(ya que son la cantidad
    de elementos que se disminuyen en la cadena)
    - y el ciclo se repetira mientras x sea menor a la cadena al final la
    cadena tendria que estar sin parentesis y en el orden correcto
  */

  function decodeTwo(message) {
    let register = [];
    let x = 0;
    while (x < message.length) {
      if (message[x] == "(" || message[x] == ")") {
        if (register[register.length - 1]?.clave == "(" && message[x] == ")") {
          let char = message.slice(
            register[register.length - 1].posicion,
            x + 1
          );
          let charVuelta = char
            .split("")
            .reverse()
            .join("")
            .replace(/\(|\)/g, "");
          message = message.replace(char, charVuelta);

          // eliminar parentesis
          register.pop();
          x -= 2;
        } else {
          register.push({ clave: message[x], posicion: x });
        }
      }
      x++;
    }
    return message;
  }
  /*   console.log(decodeTwo("sa(u(cla)atn)s"));
  console.log(decodeTwo("hola (o((d))(n)um)"));
  console.log(decodeTwo("(olleh) (dlrow)!"));
  console.log(decodeTwo("(((((aloh)))))  (o(((ig)))ma)")); */
};

// quinto ejercicio
() => {
  /*el cyber truck de santa , Santa 🎅 está probando su nuevo trineo
    eléctrico, el CyberReindeer, en una carretera del Polo Norte. La
    carretera se representa con una cadena de caracteres, donde:
    . = Carretera
    S = Trineo de Santa
    * = Barrera abierta
    | = Barrera cerrada
    Ejemplo de carretera: S...|....|.....
    Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si
    encuentra una barrera cerrada, se detiene hasta que la barrera se abra.
    Si está abierta, la atraviesa directamente.

    Todas las barreras empiezan cerradas, pero después de 5 unidades de
    tiempo, se abren todas para siempre.

    Crea una función que simule el movimiento del trineo durante un tiempo
    dado y devuelva un array de cadenas representando el estado de la
    carretera en cada unidad de tiempo:
    const road = 'S..|...|..'
    const time = 10 // unidades de tiempo
    const result = cyberReindeer(road, time)

  /* -> result:
      [
        'S..|...|..', // estado inicial
        '.S.|...|..', // avanza el trineo la carretera
        '..S|...|..', // avanza el trineo la carretera
        '..S|...|..', // el trineo para en la barrera
        '..S|...|..', // el trineo para en la barrera
        '...S...*..', // se abre la barrera, el trineo avanza
        '...*S..*..', // avanza el trineo la carretera
        '...*.S.*..', // avanza el trineo la carretera
        '...*..S*..', // avanza el trineo la carretera
        '...*...S..', // avanza por la barrera abierta
      ]
  */

  function cyberReindeer(road, time) {
    const fotos = [];
    let current = 0;
    let acc = 0;
    let previous = ".";

    while (acc < time) {
      if (acc === 0) {
        fotos.push(road);
      } else if (acc === 5 || road[current + 1] === "*") {
        road = road.replace(/[|]/gi, "*");
        road =
          road.slice(0, current) +
          previous +
          road[current] +
          road.slice(current + 2);

        fotos.push(road);
        current++;
        previous = "*";
      } else if (road[current + 1] === "|" && acc < 5) {
        fotos.push(road);
      } else {
        road =
          road.slice(0, current) +
          previous +
          road[current] +
          road.slice(current + 2);
        fotos.push(road);
        current++;
        previous = ".";
      }
      acc++;
    }
    return fotos;
  }
  const road = "S..|...|..";
  const time = 10;
  //console.log(cyberReindeer(road, time));
};
//
() => {
  // primer regalo repetido
  /* Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
 ejemplo : const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]
 */

  // primer solucion
  const gifts = [3, 1, 2, 3, 4, 2, 5];
  const gifts1 = [6, 5, 5, 5, 5, -1, -1];
  function prepareGifts(gifts) {
    const newSet = new Set(gifts);
    return [...newSet].sort((a, b) => a - b);
  }

  //console.log(prepareGifts(gifts));

  // segunda solucion aplicando merge sort

  function mergeSort(array, min, max) {
    // primero evaluamos caso base
    if (min < max) {
      // bisecar el array y llamar recursivamente
      let half = Math.floor((min + max) / 2);
      mergeSort(array, min, half);
      mergeSort(array, half + 1, max);
      merge(array, min, half, max);
    }
    return array;
  }

  function merge(array, min, half, max) {
    let tempo = [];
    let left = min;
    let right = half + 1;
    let repeat = 0;
    // iterar siempre y cuando el minimo y el maximo no superen su limite permitido

    while (left <= half && right <= max) {
      // primero corroborar si alguno de estos es un caracter 'X'
      if (array[left] == "x") {
        // si es asi quiere decir que es el ultimo elemento de esa porcion y
        // no deberia ser comparado con otro de otra porcion
        // luego aumentamos nuestra variable repeat en la cantidad de elementos sobrantes que aun no se iteran
        // tambien aumentar left lo igualamos a half ya que no hay mas que iterar
        repeat += half - left + 1;
        left = half + 1;
        break;
      } else if (array[right] == "x") {
        // si es asi quiere decir que es el ultimo elemento de esa porcion y
        // no deberia ser comparado con otro de otra porcion
        repeat += max - right + 1;
        right = max + 1;
        break;
      }
      // si son iguales deberia ignorar uno de ellos
      if (array[left] == array[right]) {
        tempo.push(array[left]);
        left++;
        right++;
        repeat++;
      }

      // comparar
      else if (array[left] < array[right]) {
        tempo.push(array[left]);
        left++;
      } else {
        tempo.push(array[right]);
        right++;
      }
    }

    // luego insertar el remanente de cualquiera de los 2 arreglos en el tempo
    while (left <= half) {
      tempo.push(array[left]);
      left++;
    }

    while (right <= max) {
      tempo.push(array[right]);
      right++;
    }

    // bucle final
    while (repeat >= 1) {
      tempo.push("x");
      repeat--;
    }

    // luego copiar lo de el arreglo temporal al arreglo original

    for (let i = min; i <= max; i++) {
      array[i] = tempo[i - min];
    }
  }

  const ar = mergeSort(gifts, 0, gifts.length - 1);
  while (ar[ar.length - 1] == "x") {
    ar.pop();
  }
  console.log(ar);
};

() => {
  // enmarcando nombres
  /*

      Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

    Reglas:

    Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
    Cada nombre debe estar en una línea, alineado a la izquierda.
    El marco está construido con * y tiene un borde de una línea de ancho.
    La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
    Ejemplo de funcionamiento:

    *******
    * a   *
    * bb  *
    * ccc *
    ******* 
   createFrame(['a', 'bb', 'ccc'])
  */

  function createFrame(names) {
    let ar = [];
    const maxChar = names.reduce((a, b) => (a.length > b.length ? a : b));

    for (let char of names) {
      let firstChar = `* ${char}`;
      ar.push(
        `${
          firstChar +
          " ".repeat(maxChar.length + 4 - firstChar.length - 1) +
          "*"
        }`
      );
    }
    ar.unshift("*".repeat(maxChar.length + 4));
    ar.push("*".repeat(maxChar.length + 4));
    return ar.join("\n");
  }

  console.log(createFrame(["midu", "madeval", "educalvolpz"]));
};

() => {
  // organizando el inventario

  /* 
    Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.

Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

name: el nombre del juguete (string).
quantity: la cantidad disponible de ese juguete (entero).
category: la categoría a la que pertenece el juguete (string).
Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

Las claves del objeto serán las categorías de juguetes.
Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
Si el array está vacío, la función debe devolver un objeto vacío {}.  
  ejemplo :const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

organizeInventory(inventory2)

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }  

*/

  const inventory = [
    { name: "book", quantity: 10, category: "education" },
    { name: "book", quantity: 5, category: "education" },
    { name: "paint", quantity: 3, category: "art" },
  ];

  function organizeInventory(inventory) {
    let ob = {};
    for (let ele of inventory) {
      if ([ele["category"]] in ob) {
        ele["name"] in ob[ele["category"]]
          ? (ob[ele["category"]][ele["name"]] += ele["quantity"])
          : (ob[ele["category"]][ele["name"]] = ele["quantity"]);
      } else {
        ob[ele["category"]] = {
          [ele["name"]]: ele["quantity"],
        };
      }
    }
    return ob;
  }

  console.log(organizeInventory(inventory));
};

() => {
  /* 
  ¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

  La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:
  
  El árbol está compuesto de triángulos de caracteres especiales.
  Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
  Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
  El árbol siempre debe tener la misma longitud por cada lado.
  Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
  ejemplo : 
  const tree = createXmasTree(5, '*')
console.log(tree)
 
    ____*____
    ___***___
    __*****__
    _*******_
    *********
    ____#____
    ____#____
*/
  /* pseudocodigo
    - primero calculamos la longitud total del arbol + los espacios esta sera la altura*2 - 1
    - luego creamos un arreglo que contenga todas las los registro, cada elemento sera una fila del arbol
    - en cada iteracion el caracter especial aumentara en 2 
    -  los espacios de cada fila se determinaran por esta formula => 
    ((altura*2 - 1) - la longitud del caracter especial)/2, entre 2 por que 
    dividiremos los espacios para el lado izquierdo y derecho
    - repetimos el ciclo hasta llegar a la altura maxima

    - al final independientemente de la altura insertamos  la base con la misma formula que los demas registro
    solo que esta vez la longitud del caracter especial sera 1

  */

  function createXmasTree(height, ornament) {
    const lengthTree = height * 2 - 1;
    let charSpecial = 1;
    let finalChar = "";
    for (let i = 0; i < height; i++) {
      let spaces = (lengthTree - charSpecial) / 2;
      let char = `${
        "_".repeat(spaces) +
        ornament.repeat(charSpecial) +
        "_".repeat(spaces) +
        "\n"
      }`;
      finalChar += char;
      charSpecial += 2;
    }
    finalChar += `${
      "_".repeat((lengthTree - 1) / 2) +
      "#" +
      "_".repeat((lengthTree - 1) / 2) +
      "\n"
    }`;
    finalChar += `${
      "_".repeat((lengthTree - 1) / 2) + "#" + "_".repeat((lengthTree - 1) / 2)
    }`;
    return finalChar;
  }

  const tree = createXmasTree(5, "*");
  console.log(tree);
  // console.log("__*__\n_***_\n*****\n__#__\n__#__");
};

() => {
  /* Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

  type indica si es una bota izquierda (I) o derecha (R).
  size indica el tamaño de la bota.
  Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

  ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño! 

  ejemplo : 
  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]

  organizeShoes(shoes)
  // [38, 42]

  pseudocodigo : 
  - crear una estructura que contenga el recuento de todos los pares (puede ser un map)
  - crear un arreglo contenedor de las tallas de zapatillas
  - recorrer el arreglo que me dan
  - en cada iteracion comprobar si el size existe como propiedad de mi estructura
  - si no existe creo la propiedad donde la clave sera el size y el valor un objeto con 2 propiedades y dependiendo de que type sea el elemento recorrido establesco alguna de esas propiedades en 1 y la otra en cero => {I : 0, R : 1 }
  - si el size si existe como propiedad entonces se entiende que el objeto con las 2 propiedades existe = {I : 0, R : 1 } y dependiendo del type solo le sumamos lo que ya tenia + 1 
  - por ejemplo si el type es I(sabemos que ya tenemos 1 de ese tipo de antemano) y comprobamos si el type R(opuesto) es mayor a 0 si es asi quiere decir que tenemos un par encontrado y solo restamos 1  a R y pusheamos el size al arreglo contenedor y repetimos el ciclo
*/
  /* const newMap = new Map([
    [34, { I: 2, R: 10 }],
    [35, { I: 2, R: 10 }],
  ]);
  console.log(newMap); */
  function organizeShoes(shoes) {
    const newMap = new Map();
    const totalSizes = [];
    for (let i = 0; i < shoes.length; i++) {
      if (newMap.has(shoes[i].size)) {
        let opuesto = shoes[i].type == "I" ? "R" : "I";
        const res = newMap.get(shoes[i].size);
        if (res[opuesto] > 0) {
          res[opuesto]--;
          totalSizes.push(shoes[i].size);
        } else {
          res[shoes[i].type] += 1;
        }
      } else {
        newMap.set(shoes[i].size, { I: 0, R: 0, [shoes[i]["type"]]: 1 });
      }
    }

    return totalSizes;
  }

  const shoes = [
    { type: "I", size: 38 }, // =>i =  1
    { type: "R", size: 38 }, // => r = 1
    { type: "R", size: 42 }, // => r = 2
    { type: "I", size: 41 }, // => i = 2
    { type: "I", size: 42 }, // => i = 3
  ];

  console.log(organizeShoes(shoes));
};

() => {
  /* 
  Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario. 
  ejemplo : 
  inBox([
    "###",
    "#*#",
    "###"
  ]) // ➞ true

  pseudocodigo :
  - primero creamos una variable en false
  - luego recorremos el array omitiendo el primer y ultimo elemento
  - ya que si el asterisco llegase a estar en uno de esos registros sea cual sea su posicion ya estaria en el borde y deberemos retornar false
  - luego en cada iteracion comprobamos si hay un * en la cadena
  que se esta recorriendo
  - si no esta, solo seguimos avanzando
  - si esta 
    - lo que hacemos sera sacar la primer y la ultima posicion del #(que deberia representar el borde) 
    - luego comprobamos si la posicion del * esta entre ese rango numerico
    - por ejemplo si el primer y el ultimo borde estan en la posicion 0 y 4 respectivamente entonces nuestro * debe estar entre la posicion 1 y 3 ya que este no puede estar en el borde
    - despues finalizamos el bucle 

*/

  function inBox(box) {
    for (let i = 1; i < box.length - 1; i++) {
      let positionAst = box[i].indexOf("*");
      if (positionAst >= 0) {
        let firstPosition = box[i].indexOf("#");
        let lastPosition = box[i].lastIndexOf("#");
        if (positionAst > firstPosition && positionAst < lastPosition) {
          return true;
        }
      }
    }
    return false;
  }

  console.log(inBox(["###", "###", "#*#"]));
};

() => {
  /* ¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos: 

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"

  pseudocodigo : 
  - primero obtenemos los primeros indices(posiciones) de los parentesis
    - si existen dichas posiciones, llamamos recursivamente a la funcion pero
    la pasandole la porcion recortada, que sera desde una posicion mas que 
    "(" y una posicion menos que ")"
    - en caso no existan indices para los parentesis quiere decir que llegamos al caso base
    - entonces deberiamos retornar la cadena, pero volteada y eliminando los 
    parentesis que los preceden




*/

  function fixPackages(packages) {
    if (!packages.includes("(")) return packages;
    let firstIndex = packages.indexOf("(");
    let lastIndex = packages.lastIndexOf(")");
    if (firstIndex >= 0 && lastIndex >= 0) {
      let char = fixPackages(packages.slice(firstIndex + 1, lastIndex));
      char = char.split("").reverse().join("");
      packages =
        packages.slice(0, firstIndex) + char + packages.slice(lastIndex + 1);
      return packages;
    } else {
      return packages;
    }
  }
  console.log(fixPackages("a(cb)de")); // ➞ "abcde" (¿tu código lo pasa?)
  console.log(fixPackages("a(bc(def)g)h")); // ➞ "agdefcbh" (¿funciona en este caso?)
  console.log(fixPackages("abc(def(gh)i)jk")); // ➞ "abcighfedjk" (¿y este?)
};

() => {
  /* ¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

La información que recibes: 
indices: Un array de enteros que representan el progreso de cada reno en la pista:
0: El carril está vacío.
Número positivo: La posición actual del reno desde el inicio de la pista.
Número negativo: La posición actual del reno desde el final de la pista.
length: La longitud de cada carril.
Devuelve un string que represente la pista de la carrera:

Cada carril tiene exactamente length posiciones llenas de nieve (~).
Cada reno se representa con la letra r.
Los carriles están numerados al final con /1, /2, etc.
La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.
  ejemplo : drawRace([0, 5, -3], 10)

*/
  function drawRace(indices, length) {
    let char = "";
    for (let i = 0; i < indices.length; i++) {
      let space = " ".repeat(indices.length - 1 - i);
      let tempo = ``;
      if (indices[i] > 0) {
        tempo = `${"~".repeat(indices[i])}r`;
        char += `${space}${tempo}${"~".repeat(length - tempo.length)} /${
          i + 1
        }\n`;
      } else if (indices[i] < 0) {
        tempo = `${"~".repeat(length - parseInt(-indices[i]))}r`;
        char += `${space}${tempo}${"~".repeat(length - tempo.length)} /${
          i + 1
        }\n`;
      } else {
        char += `${space}${"~".repeat(length)} /${i + 1}\n`;
      }
    }
    return char.trimEnd();
  }
  console.log(drawRace([0, 5, -3], 10));
};

() => {
  /* Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros board y mov.

board es un array de strings que representa el tablero:

@ es la locomotora del tren.
o son los vagones del tren.
* es una fruta mágica.
· son espacios vacíos.
mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

'L': izquierda
'R': derecha
'U': arriba
'D': abajo.
Con esta información, debes devolver una cadena de texto:

'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
'eat': Si el tren recoge una fruta mágica (*).
'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
Ejemplo: 

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

  
*/
  /* pseudocodigo :
    - primero recorreremos el arreglo 
   
    - por cada elemento(representado por subarreglos) iterado preguntar si la cabeza del tren esta incluido en ese nivel (subarreglo) sacamos su indice indice_actual_tren del subarreglo iterado
    - si no esta incluido seguimos
   
    - si esta incluido lo que hacemos es : 
     
    - comprobar el valor del segundo parametro
      - si es U o D trabajamos con la coordenada Y
        - por ejemplo si el valor del segundo parametro es U subimos un nivel
          por encima de la cabeza del tren
        - por ejemplo si el valor del segundo parametro es D bajamos un
          nivel por debajo de la cabeza del tren  
          
          - independientemente de donde nos movamos siempre debemos preguntar si :
          
            - array[nivel_actual-U][indice_actual_tren] //subida
            || array[nivel_actual+D][indice_actual_tren] // bajada
            = undefined O es igual a ° si es asi quiere decir que ya no hay mas niveles ya sea para subir o bajar o la posicion esta ocupada por un vagon y el tren habra chocado devolvemos crash

            - si array[nivel_actual-U][indice_actual_tren] //subida
            || array[nivel_actual+D][indice_actual_tren] // bajada
            = * indica que encontramos una fruta magica devolvemos eat

            - si no se cumple ninuna de las anteriores devolvemos none

      - si es L o R trabajamos con la coordenada X
        - por ejemplo si el valor del segundo parametro es L nos quedamos en el mismo nivel pero retrocedemos una posicion a la izquierda de la cabeza del tren
        - por ejemplo si el valor del segundo parametro es R nos quedamos en el mismo nivel pero avanzamos una posicion a la derecha de la cabeza del tren

        - independientemente de donde nos movamos siempre debemos preguntar si : 
          - array[nivel_actual-L] // izquierda
            || array[nivel_actual+R] // derecha
          = undefined O es igual a ° si es asi quiere decir que ya no hay mas posiciones ya sea para izquierda o derecha o la pasicion esta ocupada por un vagon y el tren habra chocado devolvemos crash  

          - si array[nivel_actual-L] // izquierda
            || array[nivel_actual+R] // derecha
          = * indica que encontramos una fruta magica devolvemos eat

          - si no se cumple ninuna de las anteriores devolvemos none
    
  */
  const board = ["·····", "*····", "@····", "o····", "o····"];

  // primer solucion
  function moveTrain(board, mov) {
    const container = { X: { L: -1, R: 1 }, Y: { D: 1, U: -1 } };

    for (let i = 0; i < board.length; i++) {
      let indice_tren = board[i].indexOf("@");
      if (indice_tren >= 0) {
        if (mov in container["X"]) {
          if (
            board[i][indice_tren + container["X"][mov]] == undefined ||
            board[i][indice_tren + container["X"][mov]] == "o"
          ) {
            return "crash";
          } else if (board[i][indice_tren + container["Y"][mov]] == "*") {
            return "eat";
          }
          return "none";
        } else {
          if (
            board[i + container["Y"][mov]]?.[indice_tren] == undefined ||
            board[i + container["Y"][mov]]?.[indice_tren] == "o"
          ) {
            return "crash";
          } else if (board[i + container["Y"][mov]]?.[indice_tren] == "*") {
            return "eat";
          }
          return "none";
        }
      }
    }
  }

  //console.log(moveTrain(board, "D"));

  // segunda solucion

  function moveTrain1(board, mov) {
    let char = board.join("|");
    let longLevel = board[0].length;
    let indexTren = char.indexOf("@");
    let data = { "*": "eat", "|": "crash", o: "crash", undefined: "crash" };
    let icon;
    if (mov == "U") {
      icon = char[indexTren - (longLevel + 1)];
    } else if (mov == "D") {
      icon = char[indexTren + (longLevel + 1)];
    } else if (mov == "L") {
      icon = char[indexTren - 1];
    } else if (mov == "R") {
      icon = char[indexTren + 1];
    }

    return data?.[icon] || "none";
  }

  console.log(moveTrain1(board, "R"));
};

() => {
  /* Los elfos programadores están creando un pequeño ensamblador mágico para controlar las máquinas del taller de Santa Claus.

Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:

MOV x y: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
INC x: Incrementa en 1 el contenido del registro x
DEC x: Decrementa en 1 el contenido del registro x
JMP x y: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.
Comportamiento esperado:
Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor 0 por defecto.
El salto con JMP es absoluto y lleva al índice exacto indicado por y.
Al finalizar, el programa debe devolver el contenido del registro A. Si A no tenía un valor definido, retorna undefined.

  ejemplo : 
  const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

compile(instructions) // -> 2


 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 

*/
  const instructions = [
    "MOV -1 C", // copia -1 al registro 'C',
    "INC C", // incrementa el valor del registro 'C'
    "JMP C 1", // salta a la instrucción en el índice 1 si 'C' es 0
    "MOV C A", // copia el registro 'C' al registro 'a',
    "INC A", // incrementa el valor del registro 'a'
  ];

  const instructions1 = ["MOV 2 X", "DEC X", "DEC X", "JMP X 1", "MOV X A"];
  const instructions2 = ["INC C", "DEC B", "MOV C Y", "INC Y"];
  function compile(instructions) {
    let register = {};
    let index = 0;
    while (index < instructions.length) {
      let split = instructions[index].split(" ");
      if (split[0] == "INC") {
        split[1] in register ? register[split[1]]++ : (register[split[1]] = 1);
      } else if (split[0] == "DEC") {
        split[1] in register ? register[split[1]]-- : (register[split[1]] = -1);
      } else if (split[0] == "MOV") {
        split[1] in register
          ? (register[split[2]] = register[split[1]])
          : (register[split[2]] = split[1]);
      } else if (split[0] == "JMP") {
        if (register[split[1]] == 0) {
          index = split[2];
          continue;
        }
      }
      index++;
    }
    return register;
  }

  console.log(compile(instructions2));
};

() => {
  /* El Grinch ha hackeado 🏴‍☠️ los sistemas del taller de Santa Claus y ha codificado los nombres de todos los archivos importantes. Ahora los elfos no pueden encontrar los archivos originales y necesitan tu ayuda para descifrar los nombres.

Cada archivo sigue este formato:

Comienza con un número (puede contener cualquier cantidad de dígitos).
Luego tiene un guion bajo _.
Continúa con un nombre de archivo y su extensión.
Finaliza con una extensión extra al final (que no necesitamos).
Ten en cuenta que el nombre de los archivos pueden contener letras (a-z, A-Z), números (0-9), otros guiones bajos (_) y guiones (-).

Tu tarea es implementar una función que reciba un string con el nombre de un archivo codificado y devuelva solo la parte importante: el nombre del archivo y su extensión.
  ejemplo : 
  decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
  // ➞ "sleighDesign.png"

  decodeFilename('42_chimney_dimensions.pdf.hack2023')
  // ➞ "chimney_dimensions.pdf"

  decodeFilename('987654321_elf-roster.csv.tempfile')
  // ➞ "elf-roster.csv"
*/

  function decodeFilename(filename) {
    let firstUnderScore = filename.indexOf("_");
    let lastPoint = filename.lastIndexOf(".");
    let char = filename.slice(firstUnderScore + 1, lastPoint);
    return char;
  }
  console.log(decodeFilename("2023122512345678_sleighDesign.png.grinchwa"));
};

() => {
  /* Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄. Cada uno viene decorado con una serie de adornos muy peculiares, y el precio del árbol se determina en función de los adornos que tiene.

*: Copo de nieve - Valor: 1
o: Bola de Navidad - Valor: 5
^: Arbolito decorativo - Valor: 10
#: Guirnalda brillante - Valor: 50
@: Estrella polar - Valor: 100
Normalmente se sumarían todos los valores de los adornos y ya está…
Pero, ¡ojo! Si un adorno se encuentra inmediatamente a la izquierda de otro de mayor valor, en lugar de sumar, se resta su valor.
  ejemplo : 
    calculatePrice('***')  // 3   (1 + 1 + 1)
    calculatePrice('*o')   // 4   (5 - 1)
    calculatePrice('o*')   // 6   (5 + 1)
    calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
    calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
    calculatePrice('o***') // 8   (5 + 3)
    calculatePrice('*o@')  // 94  (-5 - 1 + 100)
    calculatePrice('*#')   // 49  (-1 + 50)
    calculatePrice('@@@')  // 300 (100 + 100 + 100)
    calculatePrice('#@')   // 50  (-50 + 100)
    calculatePrice('#@Z')  // undefined (Z es desconocido)
 */
  function calculatePrice(ornaments) {
    let registers = {
      "*": 1,
      o: 5,
      "^": 10,
      "#": 50,
      "@": 100,
    };
    let sum = 0;
    for (let i = 0; i < ornaments.length; i++) {
      if (!(ornaments[i] in registers)) {
        return undefined;
      }
      if (registers[ornaments[i]] < registers[ornaments[i + 1]]) {
        sum -= registers[ornaments[i]];
      } else {
        sum += registers[ornaments[i]];
      }
    }
    return sum;
  }
  console.log(calculatePrice("*o*"));
};

() => {
  /*  
    Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir
    regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

    Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.
    Las órdenes básicas del robot son:
    L: Mover hacia la izquierda
    R: Mover hacia la derecha
    U: Mover hacia arriba
    D: Mover hacia abajo

    Pero también tiene ciertos modificadores para los movimientos:
    *: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
    !: El siguiente movimiento se invierte (ej: R!L se considera como RR)
    ?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)

    Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y
    no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza
    que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto,
    se haría el movimiento U final.

    Debes devolver:
    true: si el robot vuelve a estar justo donde empezó
    [x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo 

    isRobotBack('R')     // [1, 0]
    isRobotBack('RL')    // true => [x, y] || [1,0] || [1-1,0]
    isRobotBack('RLUD')  // true => [x, y] || [1,0] || [1-1,0] || [0, 1] || [0, 1-1]
    isRobotBack('*RU')   // [2, 1]
    isRobotBack('R*U')   // [1, 2]
    isRobotBack('LLL!R') // [-4, 0]
    isRobotBack('R?R')   // [1, 0]
    isRobotBack('U?D')   // true
    isRobotBack('R!L')   // [2,0]
    isRobotBack('U!D')   // [0,2]
    isRobotBack('R?L')   // true
    isRobotBack('U?U')   // [0,1]
    isRobotBack('*U?U')  // [0,2]
    isRobotBack('U?D?U') // true

    // Ejemplos paso a paso:
    isRobotBack('R!U?U') // [1,0]
    // 'R'  -> se mueve a la derecha 
    // '!U' -> se invierte y se convierte en 'D'
    // '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

    isRobotBack('UU!U?D') // [0,1]
    // 'U'  -> se mueve arriba
    // 'U'  -> se mueve arriba
    // '!U' -> se invierte y se convierte en 'D'
    // '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'

  */
  /* descomponiendo el problema
    tenemos : 
    - movimientos
    - modificadores de movimientos
    - los movimientos se basaran en un plano 2d 
    - se trabajaran con 2 ejes X e Y 
      - eje X 
          en tanto mas nos movamos para un lado el valor para X aumentara (si se mueve para las positivas)
          o disminuira (si se mueve para las negativas)
        - R => apunta a las X positivas = 1
        - L => apunta a las X negativas = -1
      - eje Y
          en tanto mas nos movamos para un lado el valor para Y aumentara (si se mueve para las positivas)
          o disminuira (si se mueve para las negativas)
          - U => apunta a las Y positivas = 1
          - D => apunta a las Y negativas = -1
  */

  function isRobotBack(moves) {
    const map = {
      R: { val: 1, eje: "X" },
      L: { val: -1, eje: "X" },
      U: { val: 1, eje: "Y" },
      D: { val: -1, eje: "Y" },
    };
    // prev es el elemento previo
    const location = { X: 0, Y: 0, prev: "" };
    const opuesto = { R: "L", L: "R", U: "D", D: "U" };

    for (let i = 0; i < moves.length; i++) {
      if (!(moves[i] in map)) {
        if (moves[i] == "*") {
          location[map[moves[i + 1]]?.["eje"]] += map[moves[i + 1]]?.["val"];
        } else if (moves[i] == "?") {
          if (location.prev == moves[i + 1]) {
            i++;
          } else {
            location[map[moves[i + 1]]?.["eje"]] += map[moves[i + 1]]?.["val"];
            i++;
          }
        } else if (moves[i] == "!") {
          location[map[opuesto[moves[i + 1]]]?.["eje"]] +=
            map[opuesto[moves[i + 1]]]?.["val"];
          // tambien guardamos el caracter previo cuando hagamos una transformacion
          location.prev = opuesto[moves[i + 1]];
          i++;
        }
      } else {
        location[map[moves[i]]["eje"]] += map[moves[i]]["val"];
        // en cada iteracion que no tenga un caracter especial guardamos prev para compararlo luego
        location.prev = moves[i];
      }
    }
    return location.X + location.Y == 0 ? true : [location.X, location.Y];
  }
  console.log(isRobotBack("!U?U"));
  //console.log(isRobotBack("RRL"));
  //console.log(isRobotBack("*R*U")); // multiplicador
  //console.log(isRobotBack("R?R")); // se omite el movimiento si el anterior es el mismo
  //console.log(isRobotBack("R!L")); // mover el opuesto4
};

() => {
  /* Los renos necesitan moverse para ocupar los establos, pero no puede haber más de un reno por establo. Además,
     para que los renos estén cómodos, debemos minimizar la distancia total que recorren para acomodarse.

     Tenemos dos parámetros:

     reindeer: Un array de enteros que representan las posiciones de los renos.
     stables: Un array de enteros que representan las posiciones de los establos.
     Hay que mover cada reno, desde su posición actual, hasta un establo. Pero hay que tener en cuenta que sólo puede
     haber un reno por establo.

     Tu tarea es calcular el mínimo número de movimientos necesarios para que todos los renos acaben en un establo.

     Nota: Ten en cuenta que el array de establos siempre tendrá el mismo tamaño que el array de renos y que siempre los
     establos serán únicos.

      Ejemplo 

        minMovesToStables([2, 6, 9], [3, 8, 5]) // -> 3
      // Explicación:
      // Renos en posiciones: 2, 6, 9
      // Establos en posiciones: 3, 8, 5
      // 1er reno: se mueve de la posición 2 al establo en la posición 3 (1 movimiento).
      // 2do reno: se mueve de la posición 6 al establo en la posición 5 (1 movimiento)
      // 3er reno: se mueve de la posición 9 al establo en la posición 8 (1 movimiento).
      // Total de movimientos: 1 + 1 + 1 = 3 movimientos

      minMovesToStables([1, 1, 3], [1, 8, 4])
      // Explicación:
      // Renos en posiciones: 1, 1, 3
      // Establos en posiciones: 1, 8, 4
      // 1er reno: no se mueve (0 movimientos)
      // 2do reno: se mueve de la posición 1 al establo en la posición 4 (3 movimientos)
      // 3er reno: se mueve de la posición 3 al establo en la posición 8 (5 movimientos)
      // Total de movimientos: 0 + 3 + 5 = 8 movimientos

  */

  function minMovesToStables(reindeer, stables) {
    reindeer.sort();
    stables.sort();
    let suma = 0;
    for (let i = 0; i < reindeer.length; i++) {
      let rec = reindeer[i] - stables[i];
      suma += rec < 0 ? -1 * rec : rec;
    }
    return suma;
  }
  console.log(minMovesToStables([2, 6, 9], [3, 8, 5]));
};

/* FALTA ACABAR */
() => {
  /* FALTA ACABAR */
  /* Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración
     de regalos y niños.
     Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta
     en una tabla de texto.

     La tabla dibujada debe representar los datos del objeto de la siguiente manera:
     Tiene una cabecera con el nombre de la columna.
     El nombre de la columna pone la primera letra en mayúscula.
     Cada fila debe contener los valores de los objetos en el orden correspondiente.
     Cada valor debe estar alineado a la izquierda.
     Los campos dejan siempre un espacio a la izquierda.
     Los campos dejan a la derecha el espacio "necesario"(valor variable) para alinear la caja.
     Mira el ejemplo para ver cómo debes dibujar la tabla: 
*/

  function drawTable(data) {
    const keys = Object.keys(data[0]);
    const result = data.reduce(
      (a, b) => {
        if (String(b[keys[0]]).length > a?.["col1"]) {
          a = { ...a, col1: b[keys[0]].toString().length };
        }
        if (String(b[keys[1]]).length > a?.["col2"]) {
          a = { ...a, col2: String(b[keys[1]]).length };
        }
        return a;
      },
      { col1: keys[0].length, col2: keys[1].length }
    );
    console.log(result);
    let char = ``;
    let respeat = `${"+"}${"-".repeat(result.col1 + 2)}+${"-".repeat(
      result.col2 + 2
    )}+`;
    char += respeat + "\n";
    char += `${"|"}${
      " " + keys[0].slice(0, 1).toUpperCase() + keys[0].slice(1)
    }${" ".repeat(result.col1 - keys[0].length + 1)}|${
      " " + keys[1].slice(0, 1).toUpperCase() + keys[1].slice(1)
    }${" ".repeat(result.col2 - keys[1].length + 1)}|\n`;
    char += respeat + "\n";

    for (let i = 0; i < data.length; i++) {
      char += `${"|"}${" " + data[i][keys[0]]}${" ".repeat(
        result.col1 - String(data[i][keys[0]]).length + 1
      )}|${" " + data[i][keys[1]]}${" ".repeat(
        result.col2 - String(data[i][keys[1]]).length + 1
      )}|\n`;
    }
    char += respeat;
    console.log(char);
    return char;
  }

  drawTable([
    { id: NaN, score: undefined },
    { id: 2, score: 85 },
  ]);
  /* 
  drawTable([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "New York" },
  ]);

  drawTable([
    { gift: "Doll", quantity: 10 },
    { gift: "Book", quantity: 5 },
    { gift: "Music CD", quantity: 1 },
  ]); */
  const data = { toys_and_things: undefined };
  /*  console.log(String(data.toys_and_things));
  console.log(Number("165")); */
};

() => {
  /* Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️. Esta nieve tiene una propiedad especial: si dos montículos de nieve idénticos y adyacentes se encuentran, desaparecen automáticamente.

  Tu tarea es escribir una función que ayude a los elfos a simular este proceso. El camino se representa por una cadena de texto y cada montículo de nieve un carácter.

  Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales hasta que no queden más movimientos posibles.

  El resultado debe ser el camino final después de haber eliminado todos los montículos duplicados:

  removeSnow('zxxzoz') // -> "oz"
  // 1. Eliminamos "xx", quedando "zzoz"
  // 2. Eliminamos "zz", quedando "oz"

  removeSnow('abcdd') // -> "abc"
  // 1. Eliminamos "dd", quedando "abc"

  removeSnow('zzz') // -> "z"
  // 1. Eliminamos "zz", quedando "z"

  removeSnow('a') // -> "a"
  // No hay montículos repetidos

*/
  /* pseudocodigo :
    - primero crear una variable que contenga la cadena original, esto con el fin de mutar
    el texto
    - luego crear otra variable index que inicie en cero
    - recorrer la cadena mientras index sea menor a la cadena 
    - en cada recorrido comparar si el elemento actual y su adyacente siguiente son iguales
      - si son asi eliminar esas 2 porciones de la cadena
      - la variable index igualarlo a index-1 => si el resultado es undefined quiere decir que
      - eliminamos los 2 primeros caracteres de la cadena entonces igualamos index a 0
  */
  function removeSnow(s) {
    let index = 0;
    while (index < s.length) {
      if (s[index] === s[index + 1]) {
        s = s.slice(0, index) + s.slice(index + 2);
        if (s.length <= 0) return s;
        index = index - 1;
      } else {
        index++;
      }
    }
    return s;
  }
  let char = "zxxzoz";
  console.log(removeSnow(char));
};
