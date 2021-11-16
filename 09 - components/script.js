function bandeiras(pais) {
  return '<img src="paises/' + pais + '.png" />';
}

Vue.component("pais", {
  props: ["bandeira", "continente"],
  //  dentro do template eu posso criar toda a estrutura de um site
  template: `<p v-html="bandeira + continente"></p>`,
});

let app = new Vue({
  el: "#app",
  data: {
    argentina: bandeiras("argentina"),
    brazil: bandeiras("brazil"),
    china: bandeiras("china"),
    uk: bandeiras("uk"),
    usa: bandeiras("usa"),
  },
});
