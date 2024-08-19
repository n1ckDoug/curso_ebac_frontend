function meuEscopo() {
    const form = document.querySelector('.form');
    const valorDeA = document.querySelector('.valorDeA');
    const valorDeB = document.querySelector('.valorDeB');

    const mensagem = document.querySelector('#mensagem');

    const mensagemValidaNumero = document.querySelector('#numero-valido');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let numero1 = parseInt(valorDeA.value);
        let numero2 = parseInt(valorDeB.value);

        if (!isNaN(numero1) && !isNaN(numero2)) {
            // Comparando os números inteiros
            if (numero1 === numero2) {
                mensagem.innerHTML = `<p>Os números são iguais.</p>`;
                mensagem.classList.add('erro');
                mensagem.classList.remove('succsses');
                mensagemValidaNumero.style.display = 'none';
                mensagem.style.display = 'block';


                valorDeA.value = '';
                valorDeB.value = '';
            } else if (numero1 > numero2) {
                mensagem.innerHTML = `<p>O número ${numero1} é maior que o número ${numero2}.</p>`;
                mensagem.classList.add('succsses');
                mensagemValidaNumero.style.display = 'none';
                mensagem.style.display = 'block';

                mensagem.classList.remove('erro');

                valorDeA.value = '';
                valorDeB.value = '';
            } else {
                mensagem.innerHTML = `<p>O número ${numero2} é maior que o número ${numero1}.</p>`;
                mensagem.classList.add('succsses');
                mensagemValidaNumero.style.display = 'none';
                mensagem.style.display = 'block';

                mensagem.classList.remove('erro');

                valorDeA.value = '';
                valorDeB.value = '';
            }
        } else {
            mensagemValidaNumero.innerHTML = `<p>Por favor, digite números inteiros válidos.</p>`;
            mensagemValidaNumero.classList.add('numero-valido');
            mensagemValidaNumero.style.display = 'block';
            mensagem.style.display = 'none';
        }

    });
}

meuEscopo();