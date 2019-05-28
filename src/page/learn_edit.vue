<template>

    <div class="addlearnback">
        <div class="addlearntitleview">

            <el-input class="titleview" v-model="title" placeholder="标题"></el-input>

            <el-dropdown class="tag" split-button type="default" @command="handleCommand2">
                {{tag}}
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="item in taglist" :command="item" :key="item">{{item}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown> 
            
            <el-dropdown class="category" split-button type="default" @command="handleCommand1">
                {{category}}
                <el-dropdown-menu slot="dropdown" disabled>
                    <el-dropdown-item v-for="item in categorylist" :command="item" :key="item">{{item}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>    

            <div class="clearfix"></div>   

            <el-input class="brieftext" v-model="brief" placeholder="简介"></el-input>

        </div>

        <div class="addlearntextview">
          
            <el-button @click="titleClick">插入主标题</el-button>
            <el-button @click="stringClick">插入文字</el-button>
            <el-button @click="subtitleClick">插入副标题</el-button>
            <el-button @click="codeClick">插入代码</el-button>
            <el-button @click="picClick">插入图片</el-button>
            <textarea class="text" v-model="text"></textarea>

            <div class="btnlist" style="float:right">
              <el-button type="primary" @click="previewClick">预览</el-button>
              <el-button type="success" @click="completeClick">完成</el-button>
            </div>

            <div class="clearfix"></div>
        </div>

    </div>
</template>

<script>

    window.onbeforeunload=function(e){     
    　　var e = window.event||e;  
    　　e.returnValue=("确定离开当前页面吗？");
    } 

    export default {
        created: function () {

            // console.log('>>>'+this.$route.params.learnId);

            var _this = this;

            _this.learnid = window.localStorage.getItem('learnid');

            this.http.post(this.api.getLearnDetail,{
                learnid:_this.learnid
            },function (res){

                var item = res["data"][0];

                _this.title = item.title;
                _this.brief = item.brief;
                _this.text = item.text;
                _this.category = item.category;
                _this.tag = item.tag;
            });
        },
        data: function () {

            return{
                categorylist:["前端","手机端","服务端","服务器"],
                taglist:["Vue","Angular","React","iOS","Android","React-Native","PHP","JAVA"],
                
                learnid : 3,
                title:'',
                brief:'',
                text:'',
                category:"分类",
                tag:"标签"
            }
        },
        methods: {
            
            handleCommand1: function (command){

                this.category = command;
            },
            handleCommand2: function (command){

                this.tag = command;
            },
            stringClick: function () {

                this.text = this.text+"[string]  \n\n[end]\n";
            },
            titleClick: function () {

                this.text = this.text+"[title] \n\n[end]\n";
            },
            subtitleClick: function () {

                this.text = this.text+"[subtitle]  \n\n[end]\n";
            },
            codeClick: function () {

                this.text = this.text+"[code]  \n\n[end]\n";
            },
            picClick: function () {

                this.text = this.text+"[image]  \n\n[end]\n";
            },
            previewClick: function () {

                this.$router.push({name: 'learnpreview', params:{learnid:"111222"}})
            },
            completeClick: function () {

                var _this = this;

                if (this.getByteLength(this.title) == 0){

                    alert('请输入标题！');
                }
                else if (this.getByteLength(this.brief) == 0){

                    alert('请输入简介！');
                }
                else if (this.tag == '标签'){

                    alert('请选择标签！');
                }
                else if (this.category == '分类'){

                    alert('请选择分类！');
                }
                else if (this.getByteLength(this.text) == 0){

                    alert('请输入文字内容！');
                }
                else{

                    var _this = this;

                    // 添加
                    this.http.post(this.api.updateLearn, {
                        learnid : _this.learnid,
                        brief : _this.brief,
                        category : _this.category,
                        tag : _this.tag,
                        text : _this.text,
                        title : _this.title,
                        usrid : localStorage.getItem('userId')
                    } , function(res){

                        if(res["code"] == 0){

                            window.localStorage.setItem('learnid',_this.learnid);

                            _this.$router.push({name: 'learnpreview', params:{learnid:"111222"}})
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

<style scope>

    .addlearntitleview{
        padding: 10px 10px;
        border-radius: 2px;
        box-shadow: 0px 0px 10px #e0e0e0;
        -webkit-box-shadow: 0px 0px 10px #e0e0e0;
        -moz-box-shadow: 0px 0px 10px #e0e0e0;
        -o-box-shadow: 0px 0px 10px #e0e0e0;
        -ms-box-shadow: 0px 0px 10px #e0e0e0;
    }

    .addlearntextview{
        margin-top: 10px;
        padding: 10px 10px;
        border-radius: 2px;
        box-shadow: 0px 0px 10px #e0e0e0;
        -webkit-box-shadow: 0px 0px 10px #e0e0e0;
        -moz-box-shadow: 0px 0px 10px #e0e0e0;
        -o-box-shadow: 0px 0px 10px #e0e0e0;
        -ms-box-shadow: 0px 0px 10px #e0e0e0;
    }

    .titleview{
        width: 300px;
        float: left;
    }
    
    .category{
        float: right;
        margin-right: 20px;
    }

    .tag{
        float: right;
    }

    .brieftext{
        margin-top: 10px;
    }

    .text{
        margin-top: 10px;
        width: 100%;
        height: 300px;
        resize: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        font-size: 15px;
        text-indent: 5px;
    }

</style>
