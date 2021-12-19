let app = new Vue({
  el: "#app",
  data: {
    inputName: "",
    lista: [],
  },

  methods: {
    add: function () {
      if (this.inputName.length > 2) {
        this.lista.push(this.inputName);

        this.inputName = "";
      }
    },
  },
});
