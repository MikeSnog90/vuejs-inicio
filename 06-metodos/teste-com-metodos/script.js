let app = new Vue({
  el: "#app",
  data: {
    msg: "hello world!",
  },
  methods: {
    onClick: function () {
      this.msg = "Winter is coming";
    },
  },
});
