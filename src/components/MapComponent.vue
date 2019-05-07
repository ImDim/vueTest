<template>
  <div>
    <button @click="getMessage">Hello</button>
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
  providers: ['Alert'],

  methods: {
    getMessage: function() {
      this.Alert.hello('Hello World!');
    }
  },
}
</script>