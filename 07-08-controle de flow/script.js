function bandeira(pais) {
  return '<img src="paises/' + pais + '.png" />';
}

let app = new Vue({
  el: "#app",
  data: {
    pais: " ",
    argentina: bandeira("argentina"),
    brazil: bandeira("brazil"),
    china: bandeira("china"),
    uk: bandeira("uk"),
    usa: bandeira("usa"),
  },
  methods: {
    paises: function () {
      return [
        { bandeira: this.argentina, continente: "America do Sul" },
        { bandeira: this.brazil, continente: "America do Sul" },
        { bandeira: this.china, continente: "Ásia" },
        { bandeira: this.uk, continente: "Europa" },
        { bandeira: this.usa, continente: "America do Norte" },
      ];
    },
  },
});

app.pais = "brazil";
