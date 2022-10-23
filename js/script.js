// ------- Exercicio 1 ----------

// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa 
// pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.  
// function diasVividos() {
//     let diaTotal = 0;

//     let anos = parseInt(prompt("Digite o ano em que nasceu:"));
//     let meses = parseInt(prompt("Digite o número do mês em que nasceu:"));
//     let dias = parseInt(prompt("Digite o dia em que nasceu:"));

//     let dataAtual = new Date();

//     let anoAtual = dataAtual.getFullYear();
//     let mesAtual = dataAtual.getMonth();
//     let diaAtual = dataAtual.getDate();

//     while (anos < anoAtual || meses < mesAtual || dias < diaAtual) {
//         diaTotal++;
//         dias++;
//         if (dias == 30) {
//             dias = 1;
//             meses++;
//             if (meses == 12) {
//                 meses = 1;
//                 anos++;
//             }
//         }
//     }

//     document.getElementById("resultado").innerHTML = (diaTotal + " dias vividos.");

// }

// function primeiroExerc() {
//     alert("Este é o primeiro exercício.");
// }





// ------- Exercicio 2 ----------

// Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. 
// Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.  

// function segundo(){
// document.getElementById("anterior").setAttribute('onclick', 'primeiro()');
// document.getElementById("proximo").setAttribute('onclick', 'terceiro()');

// document.getElementById("titulo-exercicio").innerHTML = "Exercicio 2 - Percentual de Votos";
// document.getElementById("texto-exercicio").innerHTML = "Lê votos nulos, brancos e válidos e escreve o percentual de cada eleitor";

// document.getElementById("button").setAttribute('onclick', 'votos()');
// }

// function primeiro() {
//     location.reload(true);
// }

// function votos() {
//     let eleitores = parseInt(prompt("Digite o total de eleitores:"));
//     let brancos = parseInt(prompt("Digite o total de votos em branco:"));
//     let nulos = parseInt(prompt("Digite o total de votos nulos:"));
//     let validos = parseInt(prompt("Digite o total de votos válidos:"));
//     let verificacao = brancos + nulos + validos;

//     if (verificacao === eleitores) {
//         let porcBrancos = brancos * 100 / eleitores;
//         let porcNulos = nulos * 100 / eleitores;
//         let porcValidos = validos * 100 / eleitores;

//         document.getElementById("resultado").innerHTML = (`Total de Eleitores: ${eleitores}
//                                                             Porcentagem de Válidos: ${porcValidos}% total: ${validos} votos 
//                                                             Porcentagem em Branco: ${porcBrancos}% total: ${brancos} votos
//                                                             Porcentagem de Nulos: ${porcNulos}% total: ${nulos} votos`);
//     } else if (verificacao > eleitores) {
//         alert("Erro: Número de votos maior que número de eleitores.");
//     } else {
//         alert("Erro: Número de eleitores maior que número de votos.");
//     }

// }


// ------- Exercicio 3 ----------

// Escreva um algoritmo para ler o salário mensal atual de um funcionário
// e o percentual de reajuste. Calcular e escrever o valor do novo salário.

// function segundo(){
// document.getElementById("anterior").setAttribute('onclick', 'segundo()');
// document.getElementById("proximo").setAttribute('onclick', 'quarto()');

// document.getElementById("titulo-exercicio").innerHTML = "Exercicio 3 - Reajuste Salarial";
// document.getElementById("texto-exercicio").innerHTML = "Lê o salário atual";

// document.getElementById("button").setAttribute('onclick', 'votos()');
// // }

// function primeiro() {
//     location.reload(true);
// }