<template>
  <div class="census">
    <!-- 导航 -->
    <van-nav-bar class="nav-bar" title="统计"></van-nav-bar>
    <scroll class="container" @pullUp="pullUp" @refreshing="refreshing" ref="scroll">
      <div >
        111
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import { Toast } from "vant";

export default {
  name: "Census",
  components: {
    Scroll
  },
  methods: {
    pullUp() {
      setTimeout(() => {
        this.$refs.scroll.openFinished();
      }, 1000);
    },
    //下拉刷新
    refreshing() {
      setTimeout(() => {
        Toast("刷新成功");
        this.$refs.scroll.closeRefresh();
      }, 1000);
    }
  }
};
</script>

<style scoped>
.census {
  height: 100vh;
  position: relative;
}
</style>
