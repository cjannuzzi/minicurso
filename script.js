const imagem = document.querySelector('img');
const botao = document.querySelector('#botao');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');


pegarPersonagem = () => {
    return fetch(`https://rickandmortyapi.com/api/character/2`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt=data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML= data.status;
    }); 
        // fetch é uma função que faz uma chamada, um endereço tipo "fetch liga p API do rick e faça algo"
        // `` dois acentos é onde coloca o endereço da API rick

}

botao.onclick = pegarPersonagem;