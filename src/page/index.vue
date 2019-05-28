<template>
    <div class="indexBack">
        <p v-on:click="handleClick">
            indexasdfasdfasdfsdfsfd
        </p>
    </div>
</template>

<script>
    export default {
        data: function (){
            return{
                msg:10,
            }
        },
        methods: {
            handleClick: function () {

                console.log('click');
                this.$emit('isLogFn','log');
            },
        }
    }
</script>

<style>

    .indexBack{
        width: 50%;
        background: red;
    }
</style>

