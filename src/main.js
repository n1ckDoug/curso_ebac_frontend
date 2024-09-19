const turma = [
    { nome: 'Gian', nota: 7.0 },
    { nome: 'Ana', nota: 6.0 },
    { nome: 'Maria', nota: 3.0 },
    { nome: 'João', nota: 5.5 },
    { nome: 'Paulo', nota: 8.0 },
];

const aprovados = turma.map(function (itemAtual) {
    if (itemAtual.nota >= 6) {
        return `O aluno ${itemAtual.nome} tem uma nota de ${itemAtual.nota} e está aprovado.`;
    } else {
        return `O aluno ${itemAtual.nome} tem uma nota de ${itemAtual.nota} e está reprovado.`;
    }
});

console.log(aprovados);