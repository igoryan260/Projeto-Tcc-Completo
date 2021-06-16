//variaveis dos modais 
var telefone = document.querySelector("#telefone");
var janelaContatos = document.querySelector("#contatosProveweb");
var whatsapp = document.querySelector("#whatsapp");

//variaveis para captar clicks nos botoes
var abrirModalWhatsapp = document.querySelector("#button-whatsapp");
var abrirModalTelefone = document.querySelector("#button-tel");

//variavel para fechar o modal
var btnFecharModal = document.querySelector("#btn-fecharModal");

//funcoes para abrir ou fechar o modal das opções
abrirModalTelefone.addEventListener("click", function() {
    janelaContatos.className = "";
    telefone.className = "";
    whatsapp.className = "display-none";
});

abrirModalWhatsapp.addEventListener("click", function() {
    janelaContatos.className = "";
    whatsapp.className = "";
    telefone.className = "display-none";
});

btnFecharModal.addEventListener("click", function() {
    janelaContatos.className = "display-none";
})