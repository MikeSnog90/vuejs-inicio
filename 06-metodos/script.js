let app = new Vue({
  el: "#app",
  data: {
    nome: "mike",
    idade: 35,
  },
  methods:{
    mostrar: (nome)=>{
      let txt= "olá, " +nome;
      return txt;
    },

    testar:()=>{
      return "Testando 1,2,3..."
    }
  },
});
