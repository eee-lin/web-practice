const app = new Vue({
  el: "#app",
  data: {
    //インプットのデータ
    message: "",
    // editform: "",
    todos: [],
    todo: ""
  },

  methods: {
    add: function() {
      //👇dataの中に入っている変数は，前にthisを付ける必要があるよ
      this.todos.push(this.message);
    },

    remove: function(index) {
      this.todos.splice(index, 1);
    },

    // edit: function(index) {
    //   this.todos.splice(index, 1, event.target.value);
    // },

    editform: function(event, index) {
      console.log(event);
      console.log(event.target.value);
      console.log(index);
      this.todos.splice(index, 1, event.target.value);
    }
  }
});

// var app3 = new Vue({
//   el: "#app-3",
//   data: {
//     seen: true
//   }
// });
