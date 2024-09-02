document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('form-soma').addEventListener('submit', function(e){
        e.preventDefault();

        let primeiroNumero = document.getElementById('primeiro-numero').value;
        primeiroNumero = parseInt(primeiroNumero);

        let segundoNumero = document.getElementById('segundo-numero').value;
        segundoNumero = parseInt(segundoNumero);

        let resultado = primeiroNumero + segundoNumero;
        
        document.getElementById('resultado-valor').innerText = resultado;
        document.querySelector('.resultado').style.display = 'block';
    });

});