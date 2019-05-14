<template>
    <div>
        <div>404 not found path = {{title}}</div>
        <router-link to="/map">Map</router-link>
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        data () {
            return {
                title: 'Not Found'
            }
        },
    }
</script>
<style scoped>

</style>
