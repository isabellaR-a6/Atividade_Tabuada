function gerarTabuada() {
    const paineizinho = document.getElementById("paineizinho");
    let conteudinho = ""; 

    
    for (let tabuazinha = 1; tabuazinha <= 100; tabuazinha++) {
        conteudinho += `<div class="tabuada-coluna">`;
        
        
        for (let multiplica = 1; multiplica <= 10; multiplica++) {
            let resultado = tabuazinha * multiplica;
            conteudinho += `<p>${tabuazinha} x ${multiplica} = <strong>${resultado}</strong></p>`;
        }
        
        conteudinho += `</div>`;
    }
    paineizinho.innerHTML = conteudinho;
    
}


