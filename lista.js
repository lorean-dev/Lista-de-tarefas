var entradaDados = document.querySelector("input");
var enviar = document.querySelector("button");
var lista = document.querySelector("ul");


//adicionando botao de conclusão 
function BotaoConclusao (paremetro){
 const comcluir = document.createElement("button");
 comcluir.textContent = "comcluido";
 paremetro.appendChild(comcluir);
 comcluir.classList.add("botao");
 
 comcluir.onclick = function(){
 paremetro.style.color = "green";
 };
 
};


//adicionando botao de remover
function removendo(valor){
const remov = document.createElement("button");
remov.textContent= "remover";
valor.appendChild(remov);
remov.classList.add("botao__modificador");
remov.onclick =function(){
 valor.remove();
 remov.remove();
};

};

//adicionar quebra de linha.
function quebralinha(nome) {
 var br = document.createElement("br");
 nome.appendChild(br);
};


//adicionando valores a lista
function criarList(){
 const Tagli =document.createElement("li");
 Tagli.textContent = entradaDados.value;
 lista.appendChild(Tagli);
 quebralinha(Tagli);
 
 entradaDados.value ="";
 removendo(Tagli);
 BotaoConclusao(Tagli);
 
};

//comfirmando valores
enviar.onclick = function(){
 
if (entradaDados.value){
  criarList();
  
 };
 
};
