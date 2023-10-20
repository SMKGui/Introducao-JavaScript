const evento = {
    data: new Date(),
    descricao: "Aulão JavaScript",
    titulo: "Aula",
    presenca: true,
    comentario: "Legal"
}

const {data, descricao, titulo, ...resto} = evento;

console.log(data);
console.log(descricao);
console.log(titulo);
console.log(resto);

// console.log(`
//     Data: ${data}
//     Descrição: ${descricao}
//     Título: ${titulo}
//     Presença: ${presenca ? "Sim" : "Não"}
//     Comentário: ${comentario}
// `);