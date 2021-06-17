//variavel para abrir os formularios de pagamentos
var formBoleto = document.querySelector("#formPgmBoleto");
var formPgmCartao = document.querySelector("#formPgmCartao");

//variavel btn para opcoes de pagamentos
var btnCartao = document.querySelector("#btnPgmCartao");
var btnBoleto = document.querySelector("#btnPgmBoleto");

//funcao para abrir os formulario a cada click nos botoes

btnCartao.addEventListener("click", function() {
    formPgmCartao.className = "";
    formBoleto.className = "display";
});

btnBoleto.addEventListener("click", function() {
    formPgmCartao.className = "display";
    formBoleto.className = "";
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