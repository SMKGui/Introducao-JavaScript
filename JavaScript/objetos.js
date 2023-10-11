let guilherme = {
    nome : "Guilherme",
    idade : 23,
    altura : 1.80
};

guilherme.peso = 89;

let carlos = new Object();

carlos.nome = "Carlos";
carlos.idade = 36;
carlos.sobrenome = "Roque";

let pessoas = [];
//let pessoas2 = new Array();

pessoas.push(carlos);
pessoas.push(guilherme);

console.log(pessoas);
//exibir os nomes das pessoas utilizando o foreach

pessoas.forEach((v, i) => {
    console.log(`Nome${i + 1}: ${v.nome}`);
});