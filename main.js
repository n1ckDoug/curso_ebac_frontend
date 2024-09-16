function Aluno(nome) {
    this.nome = nome;
    this.nomeAluno = function () {
        console.log(`O aluno: ${this.nome}`);
    }
}

function Turma(nome, notaA) {
    this.nome = nome;
    let _notaA = notaA;

    // getters e setters
    this.getNota = function () {
        return _notaA;
    }

    this.setNota = function (valor) {
        if (typeof valor === 'number') {
            _notaA = valor;
        }
    }

    //polimorfismo
    this.media = function () {
        const novoNota = _notaA / 2;
        _notaA = novoNota;
    }
    //fim polimorfismo

    // herança
    Aluno.call(this, nome);
}

const aluno01 = new Turma('Maria', 10);

aluno01.media();
console.log(aluno01.nomeAluno());
console.log(`Tem uma média de: ${aluno01.getNota()} pontos.`);