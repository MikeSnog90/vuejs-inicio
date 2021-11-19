let app = new Vue({
  el: "#app",
  data: {
    aviso: true,
    divid: "qualquer",
    link: "https://b7web.com.br/",
    n: 14,
  },
  methods: {
    clicou: () => {
      alert("funcionou");
    },

    enviou: () => {
      alert("enviou!!!");
    },
  },
});
