<script>
export default {
  name: 'App',
  data() {
    return {
      result: '',
      calculated: false
    };
  },
  methods: {
    handleClick(value) {
      if (this.calculated) {
        this.result = value;
        this.calculated = false;
      } else {
        this.result += value;
      }
    },
    handleClear() {
      this.result = '';
      this.calculated = false;
    },
    handleClearEntry() {
      if (this.result && this.result.length > 0) {
        this.result = this.result.slice(0, -1);
        if (this.result.length === 0) {
          this.handleClear();
        }
      } else {
        this.handleClear();
      }
    },
    handleOperatorClick(operator) {
      if (/[+*/-]$/.test(this.result)) {
        this.result = this.result.slice(0, -1) + operator;
      } else {
        this.result += operator;
      }
      this.calculated = false;
    },
    calculate() {
      try {
        let evaluatedResult = eval(this.result.
          replace(/(^|[^0-9])0+(\d+)/g, '$1$2'));
        if (evaluatedResult === Infinity ||
          evaluatedResult === -Infinity) {
          throw new Error('Erro de divisão por zero');
        }
        this.result = Number.isFinite(evaluatedResult)
          ? evaluatedResult : 'Error';
        this.calculated = true;
      } catch (error) {
        if (error.message === 'Divide by zero error') {
          this.result = 'Erro: dividir por zero';
        } else {
          this.result = 'Error';
        }
      }
    }
  }
};
</script>

<template>
  <div class="container mt-2">
    <div class="card bg-dark mx-auto">
      <div class="card-body text-light fw-4">
        <div class="">
          <input style="background-color: transparent;" type="text" class="result painel  p-2 rounded" :value="result" readonly />
        </div>
        <div class="calculator-buttons mt-5">
          <button class="btn btn-danger" @click="handleClear">C</button>
          <button class="btn btn-light" @click="handleClearEntry">DEL</button>
          <button class="btn btn-light" @click="handleOperatorClick('/')">÷</button>
          <button class="btn btn-light" @click="handleOperatorClick('*')">x</button>
          <button class="btn btn-light" @click="handleClick('7')">7</button>
          <button class="btn btn-light" @click="handleClick('8')">8</button>
          <button class="btn btn-light" @click="handleClick('9')">9</button>
          <button class="btn btn-light" @click="handleOperatorClick('-')">-</button>
          <button class="btn btn-light" @click="handleClick('4')">4</button>
          <button class="btn btn-light" @click="handleClick('5')">5</button>
          <button class="btn btn-light" @click="handleClick('6')">6</button>
          <button class="btn btn-light" @click="handleOperatorClick('+')">+</button>
          <button class="btn btn-light" @click="handleClick('1')">1</button>
          <button class="btn btn-light" @click="handleClick('2')">2</button>
          <button class="btn btn-light" @click="handleClick('3')">3</button>
          <button class="btn btn-light" @click="handleClick('0')">0</button>
          <button class="btn btn-light" @click="handleClick('.')">.</button>
          <button class="btn btn-primary" style="grid-column: span 3;" @click="calculate()">=</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 98vh;
}

.painel {
  font-size: 1.6em;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  color: #0f0;
  padding: 8px;
  border-radius: 5px;
  text-align: right;
  height: 6.3rem;
  text-shadow: 0 0 10px rgba(0, 255, 0, .5);
  border: 3px solid #222222;
  border-bottom: 2px solid rgb(73, 73, 73);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.calculator-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  font-weight: 600;
}
</style>
