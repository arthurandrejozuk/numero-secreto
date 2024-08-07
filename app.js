let numeroAleatorio = parseInt(Math.random() * 100 + 1);
let tentativas = 5;
let numeroDeAcertos = 0;
let numeroAleatorioUsados = [];
selector("h1", "Jogo Secreto");
selector(".texto__paragrafo", "Chute um número entre 1 ao 100");
selector(".texto__tentativas", `Números de tentativas ${tentativas}`);

function selector(tag, text) {
  document.querySelector(tag).innerHTML = text;
  responsiveVoice(text, "Brazilian Portuguese Female", {rate:1.2});
}

function escolheNumeroAleatorio(chute) {
  tentativas = 5;
  chute = document.querySelector("input").value = '';
  numeroAleatorio = parseInt(Math.random() * 100 + 1);
  if(numeroAleatorioUsados.includes(numeroAleatorio)){
    numeroAleatorio = parseInt(Math.random() * 100 + 1);
  }
  selector(".texto__tentativas", `Números de tentativas ${tentativas}`);
  console.log(numeroAleatorio);
}

function reiniciarJogo(){
	tentativas = 5;
	numeroDeAcertos = 0;
	document.querySelector("input").value = '';
  selector("#pontuacao", `Pontuação: ${numeroDeAcertos}`);
	selector(".texto__tentativas", `Números de tentativas ${tentativas}`);
	numeroAleatorio = parseInt(Math.random() * 100 + 1);
}

function verificarChute(chute) {
  chute = document.querySelector("input").value;
  if (chute == numeroAleatorio) {
    selector("h1", "Acertou!");
    escolheNumeroAleatorio(chute);
    console.log(numeroAleatorioUsados.length);
    numeroAleatorioUsados.push(numeroAleatorio);
    numeroDeAcertos++;
    selector("#pontuacao", `Pontuação: ${String(numeroDeAcertos)}`);
    selector("#dica", "");
  } else if (chute < numeroAleatorio) {
    console.log(numeroAleatorio);
    selector("#dica", "Número é maior");
    tentativas--;
    selector(".texto__tentativas", `Números de tentativas ${tentativas}`);
  } else if (chute > numeroAleatorio) {
    selector("#dica", "Número é menor");
    console.log(numeroAleatorio);
    tentativas--;
    selector(".texto__tentativas", `Números de tentativas ${tentativas}`);
  } 
  tentativas ? 0 : reiniciarJogo();
}
