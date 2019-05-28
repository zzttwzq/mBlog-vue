<template>

    <div class="detialcell">

        <div style="background:white;">
            <p class="detial_title"><i class="el-icon-news">&nbsp;{{item.title}}</i></p>
            <p class="detial_username">
                <i class="el-icon-success">&nbsp;{{item.nickname}}</i>&nbsp;&nbsp;
                <i class="el-icon-date">&nbsp;{{item.createtime}}</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i class="el-icon-view">&nbsp;{{item.share}}</i>&nbsp;&nbsp;
                <i class="el-icon-share">&nbsp;{{item.share}}</i>&nbsp;&nbsp;
                <i class="el-icon-star-off">&nbsp;{{item.star}}</i>&nbsp;&nbsp;
                <i class="el-icon-tickets">&nbsp;{{item.comment}}</i>
            </p>
            
            <div class="line"></div>

            
            <div class="briefs">
                <div class="briefline"></div>
                <p class="briefss">{{item.brief}}</p>
            </div>

            <div class="clearfix"></div>

            <div v-html="totaltext" class="detial_text"></div>
        </div>
    </div>
</template>

<script>

    export default {
        mounted: function (){

            var _this = this;

            this.http.post("/getProjectDetail",{
                learnid:window.localStorage.getItem("projectid")
            },function (res){

                _this.item = res["data"][0];

                var array = _this.item.text.split('[end]');

                array.forEach(element => {
                    
                    if (element.indexOf("[title]") != -1) {

                        _this.totaltext = _this.totaltext + "<p style='font-size: 25px;'>" + element.replace('[title]','') + "</p>";
                    }
                    else if (element.indexOf("[subtitle]") != -1) {

                        _this.totaltext = _this.totaltext + "<p style='font-size: 21px;margin: 10px 10px;'>" + element.replace('[subtitle]','') + "</p>";
                    }
                    else if (element.indexOf("[string]") != -1) {

                        _this.totaltext = _this.totaltext + "<p style='font-size: 15px;margin: 10px 0px;margin-left:20px;'>" + element.replace('[string]','') + "</p>";
                    }
                    else if (element.indexOf("[code]") != -1) {

                        _this.totaltext = _this.totaltext + "<p style='font-size: 15px;margin: 10px 0px;margin-left:20px;background:#e0e0e0;padding:10px 10px;border-radius: 5px;'>" + element.replace('[code]','') + "</p>";
                    }
                    else if (element.indexOf("[image]") != -1) {

                        console.log(element.replace('[image]',''));

                        _this.totaltext = _this.totaltext + "<image style='margin-left:20px;background:red;width:520px' src='" + element.replace('[image]','') +"'/>";
                    }
                });
            });
        },
        data:function () {
            return{
                totaltext:"",
                item:{}
            }
        }
    }
    
</script>

<style scoped>

    .detialcell{
        padding: 10px 10px;
        box-shadow: 0px 0px 10px #e0e0e0;
        -webkit-box-shadow: 0px 0px 10px #e0e0e0;
        -moz-box-shadow: 0px 0px 10px #e0e0e0;
        -o-box-shadow: 0px 0px 10px #e0e0e0;
        -ms-box-shadow: 0px 0px 10px #e0e0e0;
        margin-bottom: 65px;
    }

    .detial_title{
        padding-top: 10px;
        font-size: 25px;
        margin-left: 20px;
    }

    .detial_username{
        color: #808080;
        font-size: 10px;
        margin-top: 10px;
        margin-left: 20px;
    }

    .line{
        margin-top: 10px;
        width: 100%;
        height: 1px;
        background: #808080;
    }

    .briefs{
        margin-top: 20px;
        margin-left: 20px;
        width: 540px;
        height: 80px;
        background: #f7f7f7
    }

    .briefss{
        margin-left: 10px;
        line-height: 80px;
        float: left;
    }

    .briefline{
        width: 10px;
        height: 80px;
        background: orange;
        float: left;
    }

    .detial_text{
        margin-top: 10px;
        margin-left: 20px;
        padding: 10px 10px;
        width: 540px;
    }

    .htmldetialtitle{
        color: red;
        font-size: 30px;
    }
</style>
