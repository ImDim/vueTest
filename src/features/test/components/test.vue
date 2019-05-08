<template>
    <div>
        <div>
            <button @click="getMessage">alert</button>
        </div>
        <show-message v-bind:title="this.title"></show-message>
        <alerter msg="yeah!"></alerter>
    </div>
</template>

<script>
    import ShowMessage from './show-message'
    import Alerter from '@/components/alerter'

    export default {
        name: "Test",
        providers: ['Alert'],
        data() {
            return {
                title: 'Text'
            }
        },
        components: {
            ShowMessage,
            Alerter
        },
        methods: {
            getMessage: function() {
                this.Alert.hello(this.title);
            }
        },
    }
</script>

<style scoped>

</style>
