<template>
    <div>
        <div>
            <router-link to="/test">Test</router-link>
        </div>
        <div>
            <router-link to="/test/extra">Test Extra</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data () {
            return {}
        },

        mounted () {
        },

        methods: {
        },
        created: function () {
            console.info(this.$router)
        }
    }
</script>

<style scoped>

</style>
