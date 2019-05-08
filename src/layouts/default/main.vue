<template>
    <div class="my-default-layout">
        <app-menu></app-menu>
        <router-view/>
    </div>
</template>

<script>
import AppMenu from '@/components/app-menu'

export default {
  name: 'DefaultLayout',

  components: { AppMenu },

  methods: {

  }
}
</script>

<style lang="stylus">
</style>
