//Cree un programa que reciba como parámetro un array de números, y
//verifique la lista de manera que retorne el número mayor. (Valor: 5pts)
/*
    let listaejercicioUno = (1,2,3,4,5,6,7,8);
    console.log("resultado de ejercicio 1 :" + Math.max(listaejercicioUno));

//-------------------

//Cree un programa que reciba como parámetro una palabra y verifique si
//dicha palabra es palíndromo, es decir, la palabra se lee igual de izquierda a
//derecha o de derecha a izquierda, o no. Para la resolución de dicho problema
//debe utilizar ciclo for . (Valor: 5pts)

//-------------------

//Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que
//cuente e imprima la cantidad de ceros totales en dicha matriz. Debe utilizar
//ciclos for (Valor: 10pts)

let matriz = [ [1,0,0], [0,1,1], [0,1,0] ];
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        if (matriz[i][j] === 0) {
            console.log(matriz[i][j]);
        }
    }
}

//-------------------

//Cree un programa que reciba un array de números, verifique cuáles números
//están repetidos y retorne un array con dichos números (los que estan
//duplicados), si no hay números repetidos en el array debe retornar el
//siguiente mensaje: “No se encontraron números repetidos en la lista de
//números recibida”. Debe usar un ciclo for. (Valor: 10pts)

let numeros = [1, 2, 2, 3, 4, 4, 5];
let repetidos = [""];

for(let i = 0; i < 7; i++) {
    let outro = numeros[i];
    if (outro === numeros[i]) {
        repetidos = numeros.push(outro);
        console.log(repetidos);
    }
}
*/
/*
    este codigo lo saque de una pagina ,trate de intentar replicarlo entendiendo lo que hizo ,pero la verdad los demas no se me ocurren como hacerlo con recursividad ,en mi branch que termina -entire ire subiendo todo por aparte
*/
function invertirArreglo(arreglo, indice, cadena) {
    return indice == 0 ? cadena : invertirArreglo(arreglo, --indice, (cadena += " " + arreglo[indice]))
}

let palabra = ["f","r","e","e","C","o","d","e","C","a","m","p"];

let result = invertirArreglo(palabra, palabra.length, '');
console.log("1" , result);