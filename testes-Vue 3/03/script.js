let app = new Vue({
  el: "#app",
  data: {
    str: "Welcome to Canada!",
    splitedStr: "",
  },

  methods: {
    myFunction: function () {
      this.splitedStr = this.str.split(" ");
    },
  },
});
