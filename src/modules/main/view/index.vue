<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <button @click="sayHi('Hello Vue!')">say hello</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// Импорт компнентов
import HelloWorld from '../components/HelloWorld.vue'

// Импорт миксинов
import sayHi from '../mixins/hello.js'

export default {
  name: 'home',
  mixins: [sayHi],

  components: {
    HelloWorld
  }
}
</script>
