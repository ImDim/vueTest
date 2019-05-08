<template>
    <div class="hello">
        <input type="text" v-model="msgLocal">
        <button @click="getMessage">alert</button>
        <button @click="setMessage">save</button> <br>
    </div>
</template>

<script>
    export default {
        name: 'Alerter',
        providers: ['Alert', 'Storage'],
        props: {
            msg: {
                type: String,
                default: ''
            }
        },

        methods: {
            setMessage: function() {
                this.Storage.myMessage = this.msgLocal;
            },
            getMessage: function() {
                this.Alert.hello(this.msgLocal);
            }
        },
        data: function() {
            return {
                msgLocal: ''
            }
        },
        created: function() {
            this.msgLocal = this.Storage.myMessage || this.msg;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
