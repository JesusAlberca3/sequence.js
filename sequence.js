/**
 * 1. Crear una funcion para recibir un numero
 * 2. Definir un condicional para el caso de numeros menor a 0
 * 3. Definir un condicional si el numero es mayor a 0
 * 4. Imprimir el valor del numero
 * 5. Llamar la funcion de sequence con el valor de numero menos uno
 * 
 * sequence(number)
 * input: Any number
 * output: descending sequence of numbers
 * IF number < 0 THEN:
 *  RETURN -1:
 * 
 * IF number > 0 THEN:
 *  print number
 *  sequence(number - 1)

 */

function sequence (number){
    if(number < 0){
        return -1;
    }

    if ( number > 0){
        console.log(number);
        sequence(number - 1);
    }
}

sequence (123);
