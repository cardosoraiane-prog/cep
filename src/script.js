function buscarCep() {
    const cep=document.getElementById ('cep');
    const resultado=document.getElementById('resultado');
if (!cep){
    resultado.innerHTML="<ps style=color:red>cep invalido</p>"  
}
fetch(`https://viacep.com.br/ws/${cep}/json`)
.then(response=>response.json())
}