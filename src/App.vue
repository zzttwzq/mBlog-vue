<template>
  <div id="app">
    <LeftNavBar class="LeftNavBar"/>

    <PageNavBar class="PageNavBar"/>

    <router-view class="viewBack PageView animated fadeInUp" @isLogFn="lisLogFn"></router-view>

    <RightNavBar class="RightNavBar"/>

    <div class="clearfix"></div>

    <PageNavigation/>

    <!-- <pageFooter /> -->
  </div>
</template>

<script>
import Vue from "vue";
import LeftNavBar from "./MainView/LeftNavBar.vue";
import PageNavBar from "./MainView/PageNavBar.vue";
import RightNavBar from "./MainView/RightNavBar.vue";
import PageNavigation from "./MainView/PageNavigation.vue";
import footer from "./MainView/footer.vue";

Vue.component("LeftNavBar", LeftNavBar);
Vue.component("PageNavBar", PageNavBar);
Vue.component("RightNavBar", RightNavBar);
Vue.component("PageNavigation", PageNavigation);
Vue.component("pageFooter", footer);

export default {
  data: function() {
    return {
      login: false
    };
  },
  methods: {
    lisLogFn(data) {
      if (data == "log") {
        console.log("log click!");

        this.login = true;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "PingFang SC", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.viewBack {
  overflow: hidden;
  box-shadow: 0px 0px 30px #66666647;
  -webkit-box-shadow: 0px 0px 30px #66666647;
  -moz-box-shadow: 0px 0px 30px #66666647;
  -o-box-shadow: 0px 0px 30px #66666647;
  -ms-box-shadow: 0px 0px 30px #66666647;
}

.clearfix {
  clear: both;
}

.LeftNavBar {
  width: 250px;
  height: 100%;
  background: white;
  margin: 0 auto;
  position: absolute;
  z-index: 111111;
  left: 0px;
  top: 0px;
}

.PageNavBar {
  position: absolute;
  width: 80%;
  margin-left: 250px;
  height: 66px;
  z-index: 111111;
}

.RightNavBar {
  padding: 10px 10px;
  margin-left: 971px;
  float: right;
  width: 240px;
  position: fixed;
  margin-top: 76px;
}

.PageView {
  width: 660px;
  margin-left: 270px;
  margin-top: 86px;
  margin-bottom: 30px;
  border-radius: 2px;
  padding: 10px 10px;
  float: left;
}

.PageNavigation{

}
</style>
