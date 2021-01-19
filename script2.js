// let botao = document.querySelector(".botao")
// let nome = prompt("olá anônimo, qual o seu nome?");
// // // nome = String(nome);

// // if (isNaN(nome)) {
// //     alert("vamos continuar");
// // }
// // else {
// //     alert("nome não pode conter números, tente novamente!")
// // }


// let idade = prompt("olá " + nome + ", quantos anos tem?");

// if (idade <= 18) {
//     alert("desculpe " + nome + " , esse site não é apropriado para você");
// }
// else {
//     alert("esse site é para você, vamos continuar");

//     let signo = prompt(nome + " em que mês você nasceu ?");

//     if (signo == "janeiro") {
//         alert("olá " + nome + " seu signo é CAPRICORNIO");
//     }
//     else if (signo == "fevereiro") {
//         alert("olá " + nome + " seu signo é AQUARIO");
//     }
//     else if (signo == "março") {
//         alert("olá " + nome + " seu signo é PEIXES");
//     }
//     else if (signo == "Abril") {
//         alert("olá " + nome + " seu signo é ARIES");
//     }
//     else {
//         alert("Seu signo é uma merda");
//     }
// }

// // let senha;
// // // let num1 = 12;
// // // let num2 = 13;
// // let contador = 0;

// // // for (valor inicial da variavel; valor final da variavel; o incremento ++ -- 

// // for (contador = 0; contador < 3; contador++){
// //     senha = prompt("digite sua senha");
// // }



// // // while (contador<3){
// //     // senha = prompt("digite sua senha");
// //     // contador ++
// // // }


// // ESSE E O CODIGO QUE O FESSOR DESENVOLVEU
// // let nome;
// // let idade;
// // let salario;
// // let signo;
// // let emprestimo;
// // let contador = 0;

// // for (let contador = 0; contador>3; contador++)
// //         nome = prompt("Qual é o seu nome?");
// //         idade = prompt("Olá " + nome + ", qual é sua idade?");
// //         salario = prompt("Quanto você ganha?");
// //         signo = prompt("Qual seu signo?");
// //         emprestimo = prompt("Qual o valor do emprestimo que você deseja?");

// // if(isNaN(salario)){
// //     alert("Salario inválido, recarregue o navegador e tente novamente!");
// // }
// // else if ((idade>=21 && idade<=55) && (emprestimo<=5*salario)){
// //         alert("Emprestimo aprovado");
// //     }
// //    else if(signo == "aries" || signo == "áries" || signo == "Aries"){
// //        alert("Pelo signo, aprovo!");
// //    }
// //     else{
// //         alert("Emprestimo recusado");
// //     }

// // }

// parte final com botao
let botao = document.querySelector(".botao");
let surpresa = document.querySelector(".secreta");
let nome;
let idade;
let salario;
let signo;
let emprestimo;


function pediremprestimo (){
    nome = prompt("Qual é o seu nome?");    
    idade = prompt("Olá " + nome + ", qual é sua idade?");
    salario = prompt("Quanto você ganha?");
    // signo = prompt("Qual seu signo?");
    emprestimo = prompt("Qual o valor do emprestimo que você deseja?");

if(isNaN(salario)){
    alert("Salario inválido, recarregue o navegador e tente novamente!");
}
else if ((idade>=21 && idade<=55) && (emprestimo<=5*salario)){
    botao.style.backgroundColor="green";
    botao.innerHTML="Aprovado papai";
    surpresa.style.display = "flex";
    

    }
    else{
        botao.style.backgroundColor="red";
        botao.innerHTML="tente novamente";
    }
}

botao.onclick = pediremprestimo;








