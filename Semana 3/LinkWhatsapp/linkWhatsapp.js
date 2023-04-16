let numeroDeTefefone = window.prompt("Digite o seu número do Whatsapp abaixo:");
let mensagemEnviada = window.prompt("Digite uma mensagem para enviar:");

let link = `api.whatsapp.com/send?phone=${numeroDeTefefone}&text=${mensagemEnviada}`;

while (link.includes(" ")) {
  link = link.replace(" ", `%20`);
}
console.log(link);
