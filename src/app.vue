<template>
  <div id="app">
    <component v-bind:is="component"></component>
  </div>
</template>

<script>
  import DefaultLayout from '@/layouts/default/main.vue'
  import NotFound from '@/layouts/not-found/main.vue'

  export default {
    name: 'App',

    components: {
      DefaultLayout,
      NotFound
    },

    computed: {
      component () {
        return this.$store.state.common.layout
      }
    },

    mounted () {
      // Update page title.
      this.$store.watch((state) => {
        return state.common.title
      }, (title) => {
        document.title = title
        console.log('title updated')
      }, {
        deep: true
      })
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
