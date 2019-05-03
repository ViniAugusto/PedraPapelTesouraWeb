let btn = document.querySelector('.btn');
let txtEscolhas = document.querySelector('#escolhas');
let txtResultado = document.querySelector('#resultado');

let resultados = {
    venceu: ['Parabéns pela Vitória!', 'Você venceu parabéns', 'Você saiu vencedor!'],
    empate: ['Deu empate!', 'Empate. Jogue Novamente!'],
    perdeu: ['Você foi derrotado..', 'Você Perdeu. tente novamente']
}

optionPC = ['PEDRA', 'PAPEL', 'TESOURA'];

jogar = () => {
    let escolha = document.querySelector('input[name="pick"]:checked').value;
    
    escolhaPC = optionPC[Math.floor(Math.random() * 3)];
    txtEscolhas.innerHTML = `Você escolheu ${escolha} e máquina escolheu ${escolhaPC}`;

    if(escolha == escolhaPC){
        
        txtResultado.innerHTML = resultados.empate[Math.floor(Math.random() * 2)];

    }else if( (escolhaPC == optionPC[0] && escolha == 'TESOURA') || (escolhaPC == optionPC[1] && escolha == 'PEDRA') || (escolhaPC == optionPC[2] && escolha == 'PAPEL')){

        txtResultado.innerHTML = resultados.perdeu[Math.floor(Math.random() * 2)];

    }else{
        txtResultado.innerHTML = resultados.venceu[Math.floor(Math.random() * 3)];
    }
    btn.innerHTML = 'Jogue Novamente';
    

}

btn.onclick = jogar;