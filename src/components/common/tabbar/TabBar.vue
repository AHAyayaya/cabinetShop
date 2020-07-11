<template>
  <van-tabbar v-model="active" active-color="#ED401F" inactive-color="#000">
    <van-tabbar-item
      v-for="(item,index) in tabbars"
      :key="index"
      @click="tab(index,item.name)"
    >
      <span :class="currIndex == index ? active:''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal">
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "home",
          title: "首页",
          normal: require("assets/img/tabbar/home.png"),
          active: require("assets/img/tabbar/home_active.png")
        },
        {
          name: "cabinet",
          title: "货架",
          normal: require("assets/img/tabbar/cabinet.png"),
          active: require("assets/img/tabbar/cabinet_active.png")
        },
        {
          name: "census",
          title: "统计",
          normal: require("assets/img/tabbar/census.png"),
          active: require("assets/img/tabbar/census_active.png")
        },
        {
          name: "dispatch",
          title: "派件",
          normal: require("assets/img/tabbar/dispatch.png"),
          active: require("assets/img/tabbar/dispatch_active.png")
        },
        {
          name: "profile",
          title: "我的",
          normal: require("assets/img/tabbar/profile.png"),
          active: require("assets/img/tabbar/profile_active.png")
        }
      ]
    };
  },
  methods: {
    tab(index, val) {
      this.currIndex = index;
      //根据name跳转路由
      this.$router.push(val);
    }
  }
};
</script>

<style scoped>
</style>