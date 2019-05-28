<template>

    <div class="addlearnback">
        <div class="addlearntitleview">

            <el-row>
                <el-col :span="6">

                    <el-input v-model="title" placeholder="标题"></el-input>

                </el-col>

                <el-col :span="6">

                    <p>预计时间</p>

                </el-col>

                <el-col :span="4">

                    <el-date-picker
                        v-model="date1"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>

                </el-col>

                <el-col :span="4">

                    <p>-</p>

                </el-col>

                <el-col :span="4">

                    <el-date-picker
                        v-model="date2"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>

                </el-col>
            </el-row>

            <!-- <el-dropdown class="tag" split-button type="default" @command="handleCommand2">
                {{tag}}
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="item in taglist" :command="item" :key="item">{{item}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown> 
            
            <el-dropdown class="category" split-button type="default" @command="handleCommand1">
                {{category}}
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="item in categorylist" :command="item" :key="item">{{item}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>    

            <div class="clearfix"></div>   

            <el-input class="brieftext" v-model="brief" placeholder="简介"></el-input> -->

        </div>

        <div class="addlearntextview">

            <div v-for="item in listArray">

                <el-input class="brieftext" :model="category" placeholder="请输入标题">{{item}}</el-input>

                            <!-- <div v-for="item in listArray">

                <el-input class="brieftext" :model="category" placeholder="请输入标题">{{item}}</el-input>

                    <el-steps direction="vertical" :active="1" style="margin-top:20px">

                        <el-step :title="key" v-for="(cell, key) in item" style="height:60px" >

                            <el-input class="brieftextdetial" :model="category" placeholder="简介"></el-input>

                        </el-step>

                    </el-steps>

                <el-button type="success" style="margin-top:10px;width:100%" @click="btnclick">+</el-button>
            </div> -->

                <div style="height:10px;width:100%"></div>

                <div v-for="(cell ,key) in item" style="margin-top: 10px;">

                    <el-row>
                        <el-col :span="2">
                            <!-- <div class="dot"></div>
                            <div class="line"></div> -->
                            <p style="font-size:13px"><span class="el-icon-info"></span> 节点 {{key+1}}</p>
                        </el-col>

                        <el-col :span="22">
                            <el-input class="brieftextdetial" :model="category" placeholder="简介"></el-input>
                        </el-col>
                    </el-row>

                    <div class="clearfix"></div>
                </div>

                <el-button type="success" style="margin-top:10px;width:100%" @click="btnclick">+</el-button>
            </div>

            <el-button type="primary" style="margin-top:10px;width:100%" @click="titleClick">添加章节</el-button>
        </div>

    </div>
</template>

<script>

    window.onbeforeunload=function(e){     
    　　var e = window.event||e;  
    　　e.returnValue=("确定离开当前页面吗？");
    } 

    export default {
        data: function () {
            return{
                categorylist:["前端","手机端","服务端","服务器"],
                taglist:["Vue","Angular","React","iOS","Android","React-Native","PHP","JAVA"],
                // listArray:[["1","2","3"],["a","b","c"],["~","!","@"]],
                listArray:[],
                
                projectid:20,
                title:'',
                brief:'',
                text:'',
                category:"分类",
                tag:"标签",
                date1: '',
                date2: '',
            }
        },
        methods: {
            handleCommand1: function (command){

                this.category = command;
            },
            handleCommand2: function (command){

                this.tag = command;

                var array = new Array();
                this.listArray[0].push(array);
            },
            titleClick: function () {

                var array = new Array();
                this.listArray.push(array);
            },
            btnclick: function () {

                var array = new Array();
                this.listArray[0].push(array);
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

                    // 添加
                    this.http.post('/addLearn', {
                        brief : _this.brief,
                        category : _this.category,
                        tag : _this.tag,
                        text : _this.text,
                        title : _this.title,
                        projectid : _this.learnid,
                        usrid : localStorage.getItem('userId')
                    } , function(data){

                        if(data["code"] == 0){

                            _this.brief = "";
                            _this.category = "";
                            _this.tag = "";
                            _this.text = "";
                            _this.title = "";
                            _this.learnid = "";

                            alert("添加成功！");
                        }
                        else{

                            alert(data["msg"]);
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

    /* .dot{
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background: #409EFF;
        margin-top: 17px;
        margin-left: 20px;
    }

    .line{
        height: 46px;
        width: 1px;
        background: #409EFF;
        margin-top: -30px;
        margin-left: 25px;
    } */

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

    .el-date-editor.el-input, .el-date-editor.el-input__inner{
        width: 120px;
    }

</style>
