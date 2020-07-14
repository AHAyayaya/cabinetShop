<template>
  <div class="home">
    <van-nav-bar class="nav-bar" title="首页"></van-nav-bar>
    <div class="container">
      <!-- 头部图片 -->
      <div class="top-img">
        <img src="~assets/img/home/topimg.png" alt />
        <div class="top-name">上海聚联智能驿站系统</div>
        <!-- 扫码区域 -->
        <div class="scan-content">
          <input type="text" placeholder="运单号/手机号/提货码" />
          <div class="scan">
            <img src="~assets/img/home/scan.png" alt />
          </div>
        </div>
        <!-- 按钮 -->
        <van-button class="home-btn" round type="info">存柜</van-button>
      </div>
      <!-- 分割线 -->
      <!-- <div class="van-hairline--top line"></div> -->
      <!-- 底部菜单 -->
      <van-row class="bottom-menu">
        <van-col span="12">
          <div class="menu-content">
            <img src="~assets/img/home/money.png" alt />
            <div>资金管理</div>
          </div>
        </van-col>
        <van-col class="bleft" span="12">
          <div class="menu-content">
            <img src="~assets/img/home/clear.png" alt />
            <div>超时清理</div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import {request} from 'network/axios'

export default {
  name: "Home",
  created(){
    this.getData()
  }, 
  methods:{
    getData(){
      request().then(res =>{
        console.log(res)
      })
    }
  }
};
</script>

<style scoped>
.home{
  height: 100vh;
  position: relative;
}
/* 头部图片样式 */
.top-img {
  position: relative;
}

.top-img img {
  width: 100%;
  height: 100%;
}
/* 头部文字样式 */
.top-name {
  position: absolute;
  top: 1%;
  width: 100%;
  color: #ed401f;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}
/* 扫码样式 */
.scan-content {
  position: absolute;
  top: 62%;
  left: 2%;
  width: 94%;
  display: flex;
  border: 3px solid #a7a4a7;
}

.scan-content input {
  flex: 1;
  border: none;
  margin-left: 3%;
}

.scan {
  width: 10%;
  height: 2rem;
  padding: 2% 2%;
}
/* 按钮样式 */
.home-btn {
  position: absolute;
  bottom: 0;
  left: 5%;
  width: 90%;
  border: none;
  padding: 5%;
  font-size: 18px;
  background-color: #ed401f;
}
/* 分割线 */
.line {
  margin-top: 10%;
}
/* 底部菜单 */
.bottom-menu {
  padding-top: 5%;
  text-align: center;
}

.bleft {
  border-left: 1px dashed #ccc;
}

.menu-content {
  width: 45%;
  margin: 0 auto;
  padding: 10%;
  border: 3px solid #d0cdd0;
  border-radius: 5px;
}

.menu-content img {
  width: 60%;
}
</style>