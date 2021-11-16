let app = new Vue({
  el: "#desafio",
  data: {
    nome: "Michael Nogueira",
    idade: 35,
    imagem: "https://miro.medium.com/max/2000/1*ACR0gj0wbx91V_xgURifWg.png",
  },
  methods: {
    idadePor3() {
      return this.idade * 3;
    },
    numeroRodomico() {
      return Math.floor(Math.random(1) * 30);
    },
  },
});
