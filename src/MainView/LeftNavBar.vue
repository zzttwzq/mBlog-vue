<template>
  <div>
    <div class="clearfix"></div>
    <div class="loginview" @click="login">
      <img class="usrImage" src="http://localhost/mBlog/resource/image/logo.png" alt="">
      <p class="username">asdfasdf</p>
    </div>
    <el-menu style="border-radius: 2px;" :default-openeds="['1', '2']">
      <el-submenu index="1" title="项目管理">
        <template slot="title">
          <i class="el-icon-tickets"></i>项目管理
        </template>
        <el-menu-item index="1-1" v-on:click="gotonav('project-preview')">
          <i class="el-icon-document"></i>在线项目预览
        </el-menu-item>
        <el-menu-item index="1-2" v-on:click="gotonav('add-project')">
          <i class="el-icon-circle-plus"></i>添加项目
        </el-menu-item>
        <el-menu-item index="1-3" v-on:click="gotonav('modi-project')">
          <i class="el-icon-edit-outline"></i>管理项目
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-tickets"></i>文章管理
        </template>
        <el-menu-item index="2-1" v-on:click="gotonav('blog-preview')">
          <i class="el-icon-document"></i>在线文章预览
        </el-menu-item>
        <el-menu-item index="2-2" v-on:click="gotonav('add-blog')">
          <i class="el-icon-circle-plus"></i>添加文章
        </el-menu-item>
        <el-menu-item index="2-3" v-on:click="gotonav('manager-blog')">
          <i class="el-icon-edit-outline"></i>管理文章
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <p class="webtitle">业精于勤，荒于嬉；
      <br>行成于思，毁于随；
    </p>
  </div>
</template>

<script>
const apis = process.env.API_ROOT;

export default {
  data: function() {
    return {
      userimage:
        "https://upload.jianshu.io/users/upload_avatars/2204269/54bc6df9d4b6.jpg",
      username: "吴志强",
      list: [
        { title: "首页", name: "index" },
        { title: "项目管理", name: "project" },
        { title: "学习管理", name: "learns" },
        { title: "图片管理", name: "image" }
      ]
    };
  },
  methods: {
    gotonav: function(item) {
      if (item == "index") {
        this.$router.push({ name: "index" });
      } else if (item == "project-preview") {
        this.$router.push({ name: "projectList" });
      } else if (item == "add-project") {
        this.$router.push({ name: "projectAdd" });
      } else if (item == "modi-project") {
        this.$router.push({ name: "projectManager" });
      } else if (item == "blog-preview") {
        this.$router.push({ name: "learn" });
      } else if (item == "add-blog") {
        this.$router.push({ name: "addlearn" });
      } else if (item == "manager-blog") {
        this.$router.push({ name: "managerlearn" });
      }
    },
    mounted: function() {
      var username = localStorage.getItem("userName");
      if (username) {
        this.btnstring = username;
      }
    },
    data: function() {
      return {
        btnstring: "登录"
      };
    },
    login: function() {

      var mobile = "13023628319";
      var pass = this.md5("111111");  
      
      this.http.post(
        this.api.login,
        {
          mobile: mobile,
          password: pass
        },
        function(data) {

          console.log(data);

          var datas = data["data"];

          if (data["code"] == 0) {
            localStorage.setItem("userId", datas["userid"]);
            localStorage.setItem("userName", datas["nickname"]);
            localStorage.setItem("token", datas["token"]);

            alert("登录成功！");
          }
        }
      );
    }
  }
};
</script>

<style scoped>
.logoImage {
  margin-top: 70px;
  margin-left: 20px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: inline-block;
  float: left;
}

.webtitle {
  line-height: 23px;
  position: absolute;
  left: 60px;
  top: 20px;
}

.loginview {
  margin-top: 30px;
  margin-bottom: 30px;
}

.loginview :hover {
  cursor: pointer;
}

.usrImage {
  margin-left: 84px;
  margin-top: 10px;
  width: 70px;
  height: 70px;
  border-radius: 35px;
}

.username {
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
}

.loginbutton {
  margin-top: 93px;
  margin-left: -30px;
}
</style>
