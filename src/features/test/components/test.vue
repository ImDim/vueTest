<template>
    <div>
        <div>
            <button @click="getMessage">alert</button>
        </div>
        <show-message v-bind:title="this.title"></show-message>
        <alerter msg="Hello Vue!"></alerter>
        {{ sum }} <button @click="getSum">getSum</button>
    </div>
</template>

<script>
    import ShowMessage from './show-message'
    import Alerter from '@/components/alerter'
    import calculate from '../mixins/calculate'

    export default {
        name: "Test",
        providers: ['Alert'],
        mixins: [calculate],

        data() {
            return {
                title: 'Text',
                sum: 0
            }
        },
        components: {
            ShowMessage,
            Alerter
        },
        methods: {
            getMessage: function() {
                this.Alert.hello(this.title);
            },
            getSum: function() {
                this.sum = this.calc(2, 2);
            }
        },
    }
</script>

<style scoped>

</style>
