<template>
    <div class="learncell animated fadeInUp" v-on:click="pushtodetial">      

        <img class="titleimg" :src="images" alt="">

        <div class="cellRight">

            <p class="learntitle">{{datalist.title}}</p>

            <p class="detial">{{datalist.brief}}</p>

            <div class="clearfix"></div>

            {{datalist.progress}}

            <el-progress style="margin-top:10px;" 
                  :text-inside="true" 
                  :stroke-width="18" 
                  :percentage="datalist.progress" 
                    status="datalist.stat"></el-progress>

            <img class="userimages" :src="datalist.usrimg" alt="">

            <span class="cellusername"> {{datalist.nickname}} {{datalist.createtime}}</span>

        </div>
        
         <div class="clearfix"></div>
    </div>
    
</template>

<script>
    export default {
        props: ['datalist'],
        computed:{
            images () {
                return 'http://localhost/mblog/resource/image/'+this.datalist.tag+'.png';
            }
        },
        methods:{
                
            pushtodetial:function (){

                window.localStorage.setItem('learnid',this.datalist.learnid);
                this.$router.push({name: 'learnpreview', params:{learnid:"111222"}})
            }
        }
    }
</script>

<style scoped>

    .learncell{
        height: 150px;
        padding: 0 10px;
        background: white;
        margin-bottom: 10px;
    }

    .learncell :hover{
        cursor: pointer;
    }

    .titleimg{
        margin-top: 25px;
        width: 100px;
        height: 100px;
        border-radius: 10px;
        overflow: hidden;
        float: left;
    }

    .cellRight{
        width: 79%;
        height: 148px;
        margin-left: 20px;
        float: left;
    }

    .learntitle{
        margin-top: 25px;
        line-height: 20px;
        font-size: 25px;
    } 

    .detial{
        margin-top: 10px;
        line-height: 20px;
    } 

    .userimages{
        margin-top: 20px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        float: left;
    }

    .cellusername{
        margin-top: 25px;
        margin-left: 10px;
        line-height: 20px;
        float: left;
    }

</style>
