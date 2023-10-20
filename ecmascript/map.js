//foreach - void
//map - novo array modificado
//filter - novo array modificado
//reduce - valor unificado do array




//MAP
// const dobro = numeros.map( (n) => {
//     return n * 2
// } );

// console.log(numeros);
// console.log(dobro);


// FILTER
// Retorna um novo array apenas com elementos que atenderam a uma condição

// const numeros = [1, 2, 5, 10, 300];

// const maior10 = numeros.filter((e) => {
//     return e > 10;
// });

// console.log(maior10);


// const comentarios = [
//     {comentario: "bla bla bla", exibe: true},
//     {comentario: "Evento foi ruim", exibe: false},
//     {comentario: "Evento legal", exibe: true},
// ];

// const comentariosOk = comentarios.filter((c) => {
//     return c.exibe == true;
//     //return c.exibe;
// })

// comentariosOk.forEach((e) => {
//     console.log(e.comentario);
// });


//REDUCE
const numeros = [1, 2, 5, 10, 300];

const soma = numeros.reduce( (vlInicial, numero) => {
    return vlInicial + numero
} , 20);

console.log(soma);