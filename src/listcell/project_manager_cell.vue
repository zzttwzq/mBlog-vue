<template>
    <div class="learncell">      

        <p class="detial_title">{{datalist.createtime}}</p>

        <div class="cellCenter">

            <div>
                <img class="titleimg" :src="images" alt="">

                <p class="learntitle">{{datalist.title}}</p>
            </div>

            <div class="clearfix"></div>

            <div>
                <img class="userimages" :src="datalist.usrimg" alt="">

                <p class="cellusername"> {{datalist.nickname}}</p>
            </div>

        </div>

        <div class="cellRight">
            <el-button class="buttons" type="success" @click="previewClick">查看</el-button>
            <el-button class="buttons" type="warning" @click="editClick">编辑</el-button>
            <el-button class="buttons" type="danger" @click="deleteClick">删除</el-button>
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
            previewClick: function (){

                window.localStorage.setItem('projectid',this.datalist.projectid);
                this.$router.push({name: 'learnpreview', params:{projectid:"111222"}})
            },
            editClick: function (){

                window.localStorage.setItem('projectid',this.datalist.projectid);
                this.$router.push({name: 'editlearn', params:{projectid:"111222"}})
            },
            deleteClick: function (){

                var r=confirm("是否确认删除？");

                if (r == true) {
                    
                    this.http.post('/deleteProject',{
                        projectid:this.datalist.projectid
                    },function (res){

                        if(res["code"] == 0){

                            window.location.reload();
                        }
                        else{

                            alert(res["msg"]);
                        }
                    });
                }
            },
        }
    }
</script>

<style scoped>

    .learncell{
        height: 70px;
        padding: 0 10px;
        background: white;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    .learncell :hover{
        cursor: pointer;
    }

    .detial_title{
        float: left;
        width: 100px;
        font-size: 18px;
        margin-top: 10px;
        margin-left: 10px;
    }

    .cellCenter{
        width: 36%;
        height: 100%;
        margin-left: 20px;
        float: left;
    }

    .titleimg{
        margin-top: 10px;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        overflow: hidden;
        float: left;
    }

    .learntitle{
        margin-top: 10px;
        line-height: 20px;
        font-size: 18px;
        float: left;
    } 

    .userimages{
        width: 20px;
        height: 20px;
        border-radius: 15px;
        float: left;
        background: red;
        margin-left: 5px;
        margin-top: 5px;
    }

    .cellusername{
        margin-left: 10px;
        line-height: 20px;
        float: left;
        font-size: 13px;
        margin-left: 5px;
        margin-top: 5px;
    }

    .cellRight{
        float: left;
    }

    .buttons{
        margin-top: 15px;
    }

</style>
