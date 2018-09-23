<template>

    <div class='mainbody'>

        <pageNav class="pageNav"/>

        <router-view class="bodyPage"></router-view>
    </div>
    
</template>

<script>
import Vue from 'vue'
import header from './header.vue'

Vue.component('pageNav',header);

</script>

<style>

    .mainbody{
        float: left;
        width: auto;
        height: auto;
        margin-left: 30px;
        margin-top: 30px;
    }

    .pageNav{
        height: 60px;
        width: 100%;
        background: orchid;
    }

    .bodyPage{
        margin-top: 30px;
        background: #ffffff;
        border-radius: 10px;
        overflow: hidden;
        padding: 20px 20px;  
    }

    .clearfix{
        clear: both;
    }
</style>

