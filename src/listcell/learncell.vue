<template>
    <div class="learncell">      

        <img class="titleimg" :src="datalist.titleimg" alt="">

        <div class="cellRight">
            <div>
                <p class="learntitle">{{datalist.title}}</p>
                <p class="detial">{{datalist.detial}}</p>
            </div>

            <div style="margin:20px 0px;">
                <img class="userimages" :src="datalist.userimg" alt="">
                <span class="username">{{datalist.username}}</span>
                <span class="usertime">{{datalist.datetime}}</span>
            </div>
        </div>
        
        <div class="clearfix"></div>

        <div class="learnline"></div>
    </div>
    
</template>

<script>
    export default {
        props: ['datalist'],
        data: function (){
            return {
                msg:20,
            }
        },
        methods: {

        }
    }
</script>

<style>

    .learncell{
        width: 100%;
        /* background: blue; */
        
    }

    .learncell :hover{
        cursor: pointer;
    }

    .titleimg{
        width: 50px;
        height: 50px;
        border-radius: 25px;
        overflow: hidden;
        background: red;
        float: left;
        margin-right: 2%;
    }

    .cellRight{
        width: 90%;
        height: auto;
        float: right;
        width: 88%;
    }

    .learntitle{
        font-size: 22px;
        text-align: left;
    }

    .detial{
        font-size: 15px;
        text-indent: 10px;
        text-align: left;
        color: #808080;
    }

    .learnline{
        width: 100%;
        height: 1px;
        background: #c3c3c3;
    }

    .userimages{
        width: 30px;
        height: 30px;
        border-radius: 25px;
        overflow: hidden;
        background: orange;
        text-align: left;
        float: left;
    }

    .username{
        font-size: 15px;
        color: #808080;
        text-align: left;
        float: left;
    }

    .usertime{
        font-size: 15px;
        color: #808080;
        float: left;
    }


</style>
