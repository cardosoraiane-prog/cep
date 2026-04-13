function buscarCep() {
    const cep=document.getElementById ('cep').ariaValueMax.replace(/\D/g,'');
    const resultado=document.getElementById('resultado');
if (!cep || cep.length !== 8 ){
    resultado.innerHTML="<ps style=color:red>cep invalido</p>"  
    return
}
fetch(`https://viacep.com.br/ws/${cep}/json`)
.then(response=>response.json())
.then(data=>{
    if(data.error){
        resultado.innerHTML="<ps style=color:red>cep  não encontrado</p>" 
    } else{
        resultado.innerHTML=`
        <p>lougradouro:${data.loigaradouro}</p>
        <p>bairro:${data.bairro}</p>
        <p>cidade:${data.localidade}</p>
        <p>estado:${data.uf}</p>
        `; 
    }
    
})

.catch(error=>{
    resultado.innerHTML="<ps style=color:red>cep  não encontrado</p>" 
    console.error(error);
})
  


