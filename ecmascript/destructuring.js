// const camisaLacoste = {
//     descricao: "Camisa Lacoste",
//     preco: 399.98,
//     marca: "Lacoste",
//     tamanho: "G",
//     cor: "Azul",
//     promo: false
// }

// const descricao = camisaLacoste.descricao;
// const preco = camisaLacoste.preco;

// const {descricao, preco, promo} = camisaLacoste;

// console.log(`
//     Produto: ${descricao}
//     Preço: ${preco}
//     Promoção: ${promo ? "sim" : "Não"}
// `);

/*crie um objeto evento com as propriedades
    * DATA EVENTO
    * DESCRIÇÃO DO EVENTO
    * TÍTULO
    * PRESENÇA
    * COMENTÁRIO
    
    Crie uma destructuring das propriedades do objeto evento e exiba no console.

    OBS: para a presença deve-se exibir sim ou não
*/


const evento = {
    data: new Date(),
    descricao: "Aulão JavaScript",
    titulo: "Aula",
    presenca: true,
    comentario: "Legal"
}

const {data, descricao, titulo, presenca, comentario} = evento;

console.log(`
    Data: ${data}
    Descrição: ${descricao}
    Título: ${titulo}
    Presença: ${presenca ? "Sim" : "Não"}
    Comentário: ${comentario}
`);