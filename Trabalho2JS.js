const botaoEx1 = document.getElementById("Ex1");
botaoEx1.addEventListener("click",Ex1);

const botaoEx2 = document.getElementById("Ex2");
botaoEx2.addEventListener("click",Ex2);

const botaoEx3 = document.getElementById("Ex3");
botaoEx3.addEventListener("click",Ex3);

const botaoEx4 = document.getElementById("Ex4");
botaoEx4.addEventListener("click",Ex4);

const botaoEx5 = document.getElementById("Ex5");
botaoEx5.addEventListener("click",Ex5);

const botaoEx6 = document.getElementById("Ex6");
botaoEx6.addEventListener("click",Ex6);

function Ex1(){
let numero = parseFloat(prompt("Digite um número para saber se ele é par ou ímpar:"));
let resultado = numero / 2;
if (numero == 0){
    alert("número 0")
} else {
    if(resultado == 0){
        alert(" O número é par ")
    } else {
        alert(" O número é ímpar ")
    }
}
}

function Ex2(){
let numero1 = parseFloat(prompt("Digite um número: "));
let numero2 = parseFloat(prompt("Digite outro número: "));
if (numero1 == numero2){
    alert("Os números são iguais")
} else {
    if(numero1 > numero2){
        alert("O número " + numero1 + " é maior")
    } else (numero1 < numero1);{
        alert("O número " + numero2 + " é maior")
    }
}
}

function Ex3(){
let idade = parseFloat(prompt("Qual sua idade?:"));

if (idade >= 65) {
    alert("Fila prioritária");
} else {
    let gestante = prompt("É gestante? (s ou n)").toLowerCase();
    
    if (gestante === "s") {
        alert("Fila prioritária");
    } else {
        let deficiencia = prompt("Possui deficiência? (s ou n)").toLowerCase();
        
        if (deficiencia === "s") {
            alert("Fila prioritária");
        } else {
            alert("Fila comum");
        }
    }
}
}

function Ex4(){ 
let idade = parseFloat(prompt("Qual sua idade?"));
if(idade < 16 ){
    alert("Barado de entrar!")
} else if((idade >= 16)&(idade < 18)){
    alert("Só entra com o responsável")
} else {
    alert("Seja bem vindo!")
}
}

function Ex5(){
    const login = "brian.portella@aluno.senai.br"
    const senha = "123456"

    let loginDigitado = prompt("Login")
    let senhaDigitado = prompt("senha")
    if((login == loginDigitado)&(senha == senhaDigitado)){
        alert("Seja bem vindo(a)")
    } else { if((login != loginDigitado)&(senha != senhaDigitado)){
        alert("Login e senha incorretos")
    } else if(login != loginDigitado){
        alert("login incorreto")
    } else {
        alert("Senha incorreta")
    }
    }
}
   


    

