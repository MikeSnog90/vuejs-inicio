let placar = new Vue({
  el: "#placar",
  data: {
    n: 0,
    aparecer: false,
  },
});

let lista = new Vue({
  el: "#lista",
  data: {
    nomes: [
      { nome: "Bonieky", sobrenome: "Lacerda", idade: 99 },
      { nome: "Michael", sobrenome: "Nogueira", idade: 32 },
      { nome: "Antônio", sobrenome: "de Tarso", idade: 32 },
      { nome: "Maria", sobrenome: "Alguma", idade: 32 },
    ],
  },
});
