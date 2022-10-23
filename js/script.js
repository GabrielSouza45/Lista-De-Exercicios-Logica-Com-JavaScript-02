// ------- Exercicio 1 ----------

// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa 
// pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 
document.getElementById("resultado").innerHTML = ("");

function diasVividos() {


    let diaTotal = 0;

    let anos = parseInt(prompt("Digite o ano em que nasceu:"));
    let meses = parseInt(prompt("Digite o número do mês em que nasceu:"));
    let dias = parseInt(prompt("Digite o dia em que nasceu:"));

    let dataAtual = new Date();

    let anoAtual = dataAtual.getFullYear();
    let mesAtual = dataAtual.getMonth();
    let diaAtual = dataAtual.getDate();

    while (anos < anoAtual || meses < mesAtual || dias < diaAtual) {
        diaTotal++;
        dias++;
        if (dias == 30) {
            dias = 1;
            meses++;
            if (meses == 12) {
                meses = 1;
                anos++;
            }
        }
    }

    document.getElementById("resultado").innerHTML = (diaTotal + " dias vividos.");

}

function primeiroExerc() {
    alert("Este é o primeiro exercício.");
}







// ------- Exercicio 2 ----------

// Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. 
// Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.  

function segundo() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'primeiro()');
    document.getElementById("proximo").setAttribute('onclick', 'terceiro()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 2 - Percentual de Votos";
    document.getElementById("texto-exercicio").innerHTML = "Lê votos nulos, brancos e válidos e escreve o percentual de cada eleitor";

    document.getElementById("button").setAttribute('onclick', 'votos()');
}

function primeiro() {
    location.reload(true);
}

function votos() {
    let eleitores = parseInt(prompt("Digite o total de eleitores:"));
    let brancos = parseInt(prompt("Digite o total de votos em branco:"));
    let nulos = parseInt(prompt("Digite o total de votos nulos:"));
    let validos = parseInt(prompt("Digite o total de votos válidos:"));
    let verificacao = brancos + nulos + validos;

    if (verificacao === eleitores) {
        let porcBrancos = brancos * 100 / eleitores;
        let porcNulos = nulos * 100 / eleitores;
        let porcValidos = validos * 100 / eleitores;

        document.getElementById("resultado").innerHTML = (`Total de Eleitores: ${eleitores}
                                                            Porcentagem de Válidos: ${porcValidos}% total: ${validos} votos 
                                                            Porcentagem em Branco: ${porcBrancos}% total: ${brancos} votos
                                                            Porcentagem de Nulos: ${porcNulos}% total: ${nulos} votos`);
    } else if (verificacao > eleitores) {
        alert("Erro: Número de votos maior que número de eleitores.");
    } else {
        alert("Erro: Número de eleitores maior que número de votos.");
    }

}






// ------- Exercicio 3 ----------

// Escreva um algoritmo para ler o salário mensal atual de um funcionário
// e o percentual de reajuste. Calcular e escrever o valor do novo salário.

function terceiro() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'segundo()');
    document.getElementById("proximo").setAttribute('onclick', 'quarto()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 3 - Reajuste Salarial";
    document.getElementById("texto-exercicio").innerHTML = "Lê o salário atual e o reajuste, e exibe o novo salário.";

    document.getElementById("button").setAttribute('onclick', 'salario()');
}

let salarioAtual, reajuste, novoSalario = 0;

function salario() {
    salarioAtual = parseInt(prompt("Digite o salário mensal atual:"));
    reajuste = parseInt(prompt("Digite o percentual de reajuste:"));

    novoSalario = salarioAtual + (salarioAtual * reajuste / 100);

    document.getElementById("resultado").innerHTML = (`O novo salário será de: R$${novoSalario.toFixed(2)}`);
}






// ------- Exercicio 4 ----------

// O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor 
// e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% 
// e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever
// o custo final ao consumidor. 

function quarto() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'terceiro()');
    document.getElementById("proximo").setAttribute('onclick', 'quinto()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 4 - Custo de um carro novo";
    document.getElementById("texto-exercicio").innerHTML = "Lê o custo de fábrica e exibe o valor final ao consumidor.";

    document.getElementById("button").setAttribute('onclick', 'carro()');
}

let valorFabrica, valorFinal = 0;
const porcDistribuidor = 28;
const impostos = 45;

function carro() {

    valorFabrica = parseFloat(prompt("Digite o valor de fábrica do veículo:"));

    valorFinal = valorFabrica + (valorFabrica * porcDistribuidor / 100) + (valorFabrica * impostos / 100);

    document.getElementById("resultado").innerHTML = (`O valor final do carro será de: R$${valorFinal.toFixed(2)}`);


}







// ------- Exercicio 5 ----------

// Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. 
// A fórmula de conversão é F = (C/5)*9+32, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius. 

function quinto() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'quarto()');
    document.getElementById("proximo").setAttribute('onclick', 'sexto()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 5 - Conversor de temperatura";
    document.getElementById("texto-exercicio").innerHTML = "Lê a temperatura em graus Celsius e exibe a mesma em graus Fahrenheit.";

    document.getElementById("button").setAttribute('onclick', 'celsius()');
}

let grausCelsius, grausFahrenheit = 0;

function celsius() {

    grausCelsius = parseFloat(prompt("Digite a quantidade de graus Celsius:"))

    grausFahrenheit = (grausCelsius / 5) * 9 + 32;

    document.getElementById("resultado").innerHTML = (`Graus Celsius: ${grausCelsius}°C 
                                                        Graus Fahrenheit: ${grausFahrenheit}°F`);

}






