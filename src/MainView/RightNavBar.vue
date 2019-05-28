<template>
    <div>
        <div >
            {{footerprint}}
        </div>
        <p v-on:click="clicks">asdfasdf</p>
    </div>
</template>

<script>

    export default {
        props: ['isLog'],
        data: function (){
            return{
                footerprint:this.isLog,
            }
        },
        methods: {
            isLogin: function () {

                console.log('111');
                
                if(this.isLog == 'true'){
                    return true
                } else {
                    return false
                }
            },
            clicks: function () {
                this.footerprint = '11111';
            }
        },
        watch: {
            footerprint:function(){
                console.log('aaa'+this.footerprint);
            },
        }
    }
</script>

<style scoped>
</style>
