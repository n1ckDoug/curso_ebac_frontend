<script setup>

import { reactive } from "vue";

const estado = reactive({
  filtro: 'adicao',
  n1: 0,
  n2: 0,
  resTemp: '',
  operadores: [
    {
      tipo: 'adição',
      resultado: ''
    },
    {
      tipo: 'subtração',
      resultado: '0'
    },
    {
      tipo: 'multiplicação',
      resultado: '0'
    },
    {
      tipo: 'divisão',
      resultado: '0'
    }
  ]
});


function funcAdicao() {
  if (estado.operadores.filter(operadores => operadores.tipo === 'adição')) {
    let numero1 = Number(estado.n1);
    let numero2 = Number(estado.n2);
    let res = estado.operadores.resultado;

    res = numero1 + numero2;
    return res;
  };
}

function funcSubtracao() {
  if (estado.operadores.filter(operadores => operadores.tipo === 'subtração')) {
    let numero1 = Number(estado.n1);
    let numero2 = Number(estado.n2);
    let res = estado.operadores.resultado;

    res = numero1 - numero2;
    return res;
  }
}

function funcMult() {
  if (estado.operadores.filter(operadores => operadores.tipo === 'multiplicação')) {
    let numero1 = Number(estado.n1);
    let numero2 = Number(estado.n2);
    let res = estado.operadores.resultado;

    res = numero1 * numero2;
    return res;
  }
}

function funcDiv() {
  if (estado.operadores.filter(operadores => operadores.tipo === 'divisão')) {
    let numero1 = Number(estado.n1);
    let numero2 = Number(estado.n2);
    let res = estado.operadores.resultado;

    res = numero1 / numero2;
    return res;
  }
}

const getTarefasFiltradas = () => {
  const { filtro } = estado;

  switch (filtro) {
    case 'adicao':
      return funcAdicao();
    case 'subtracao':
      return funcSubtracao();
    case 'subtracao':
      return funcSubtracao();
    case 'mult':
      return funcMult();
    case 'div':
      return funcDiv();
    default:
      return 'Escolha uma operação aritmética';
  }
};

</script>

<template>
  <div class="calculadora">
    <div class="container mt-5 p-5">
      <h1 class="text-center mb-3">Calculadora automática</h1>
      <input @keyup="e => estado.n1 = e.target.value" class="form-control mb-3" type="number">
      <input @keyup="e => estado.n2 = e.target.value" class="form-control mb-3" type="number">

      <select @change="e => estado.filtro = e.target.value" class="form-select mb-3">
        <option value="adicao">Adição</option>
        <option value="subtracao">Subtração</option>
        <option value="mult">Multiplicação</option>
        <option value="div">Divisão</option>
      </select>

      <p class="fs-3">
        <strong>Resultado:</strong> {{ getTarefasFiltradas() }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.calculadora {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  max-width: 550px;
  background-color: #e7e7e7;
  border-radius: 10px;
}
</style>
