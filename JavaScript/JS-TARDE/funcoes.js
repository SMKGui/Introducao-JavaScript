function calcular(){
    event.preventDefault();
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let res; //= n1 + n2;
    let op = document.getElementById("operacao").value;
    //alert(`Resultado: ${res}`)

    if (isNaN(n1) || isNaN(n2)) {
        alert("Preencha todos os campos")
        return;
    }

    if (op == '+') {
        res = somar(n1, n2).toFixed(2);            
    } 
    
    else if (op == '-'){
        res = subtrair(n1, n2).toFixed(2);           
    }

    else if (op == '*'){
        res = multiplicar(n1, n2).toFixed(2);            
    }

    else if (op == '/'){
        res = dividir(n1, n2).toFixed(2);            
    }

    else {
        res = "Operação inválida!"            
    }

    document.getElementById('resultado').innerText = res;

    //criar a validacao para todas as opcoes, inclusive operacao invalida

}//fim da funcao calcular

function somar(x, y) {
    return x + y;
}
function subtrair(x, y) {
    return x - y;
}
function multiplicar(x, y) {
    return x * y;
}
function dividir(x, y) {
    if (y == 0) {
        return "Não dividirás por 0"
    }
    return x / y;
}

//criar as 4 operacoes