/* import colors from 'colors' */
(() => {
  /*  nos piden encontrar el primer numero repetido en la secuencia  de
        un arreglo en caso no hubiera numeros retornar -1

        ejemplo : const giftIds = [2, 1, 3, 5, 3, 2]
        const firstRepeatedId = findFirstRepeated(giftIds)
        console.log(firstRepeatedId) // 3
        // Aunque el 2 y el 3 se repiten
        // el 3 aparece primero por segunda vez 

    */

  /* pseudocodigo : iterar elemento por elemento, e ir guardando 
       un registro de los elementos con los que ya nos topamos
       si en determinada posicion hay un elemento que ya esta en 
       registro quiere decir que ese es el que se repite  
        
    */

  console.log(`primer ejercicio`.magenta);

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
  //console.log(findFirstRepeated(giftIds));

  console.log(`segundo ejercicio`.magenta);

  /* el ejercicio consiste en  : dado un listado de regalos y una serie 
           de materiales devolver un arreglo con los regalos que se pueden 
           fabricar con los materiales disponibles 
            
           const gifts = ['tren', 'oso', 'pelota'] => lista de regalos
           const materials = 'tronesa' => cada caracter representa un material

          (Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.)

           ejemplo : const gifts = ['tren', 'oso', 'pelota']
           const materials = 'tronesa'

           manufacture(gifts, materials) // ["tren", "oso"]
           // 'tren' SÍ porque sus letras están en 'tronesa'
           // 'oso' SÍ porque sus letras están en 'tronesa'
           // 'pelota' NO porque sus letras NO están en 'tronesa'


        */

  /* pseudocodigo : tener en cuenta que
           - no importa cuantas veces aparesca un caracter en cada regalo, lo
           importante es que ese caracter sea cual sea su cantidad este 
           presente por lo menos 1 ves en la lista de materiales
           - recorreremos cada una de las cadenas del arreglo y por cada
           cadena evaluaremos si esta presente en la lista de materiales
           si a la primera que un caracter de un regalo no este incluido 
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
  //console.log(manufacture(["libro", "ps5"], "psli"));
  //console.log(manufacture(["tren", "oso", "pelota"], "tronesa"));
  // ["tren", "oso"]

  console.log(`tercer ejercicio`.magenta);

  /* el ejercicio se trata de  : dada 2 cadenas de texto la primera 
             cadena es la original y la segunda la modificada devolver el 
             caracter extra o faltante que pueda haber entre dichas cadenas 
              ejemplo : const original = 'abcd'
                        const modified = 'abcde'
                        findNaughtyStep(original, modified) // 'e'

              const original = 'stepfor'
              const modified = 'stepor'
              findNaughtyStep(original, modified) // 'f'  

          */
  /* pseudocodigo : tendremos un puntero que ira incrementando en tanto iteremos 
            la cadena original, evaluaremos si el caracter de la actual posicion de la
            cadena original esta presente en la misma posicion de la cadena modified, si
            no esta en la misma posicion entonces retornamos dicho caracter, si la cadena
            modified es mayor que la cadena original significa que falta un caracter entonces
            haremos un segundo bucle pero para la cadena modified empezando desde el valor 
            en donde se quedo nuestro puntero  
         
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
  // console.log(findNaughtyStep("xxxx", "xxoxx"));
  // console.log(findNaughtyStep("abecd", "abcd"));
  // console.log(findNaughtyStep("abcd", "abcde"));

  console.log(`cuarto ejercicio`.magenta);
  /* el ejercicio consta en  : crear una funcion que dada una cadena de texto elimine los
           parentesis de dicha cadena e invierta los caracteres que esten dentro de esos parentesis

            ejemplo : 
            const a = decode('hola (odnum)')
            console.log(a) // hola mundo

            const b = decode('(olleh) (dlrow)!')
            console.log(b) // hello world!

            const c = decode('sa(u(cla)atn)s')
            console.log(c) // santaclaus

            // Paso a paso:               'sa+u+cla-atn-s'
            // 1. Invertimos el anidado -> sa(ualcatn)s
            // 2. Invertimos el que queda -> santaclaus

            Notas:
            Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
            En el mensaje final no deben quedar paréntesis.
            El nivel máximo de anidamiento es 2.


        */

  // - las letras dentro de los paréntesis deben ser leídas al revés
  // - revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

  // primer forma de solucionarlo
  function decode(message) {
    //console.log(message);
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
  /* 
  console.log(decode("sa(u(cla)atn)s"));
  console.log(decode("hola (o(d)(n)um)"));
  console.log(decode("(olleh) (dlrow)!")); */

  // segunda forma de solucionarlo
  function decodeTwo(message) {
    // pseudocodigo
    // primero creare un arreglo que guarde el registro de los parentesis que valla encontrando en el recorrido de la cadena
    // primero iteramos con un bucle mientras mi variable x sea menor a la longitud de la cadena
    // evaluo si el caracter iterado es igual a un parentesis se apertura o cierre
    // si es asi evaluo si el ultimo elemento de mi arreglo es un parentesis de apertura y el elemento actual es uno de cierre si es asi
    // le doy vuelta a los caracteres dentro de esos parentesis y posteriormente elimino esos 2 parentesis
    // luego disminuyo el valor de mi variable x en 2(ya que son la cantidad de elementos que se disminuyen en la cadena)
    // y el ciclo se repetira mientras x sea menor a la cadena
    // al final la cadena tendria que estar sin parentesis y en el orden correcto

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
  console.log(decodeTwo("sa(u(cla)atn)s"));
  console.log(decodeTwo("hola (o((d))(n)um)"));
  console.log(decodeTwo("(olleh) (dlrow)!"));
  console.log(decodeTwo("(((((aloh)))))  (o(((ig)))ma)"));
})();
