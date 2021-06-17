var boletos = document.querySelector("#boleto");
//variavel para abrir o formulario de boleto
var formBoleto = document.querySelector("#formPgmBoleto");

var elo = document.querySelector("#elo");
var mastercard = document.querySelector("#mastercard");
var visa = document.querySelector("#visa");
var hipercard = document.querySelector("#hipercard");
//variavel para abrir o formulario de cartao
var formPgmCartao = document.querySelector("#formPgmCartao");


//repetição das mesmas variaveis, agora para o formulario dois

var boletosUm = document.querySelector("#boleto");

var eloUm = document.querySelector("#eloUm");
var mastercardUm = document.querySelector("#mastercardUm");
var visaUm = document.querySelector("#visaUm");
var hipercardUm = document.querySelector("#hipercardUm");


boletos.addEventListener("click", function() {
    formPgmCartao.className = "display";
    formPgmBoleto.className = "";
});

elo.addEventListener("click", function() {
    formPgmBoleto.className = "display";
    formPgmCartao.className = "";
});

mastercard.addEventListener("click", function() {
    formPgmBoleto.className = "display";
    formPgmCartao.className = "";
});

visa.addEventListener("click", function() {
    formPgmBoleto.className = "display";
    formPgmCartao.className = "";
});

hipercard.addEventListener("click", function() {
    formPgmBoleto.className = "display";
    formPgmCartao.className = "";
});

//repetindo açoes porque são "id's diferentes"

boletosUm.addEventListener("click", function() {
    formPgmCartao.className = "display";
    formPgmBoleto.className = "";
});

eloUm.addEventListener("click", function() {
    formPgmBoleto.className = "display";
    formPgmCartao.className = "";
});

mastercardUm.addEventListener("click", function() {
    formPgmBoleto.className = "display";
    formPgmCartao.className = "";
});

visaUm.addEventListener("click", function() {
    formPgmBoleto.className = "display";
    formPgmCartao.className = "";
});

hipercardUm.addEventListener("click", function() {
    formPgmBoleto.className = "display";
    formPgmCartao.className = "";
});

//variavel para abrir o modal de confirmação pagamento do boleto

var abrirModal = document.querySelector("#abrirModalBoleto");
var fecharModal = document.querySelector("#fecharModalUm");

var modalDisplay = document.querySelector("#modal-display");
var modalConfirmationBoleto = document.querySelector("#modalConfirmationBoleto");
var modalConfirmationCard = document.querySelector("#modalConfirmationCard");

abrirModal.addEventListener("click", function() {
    modalDisplay.className = "modalConfirmation";
    modalConfirmationCard.className = "display alertModal";
    modalConfirmationBoleto.className = "alertModal";
});

fecharModal.addEventListener("click", function() {
    modalDisplay.className = "display modalConfirmation";
    modalConfirmationCard.className = "alertModal";
    modalConfirmationBoleto.className = "display alertModal";
});