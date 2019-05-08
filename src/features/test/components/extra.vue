<template>
    <div>
        <show-message title="asd"></show-message>
        <show-message v-bind:title="this.title"></show-message>
    </div>
</template>

<script>
    import ShowMessage from './show-message'
    export default {
        name: "Extra",
        components: {
            ShowMessage
        },
        providers: ['Alert'],
        data() {
            return {
                title: 'Text/Extra'
            }
        },
        created: function () {
            this.Alert.hello(this.title);
        }
    }
</script>

<style scoped>

</style>
