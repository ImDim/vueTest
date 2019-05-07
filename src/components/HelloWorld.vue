<template>
  <div class="hello">    
    <input type="text" v-model="msg"> 
    <button @click="getMessage">alert</button>
    <button @click="setMessage">save</button> <br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  providers: ['Alert', 'Storage'],

  data: function() {
    return {
      msg: ''
    }
  },
  methods: {
    setMessage: function() {
      this.Storage.myMessage = this.msg;
    },
    getMessage: function() {
      this.Alert.hello(this.msg);
    }
  },
  created: function () {
    this.msg = this.Storage.myMessage;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
