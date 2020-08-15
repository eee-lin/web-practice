new Vue({
  el: "#app",
  data: {
    red: 0,
    green: 0,
    minipalettes: []
  },

  methods: {
    mouseMove: function(e) {
      this.red = e.offsetX;
      this.green = e.offsetY;
      console.log(this.red);
    },
    pick: function() {
      const newColor = {
        red: this.red,
        green: this.green
      };

      this.minipalettes.push(newColor);
    },
    // パレットに指定した色を表示する
    showColor(minipalette) {
      this.red = minipalette.red;
      this.green = minipalette.green;
    }
  },

  computed: {
    changeColor() {
      return {
        backgroundColor: "rgba(" + this.red + "," + this.green + ", 200, 0.5)"
      };
    }
  }
});
