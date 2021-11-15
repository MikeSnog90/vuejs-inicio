function bandeira(pais) {
  return '<img src="paises/' + pais + '.png" />';
}

let app = new Vue({
  el: "#app",
  data: {
    argentina: bandeira("argentina"),
    brazil: bandeira("brazil"),
  },
  methods: {},
});
