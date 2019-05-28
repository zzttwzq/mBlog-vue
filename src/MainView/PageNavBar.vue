<template>

    <div>

        <!-- <div style="float:left">
            <img class="webImage" src="http://localhost/mBlog/resource/image/logo.png" alt="">

            <p class="webtitle">业精于勤，荒于嬉；行成于思，毁于随；</p> 
        </div>

        <div class="navright">
            <el-row>
                <el-button @click="judgeLogin" class="loginbutton">{{btnstring}}</el-button>
            </el-row>
        </div> -->

        <p>标题</p>

        <p>面包屑</p>
        
    </div>
</template>

<script>
export default {
        mounted: function (){

            var username = localStorage.getItem('userName');
            if(username){

                this.btnstring = username;
            }
        },
        data: function() {
            return {
                btnstring:"登录"
            }
        },
        methods: {
            
            judgeLogin : function (){

                var userid = window.localStorage.getItem('userId');
                if(!userid){

                    this.login();
                }
                else{

                    this.logout(); 
                }   
            },
            open7() {

                // this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                //     confirmButtonText: '确定',
                //     cancelButtonText: '取消',
                //     type: 'warning',
                //     center: true
                // }).then(() => {

                //     this.$message({
                //         type: 'success',
                //         message: '删除成功!'
                //     });
                // }).catch(() => {

                //     this.$message({
                //         type: 'info',
                //         message: '已取消删除'
                //     });
                // });

                this.login();
            },
            login: function(){

                var _this = this;
                var mobile = "13023628319";
                var pass = this.md5("111111");

                this.http.post(process.env.login,{
                    mobile : mobile,
                    password : pass,
                },function (data) {

                    console.log(data);

                    var datas = data['data'];

                    if (data['code'] == 0) {

                        localStorage.setItem('userId',datas['userid']);
                        localStorage.setItem('userName',datas['nickname']);
                        localStorage.setItem('token',datas['token']);

                        alert('登录成功！');
                        _this.btnstring = datas['nickname'];
                    }
                });
            },
            logout: function(){

                var _this = this;
                
                this.http.post(process.env.logout,{
                    userId:window.localStorage.getItem('userId'),
                },function (data) {

                    localStorage.removeItem('userId');
                    localStorage.removeItem('userName');
                    localStorage.removeItem('token');

                    alert('用户已退出！');
                    _this.btnstring = '登录';
                });
            },
        }
    }
</script>

<style scoped>

    .webImage{
        margin-left: 33px;
        margin-top: 10px;
        width: 40px;
        height: 40px;
        border-radius: 25px;
        float: left;
    }

    .webtitle{
        width: 150px;
        line-height: 23px;
        float: left;
        margin-top: 8px;
        margin-left: 15px;
    }

    .navright{
        height: 100%;
        float: right;
        margin-right: 30px;
    }

    .loginbutton{
        margin-top: 13px;
    }

</style>

