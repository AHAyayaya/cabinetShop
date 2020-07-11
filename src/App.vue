<template>
  <div id="app">
    <router-view />
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";

export default {
  name: "App",
  components: {
    TabBar
  }

};
</script>

<style>
/* 导航栏 */
.van-nav-bar {
  background-color: #ed401f !important;
}

.van-nav-bar__title {
  color: #fff !important;
}
/* 滚动区域 */
.container {
  position: absolute;
  top: 46px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: scroll;
}
</style>
