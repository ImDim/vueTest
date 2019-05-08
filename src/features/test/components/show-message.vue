<template>
    <div><h2>{{title}}: {{message}}</h2>!!!!!!!!!</div>
</template>

<script>
    export default {
        name: "show-message.vue",
        props: ['title'],
        data() {
            return {
                message: '@',
            }
        },
    }
</script>

<style scoped>

</style>
