// colocar o nome em ordem alfabetica
let nome1 = "Carlos";
let nome2 = "Ana";
let nome3 = "Bruno";

// Vamos comparar os nomes dois a dois para descobrir a ordem alfabética
let primeiro, segundo, terceiro;

if (nome1 < nome2 && nome1 < nome3) {
    primeiro = nome1;
    if (nome2 < nome3) {
        segundo = nome2;
        terceiro = nome3;
    } else {
        segundo = nome3;
        terceiro = nome2;
    }
} else if (nome2 < nome1 && nome2 < nome3) {
    primeiro = nome2;
    if (nome1 < nome3) {
        segundo = nome1;
        terceiro = nome3;
    } else {
        segundo = nome3;
        terceiro = nome1;
    }
} else {
    primeiro = nome3;
    if (nome1 < nome2) {
        segundo = nome1;
        terceiro = nome2;
    } else {
        segundo = nome2;
        terceiro = nome1;
    }
}

console.log(`Ordem alfabética: ${primeiro}, ${segundo}, ${terceiro}`);
____________________________________________________________________________________________________________________
// nome.length (mostra quantos caracteres tem o varialvel nome)
// nome.includes("string") verifica se uma string inclui determinada letra ou termo 
//nome.trim() (corta os espaços vazio do começo e final)
//nome.toUpperCase() (deixa todas as letras maiusculas)
//nome.toLowerCase() (deixa todas as letras minusculas)
//nome.replace (busca, substituto) (substitui a primeira ocorrencia)
//nome.replaceAll (busca, substituto) (substitui todas as ocorrencias)
//numero1.toFixed(2) (define que o numero vai ter 2 casas decimais)
//isNan(valor) ( retorna se o numero é um valor ou NaN)
//Math.random() - irá retornar um número decimal aleatório, maior que zero e menor que um.
//Math.floor() - arredonda o número para baixo
// Math.ceil() - arredonda o número para cima
// Math.round() - arredonda para o valor inteiro mais próximo
____________________________________________________________________________________________________________________
// exercicio: Crie uma função que receba dois números e retorne o maior deles. Se forem iguais, retorne a mensagem ‘São iguais’
function compararNumeros(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return 'São iguais';
  }
}

// Exemplos de uso:
console.log(compararNumeros(10, 5));  // Retorna: 10
console.log(compararNumeros(3, 8));   // Retorna: 8
console.log(compararNumeros(7, 7));   // Retorna: 'São iguais'
____________________________________________________________________________________________________________________
// exercicio: Faça uma função que receba um texto, limpe os espaços em branco do início e fim e retorna este texto maiúsculo
function limparEFormatar(texto) {
    const textoLimpo = texto.trim()
    const textoMaiusculo = textoLimpo.toUpperCase()
    return textoMaiusculo
}

console.log(limparEFormatar(" olá mundo ")) // "OLÁ MUNDO"
console.log(limparEFormatar(" fiap "))     // "FIAP"
____________________________________________________________________________________________________________________
// Faça uma função que receba
// um texto, verifique se possui a
// letra a.
// Se possuir, substitua todas as
// letras a por o. Senão devolva o
// texto sem alteração.
// Lembre-se: includes é CASE
// SENSITIVE.

function substituirLetra(texto) {
    const textoMinusculo = texto.toLowerCase()

    if (textoMinusculo.includes("a")) {
        const textoSubstituido = textoMinusculo.replaceAll("a", "o")
        return textoSubstituido
    }

    return texto
}

console.log(substituirLetra("Banana"))   // "bonono"
console.log(substituirLetra("ABACATE"))  // "obocote"
console.log(substituirLetra("Pedro"))    // "Pedro
____________________________________________________________________________________________________________________
// Faça uma função que receba
// um número do usuário de 1 a 10,
// gere um número aleatório e
// compare os dois, retornando se
// o usuário acertou ou não o
// palpite.
// Valide se o que o usuário
// digitou é um número mesmo.

function verificarPalpite(palpite) {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1

    if (isNaN(palpite)) {
        return "Digite um número válido!"
    }

    if (palpite === numeroAleatorio) {
        return "Acertou! O número era " + numeroAleatorio
    }

    return "Errou! O número era " + numeroAleatorio + " e você chutou " + palpite
}

const tentativa = Number(prompt("Chute um número de 1 a 10:"))
alert(verificarPalpite(tentativa))
____________________________________________________________________________________________________________________
//contando de 10 a 1:
for (let i = 10; i >= 1; i--) {
 console.log(i)
 }
 ____________________________________________________________________________________________________________________
 //pulando de 2 em 2 : 
for (let i = 0; i <= 20; i += 2) {
 console.log(i) 
}
____________________________________________________________________________________________________________________
const numero = Number(prompt("Qual tabuada você quer ver?"))
    for (let i = 1; i <= 10; i++) {
 console.log(numero + " x " + i + " = " + (numero * i))
 }
 ____________________________________________________________________________________________________________________
 //contando de 1 a 5 com WHILE: 
let i = 1 
while (i <= 5) {
 console.log(i)
 i++
 }
 ____________________________________________________________________________________________________________________
 //JOGO DE ADIVINHAR NUMERO: 
const numeroSecreto = Math.floor(Math.random() * 10) + 1
 let tentativa = 0
 let acertou = false 
while (!acertou) {
 const palpite = Number(prompt("Chute um número de 1 a 10:"))
 tentativa++ 
if (palpite === numeroSecreto) {
 acertou = true 
alert("Acertou em " + tentativa + " tentativas!")
 }
 else if (palpite < numeroSecreto) {
 alert("Muito baixo! Tente novamente.")
 } 
else { alert("Muito alto! Tente novamente.") 
} }
//validação de entrada:
let idade = Number(prompt("Qual sua idade?")) 
while (isNaN(idade) || idade <= 0) {
 alert("Valor inválido! Digite um número positivo.")
 idade = Number(prompt("Qual sua idade?"))
 }
 alert("Sua idade é: " + idade) 
 ____________________________________________________________________________________________________________________
 //exercício: Escreva um programa que solicite ao usuário um número e verifica todos os números pelos quais ele é divisível
 const número = Number(prompt("Digite um número:"))
 
if (isNaN(numero) || numero <= 0) {
    alert("Digite um número válido maior que zero!")
} else {
    let divisores = ""
 
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores = divisores + `${i}\n`
        }
    }
 
    alert(`Divisores de ${numero}:\n\n${divisores}`)
}
____________________________________________________________________________________________________________________
// do while 
// Resumo:

// Ele executa um bloco de código pelo menos uma vez, antes de verificar a condição.
// Depois da primeira execução, o código continua repetindo enquanto a condição for verdadeira.
//estrutura
do {
  // código a ser executado
} while (condição);

____________________________________________________________________________________________________________________

let i = 5;

do {
  console.log(i);
  i++;
} while (i < 5);
 //Nesse caso, o número 5 será exibido mesmo que a condição (i < 5) seja falsa, porque a verificação só acontece depois.
____________________________________________________________________________________________________________________
// quando usar: 
//Quando a ação precisa acontecer antes da verificação
// Exemplo: mostrar um menu antes de verificar a escolha do usuário.



// Quando o usuário precisa interagir ao menos uma vez
// Exemplo: pedir um valor até que ele seja válido.



// Quando a condição depende de algo que só acontece dentro do bloco
// A condição só pode ser avaliada depois da primeira execução.