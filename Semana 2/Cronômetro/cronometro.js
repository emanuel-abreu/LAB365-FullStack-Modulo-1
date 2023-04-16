function iniciarCronometro() {
  var tempoLimite = 10; // tempo limite em segundos
  var tempoRestante = tempoLimite;

  // atualiza o tempo restante a cada segundo
  var intervalo = setInterval(function () {
    tempoRestante--;
    document.getElementById("tempo").innerHTML = tempoRestante;

    if (tempoRestante <= 0) {
      // tempo acabou, para o cronômetro e exibe mensagem
      clearInterval(intervalo);
      alert("Seu tempo acabou!! Tente novamente!!");
    }
  }, 1000);
} // intervalo de 1 segundo
