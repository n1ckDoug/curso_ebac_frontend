function Pessoa(nome) {
    this.nome = nome;
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao, nome) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;

    Pessoa.call(this, nome);
}

function outraMarca(nome) {
    Carro.call(this, 'Prisma', 'Chevrolet', 2021, 2020, nome);
}

const carroDoJoao = new Carro('Fiesta', 'Ford', 2020, 2019, 'João');
const carroDaMaria = new Carro('Ka', 'Ford', 2021, 2020, 'Maria');
const carroDaPedro = new outraMarca('Pedro');

console.log(carroDoJoao);
console.log(carroDaMaria);
console.log(carroDaPedro);