let app = new Vue({
  el: "#app",
  data: {
    nome: "Bonieky",
  },
  updated: function () {
    alert(this.nome);
  },
});

/** == CICLOS DE VIDA ==
 *
 * beforeCreate - antes de ter acesso as informações, pra influencialr algum item q está nma tela
 * created - quando elemento foi criado e está rodando,
 *          criado na memoria mas não renderizado
 *
 * beforeMount - renderizado pela primeira vez, ou montado
 * mounted
 *
 * beforeUpdate -
 * updated - algo foi modificado, influencia outros componentes
 *
 * beforeDestroy-
 * destroyed
 */
