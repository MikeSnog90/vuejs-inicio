let app = new Vue({
  el: "#app",
  data: {
    primeiroNome: "",
    segundoNome: "",
    comeCompleto: "",
  },

  /*  se usar um processamento externo o watch é melhor
  watch: {
    primeiroNome: function () {
      this.nomeCompleto = this.primeiroNome + " " + this.segundoNome;
    },
    segundoNome: function () {
      this.nomeCompleto = this.primeiroNome + " " + this.segundoNome;
    },
  },  
  */

  // se não quiser fazer o rolê acima
  computed: {
    nomeCompleto: function () {
      return this.primeiroNome + " " + this.segundoNome;
    },
  },
});
