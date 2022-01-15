const imagem = document.querySelector('img');
const botao = document.querySelector('#botao');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}


pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio()
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
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
        // quando clica, gera um numero aleatório que muda o nome la no html referenciando o personagem
    }); 
        // fetch é uma função que faz uma chamada, um endereço tipo "fetch liga p API do rick e faça algo"
        // `` dois acentos é onde coloca o endereço da API rick

}

botao.onclick = pegarPersonagem;