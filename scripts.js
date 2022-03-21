var numeroSecreto = parseInt(Math.random() * 11);

function chutar() {


    var elementoResultado = document.getElementById("resultado");


    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);


    if (chute == numeroSecreto) {
        elementoResultado.innerHTML ="Você Acertou"
    }
    
    else if (chute > 10 || chute < 0){
        elementoResultado.innerHTML= "Você deve digitar um Numero de 0 a 10 cabeçudo";
    }
    
    else{
            if (chute > numeroSecreto) {
                elementoResultado.innerHTML = "Tente mais baixo"
            }

            if (chute < numeroSecreto) {
                elementoResultado.innerHTML = "Tente mais alto"
            }

        }
}