<template>
    <div class="leftnav">

        <div class="leftNavLogin">
            <img class="userimg" v-bind:src="userimage" alt="" v-on:click="login">
            <p class="username">{{username}}</p>
        </div>

        <div style="margin-top:30px;">
            <p class="item" v-for="obj in list" v-on:click="go(obj)">{{obj.title}}</p>
        </div>
    </div>
</template>

<script>

const apis = process.env.API_ROOT;

export default {

  data : function () {

    return {
        userimage: "https://upload.jianshu.io/users/upload_avatars/2204269/54bc6df9d4b6.jpg",
        username: "吴志强",
        list:[
            {title: '首页', name: 'index'},
            {title: '项目管理', name: 'project'},
            {title: '学习管理', name: 'learns'},
            {title: '图片管理', name: 'image'}]
    }
  },
  methods:{

    go: function (obj) {

        this.$router.push({name: obj.name})
    },
    login: function () {

        // var mobile = "13023628319";
        // var pass = this.md5("111111");

        // this.post('/login',{

        //     mobile : mobile,
        //     password : pass,
        // },function (data) {

        //     var datas = data['data'];

        //     if (data['code'] == 0) {

        //         localStorage.setItem('userId',datas['userId']);
        //         localStorage.setItem('token',datas['token']);

        //         alert('登录成功！');
        //     }
        // });
        

        // this.post('/logout',{
        //     userId:'1',
        // },function (data) {

        //     console.log(data);
        // });


        // // 添加
        // this.$axios.post('/api/index.php/learn/addLearn', {
        //     title : "学习swift",
        //     tag : "swift,ios",
        //     lastItem : "第一章，学习变量",
        //     createTime : "2018-8-31 15:11:26",
        //     linkLearnID : "0",
        //     listArray : "asdfasdfasdfasdfasdf",
        //     img : "asdfasdfasdf",
        //     progress : "10"
        // })
        // .then(resp => {

        //     console.log(resp.data);
        // }).catch(err => {

        //     console.log('请求失败：' + err.status + ',' + err.statusText);
        // });



        // 添加

        for (var i = 0;i<53;i++){

            this.post('/addLearn',{
                title : "添加learn-"+i,
                brief : "添加",
                text : "hoasdfhaosdfhoashdfasdflkaskdjfhasdf",
                createTime : "2018-8-31 15:11:26",
                share : 10,
                comment : 20,
                star : 30,
                tag : "swift,ios",
                category : '前端',
                userId : 3,
                projectId : 1
            },function (data) {

                console.log(data);
            });
        }





        //修改
        // this.$axios.post('/api/index.php/project/updateProject', {
        //     id : '19',
        //     title : "1",
        //     tag : "2",
        //     lastItem : "3",
        //     createTime : "2018-8-31 19:11:26",
        //     linkLearnID : "4",
        //     listArray : "5",
        //     img : "6",
        //     progress : "7"
        // })
        // .then(resp => {

        //     console.log(resp.data);
        // }).catch(err => {

        //     console.log('请求失败：' + err.status + ',' + err.statusText);
        // });


        //删除
        // this.$axios.post('/api/index.php/project/deleteProject', {
        //     id : "20"
        // })
        // .then(resp => {

        //     console.log(resp.data);
        // }).catch(err => {

        //     console.log('请求失败：' + err.status + ',' + err.statusText);
        // });


        // 获取详情
        // this.$axios.post('/api/index.php/project/getProjectDetail', {
        //     id : "21"
        // })
        // .then(resp => {

        //     console.log(resp.data);
        // }).catch(err => {

        //     console.log('请求失败：' + err.status + ',' + err.statusText);
        // });




        // var timestamp = Date.parse(new Date());
        // var userid = 1;
        // var token = "iaus0d98fuq0weorhqlwerh";
        // var sign = 'mblog is very good'+timestamp+userid;
        // sign = this.md5(sign);

        // //获取列表
        // this.$axios.post('/logout', 
        //     {
        //         page : 0,
        //         size : 20,
        //     },
        //     {
        //         headers: {
        //             "Token": token,
        //             "Sign" : sign,
        //             "UserId" : userid,
        //             "Timesnamp" : timestamp,
        //     }
        // })
        // .then(resp => {

            
        //     console.log(resp.data);
        // }).catch(err => {

        //     console.log('请求失败：' + err.status + ',' + err.statusText);
        // });




        //获取详情
        // this.$axios.post('/api/index.php/user/addUser', {
        //     'realname' : "123",
        //     'nickname' : "11",
        //     'password' : "asdfasdfasdf",
        //     'age' : "27",
        //     'mobile' : "13023628319",
        //     'cent' : "10",
        //     'token' : "iaus0d98fuq0weorhqlwerh",
        //     'lastlogin' : "2018-9-1 12:23:23",
        //     'level' : "10",
        //     'usrimg' : "http://localhost/mblog/resource/image/111.png",
        // })
        // .then(resp => {

        //     console.log(resp.data);
        // }).catch(err => {

        //     console.log('请求失败：' + err.status + ',' + err.statusText);
        // });
    }
  }
}
</script>

<style>

    .leftnav{
        width: 250px;
        background: #1a1e2a;
        height: 700px;
        float: left;
        color: white;
        font-size: 28px;
    }

    .userimg{
        width: 60px;
        height: 60px;
        border-radius: 30px;
        margin-left: 95px;
        margin-top: 20px;
        cursor: pointer;
    }

    .username{
        width: 100%;
        text-align: center;
        margin-top: 15px;
    }

    .item{
        text-align: center;
        font-size: 18px;
        cursor: pointer;
        width: 100%;
        margin: 0 0;
        height: 40px;
        line-height: 40px;
    }
    .item:hover{
        background: rgb(65, 67, 58);
    }

</style>
