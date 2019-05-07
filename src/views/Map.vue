<template>
  <div class="map">
    <h1>Map page</h1>
    <MapComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import MapComponent from '@/components/MapComponent.vue'

export default {
  name: 'Map',
  components: {
    MapComponent
  }
}
</script>