// ------- Exercicio 6 ----------

// Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. 
// A fórmula de conversão é C=(F-32) *(5/9), sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

function sexto() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'quinto()');
    document.getElementById("proximo").setAttribute('onclick', 'setimo()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 6 - Conversor de temperatura";
    document.getElementById("texto-exercicio").innerHTML = "Lê a temperatura em graus Fahrenheit e exibe a mesma em graus Celsius.";

    document.getElementById("button").setAttribute('onclick', 'fahrenheit()');
}

// Variáveis já declaradas no exercicio anterior como 0

function fahrenheit() {

    grausFahrenheit = parseFloat(prompt("Digite a quantidade de graus Fahrenheit:"))

    grausCelsius = (grausFahrenheit - 32) * (5 / 9);

    document.getElementById("resultado").innerHTML = (`Graus Fahrenheit: ${grausFahrenheit}°C 
                                                        Graus Celsius: ${grausCelsius}°F`);
}




// ------- Exercicio 7 ----------

// Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume = π*Raio2*Altura 

function setimo() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'sexto()');
    document.getElementById("proximo").setAttribute('onclick', 'oitavo()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 7 - Volume da lata de óleo";
    document.getElementById("texto-exercicio").innerHTML = "Lê o raio e a altura da lata de óleo e exibe seu volume.";

    document.getElementById("button").setAttribute('onclick', 'lataOleo()');
}

let raio, altura, volume = 0;

function lataOleo() {

    raio = parseFloat(prompt("Digite o raio da lata:"));
    altura = parseFloat(prompt("Digite a altura da lata:"));

    volume = Math.PI.toFixed(2) * Math.pow(raio, 2) * altura;

    document.getElementById("resultado").innerHTML = (`O volume da lata de óleo é: ${volume.toFixed(2)}`);

}




// ------- Exercicio 8 ----------

// Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro.
// Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. 
// Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA=TEMPO * VELOCIDADE. 
// Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS=DISTÂNCIA/12. 
// Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distância percorrida (DISTÂNCIA) 
// e a quantidade de litros (LITROS_USADOS) utilizada na viagem.  

function oitavo() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'setimo()');
    document.getElementById("proximo").setAttribute('onclick', 'nono()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 8 - Combustível gasto";
    document.getElementById("texto-exercicio").innerHTML = "Lê o tempo gasto na viagem e a velocidade média e exibe a quantidade de combustível gasto.";

    document.getElementById("button").setAttribute('onclick', 'viagem()');
}

let tempo, velocidade, distancia, litrosUsados = 0;
const consumoKM = 12;

function viagem() {

    tempo = parseFloat(prompt("Digite o tempo gasto na viagem em horas:"));
    velocidade = parseFloat(prompt("Digite a velocidade média do veículo em Km/h:"));

    distancia = tempo * velocidade;

    litrosUsados = distancia / consumoKM;

    document.getElementById("resultado").innerHTML = (`Velocidade Média: ${velocidade}Km/h
                                                        Tempo gasto na viagem: ${tempo}h
                                                        Distância percorrida: ${distancia}Km
                                                        Combustível usado: ${litrosUsados}L`);
}





// ------- Exercicio 9 ----------

// Efetuar o cálculo e a apresentação do valor de uma prestação em atraso,
//  utilizando a fórmula PRESTACAO=VALOR+((VALOR*TAXA/100) *TEMPO) 

function nono() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'oitavo()');
    document.getElementById("proximo").setAttribute('onclick', 'decimo()');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 9 - Prestação em atraso";
    document.getElementById("texto-exercicio").innerHTML = "Lê o valor inicial de um prestação e apresenta seu valor com juros de atraso.";

    document.getElementById("button").setAttribute('onclick', 'prestacao()');
}


function prestacao() {

    let valorInicial = parseFloat(prompt("Digite o valor inicial da fatura:"));
    let tempo = parseInt(prompt("Digite o total de dias de atraso da fatura:"));
    let taxa = parseFloat(prompt("Digite a taxa de atraso diária:"));

    let valorJuros = valorInicial + ((valorInicial * taxa / 100) * tempo);

    document.getElementById("resultado").innerHTML = (`Valor incial: R$ ${valorInicial.toFixed(2)}
                                                            Tempo de atraso: ${tempo} dias
                                                            Taxa diária de juros: ${taxa}%
                                                            Valor final comjuros: R$ ${valorJuros.toFixed(2)}`);
}




// ------- Exercicio 10 ----------

// Efetuar o cálculo e a apresentação do valor de uma prestação em atraso,
//  utilizando a fórmula PRESTACAO=VALOR+((VALOR*TAXA/100) *TEMPO) 

function decimo() {
    document.getElementById("resultado").innerHTML = ("");

    document.getElementById("anterior").setAttribute('onclick', 'nono()');
    document.getElementById("proximo").setAttribute('onclick', 'alert(`Este é o último exercício`)');

    document.getElementById("titulo-exercicio").innerHTML = "Exercicio 10 - Troca de valores";
    document.getElementById("texto-exercicio").innerHTML = "Lê dois valores e os troca de posição.";

    document.getElementById("button").setAttribute('onclick', 'trocar()');
}


function trocar() {

    let a = prompt("Digite o valor para A:");
    let b = prompt("Digite o valor para B:");
    let c = a;

    document.getElementById("resultado").innerHTML = (`A : ${a}
                                                            B : ${b}
                                                            Troca
                                                            A : ${a = b}
                                                            B : ${c}`);
}