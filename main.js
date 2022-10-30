//1. Cree un programa que reciba como parámetro un array de números, y
//verifique la lista de manera que retorne el número mayor. (Valor: 5pts)

let array1 = (1,2,3,4);
console.log("1:" + Math.max(array1));
//2. Cree un programa que reciba como parámetro una palabra y verifique si
//dicha palabra es palíndromo, es decir, la palabra se lee igual de izquierda a
//derecha o de derecha a izquierda, o no. Para la resolución de dicho problema
//debe utilizar ciclo for . (Valor: 5pts)
/*let array2 = "osoososo";
let first = "";
for (let i = 0; i < array2.length; i++) {
    first = first.unshift(i);
}
console.log(first ,array2);*/

//3. Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que
//cuente e imprima la cantidad de ceros totales en dicha matriz. Debe utilizar
//ciclos for (Valor: 10pts)
console.log("3:");
let matriz = [ [1,0,0], [0,1,1], [0,1,0] ];
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        if (matriz[i][j] === 0) {
            console.log(matriz[i][j]);
        }
    }
}


/* 4. Cree un programa que reciba un array de números, verifique cuáles números
están repetidos y retorne un array con dichos números (los que estan
duplicados), si no hay números repetidos en el array debe retornar el
siguiente mensaje: “No se encontraron números repetidos en la lista de
números recibida”. Debe usar un ciclo for. (Valor: 10pts) */
console.log("4:");

const arr = [1, 3, 1, 2, 5, 2, 3, 4, 1, 2, 3, 4, 3]
const resultado = {}
arr.forEach(el => (resultado[el] = resultado[el] + 1 || 1))
console.log(resultado);

/* Haga un programa que reciba un parámetro numérico x, el cual debe ser
mayor o igual a 5, y que imprima un patrón, que simule un triángulo de
asteriscos, como el siguiente. Debe utilizar ciclos for para la solución del
problema. (Valor: 15pts) */
console.log("5:");
let x = [""];
let count;
for (let i = 0; i < x.length; i++) {
    x.push("*"); 
    console.log(x + "<br>");
    for (let j = 8; j < x.length; j++) {
        count.push("*");
        console.log(count)
    }
}