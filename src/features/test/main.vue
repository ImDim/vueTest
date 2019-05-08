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
            return {
                test: this.$store.state.test.test,
            }
        },

        mounted () {
        },

        methods: {
        },
        created: function () {
            console.info(this.test)
        }
    }
</script>

<style scoped>

</style>
