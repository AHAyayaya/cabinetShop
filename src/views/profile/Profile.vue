<template>
  <div class="profile">
    <!-- 导航 -->
    <van-nav-bar class="nav-bar" title="我的"></van-nav-bar>
    <div class="container">
      <!-- 用户信息 -->
      <van-cell-group class="tag-list">
        <van-cell class="head-text" title="头像">
          <template #right-icon>
            <img class="user-head" src="~assets/img/home/scan.png" />
          </template>
        </van-cell>
        <van-cell title="已绑定手机号" value="13465468415" is-link />
        <van-cell title="服务区域" @click="chooseCity">{{province}}-{{city}}-{{county}}</van-cell>
        <!-- <van-cell title="服务区域" value="" @click="chooseCity" is-link /> -->
        <van-cell title="门店绑定" @click="bindShop" is-link>{{shop}}</van-cell>
        <van-cell title="身份信息" value="去认证" is-link />
        <van-cell title="清除缓存" value="5.2M" is-link />
      </van-cell-group>

      <!-- 遮罩层 -->
      <van-overlay v-show="popShow" />
      <!-- 省市区选择 -->
      <van-area
        v-if="cityShow"
        :area-list="areaList"
        :columns-num="colNum"
        :item-height="38"
        @confirm="confirmCity"
        @change="changeCity"
        @cancel="cancelCity"
      />
      <!-- 选择门店 -->
      <van-picker
        v-if="shopShow"
        title="选择门店"
        show-toolbar
        :columns="columns"
        @confirm="confirmShop"
        @cancel="cancelShop"
        @change="changeShop"
      />
      <!-- 退出登录 -->
      <van-button class="login-btn" type="default">退出登录</van-button>
    </div>
  </div>
</template>

<script>
// 导入城市JS
import areaList from "../../utils/areaList";

export default {
  name: "Profile",
  data() {
    return {
      areaList,
      popShow: false,
      cityShow: false,
      shopShow: false,
      colNum: "3", //省市区显示列数，3-省市区，2-省市，1-省
      shop: "去绑定", //绑定门店
      columns: ["1号门店", "2号门店", "3号门店", "4号门店"],
      province: "请选择", //1-省
      city: "请选择", //市
      county: "请选择" //区
    };
  },
  methods: {
    // ------------------------------- 遮罩层 -------------------------------------
    // popClick(){
    //   this.popShow = !this.popShow
    // },
    //----------------------------------- 选择所在区域 ------------------------------------
    // 选择城市
    chooseCity() {
      this.cityShow = !this.cityShow;
      this.popShow = !this.popShow;
    },
    //点击确定按钮
    confirmCity(event) {
      this.cityShow = !this.cityShow;
      this.popShow = !this.popShow;
      let arr, SelectProvinceName, SelectCityName, SelectCountyName;
      arr = event;
      SelectProvinceName = arr[0].name; // 省
      SelectCityName = arr[1].name; // 市
      SelectCountyName = arr[2].name; // 区
      //赋值
      this.province = SelectProvinceName;
      this.city = SelectCityName;
      this.county = SelectCountyName;
    },
    // 点击取消按钮
    cancelCity() {
      this.cityShow = !this.cityShow;
      this.popShow = !this.popShow;
    },
    // 改变选中值
    changeCity() {},
    // ----------------------------- 选择门店 ----------------------------------
    bindShop() {
      this.shopShow = !this.shopShow;
      this.popShow = !this.popShow;
      console.log(this.popShow);
    },
    confirmShop(event) {
      console.log(event);
      this.shop = event;
      this.shopShow = !this.shopShow;
      this.popShow = !this.popShow;
    },
    cancelShop() {
      this.shopShow = !this.shopShow;
      this.popShow = !this.popShow;
    },
    changeShop() {}
  }
};
</script>

<style scoped>
.container {
  background-color: #f2f0f1;
}
/* 用户头像 */
.head-text .van-cell__title span {
  line-height: 43px;
}

.user-head {
  width: 15%;
  border-radius: 5px;
}
/* 省市区 */
.van-area,
.van-picker {
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}
/* 按钮 */
.login-btn {
  margin-top: 5%;
  width: 100%;
}
</style>