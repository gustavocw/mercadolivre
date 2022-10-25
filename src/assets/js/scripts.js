
const mudarCep = (endereco) => {
    document.getElementById('spanCep').innerHTML = endereco.localidade +": "+ endereco.cep;
    const sumir = document.getElementById('suma');
    sumir.innerHTML = ('Enviar para:')
}



const pesquisarCep = async() => {
    const cep = document.getElementById('cep-modal').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    mudarCep(endereco)
    
}
document.getElementById('btn-cep').addEventListener("click",pesquisarCep);


//QUEBRA DE LINHA

function mudarmsg() {
    const emailValue = document.getElementById ('emailIp').value;
    const senhaValue = document.getElementById ('senhaIp').value;

    if (emailValue === '') {
        const valor = document.getElementById('emailIp');
        valor.setAttribute('class', 'form-control erros')
    } else{
        const valor = document.getElementById('emailIp');
        valor.setAttribute('class', 'form-control noerror')
    }

    if (senhaValue ==='') {
        const senhaValor = document.getElementById('senhaIp');
        senhaValor.setAttribute('class', 'form-control password erros')
    } else {
    const senhaValor = document.getElementById('senhaIp');
    senhaValor.setAttribute('class', 'form-control password noerror')
    
    }
}






document.getElementById('acc-btn').addEventListener("click",'mudarmsg()');
