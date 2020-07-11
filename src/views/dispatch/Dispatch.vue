<template>
  <div class="dispatch">
    <!-- 导航 -->
    <van-nav-bar class="nav-bar" title="派件"></van-nav-bar>
    <scroll class="container" @pullUp="pullUp" @refreshing="refreshing" ref="scroll">
      <!-- 搜索框 -->
      <div class="scan-content">
        <van-search class="search" v-model="value" right-icon placeholder="请输入搜索关键词" />
        <div class="scan">
          <img src="~assets/img/home/scan.png" alt />
        </div>
      </div>
      <!-- 标签栏 -->
      <van-tabs v-model="active" swipeable>
        <van-tab title="全部">
          <van-cell-group class="tag-list">
            <van-cell title="已存入" value="2020.07.10" />
            <van-cell title="格口号" value="AS0402" />
            <van-cell class="status" title="存入状态" value="代取件" />
            <van-cell title="手机号" value="16487551894" />
            <van-cell title="快递单号" value="12154579832365" />
          </van-cell-group>
          <van-cell-group class="tag-list">
            <van-cell title="已存入" value="2020.07.10" />
            <van-cell title="格口号" value="AS0402" />
            <van-cell title="存入状态" class="status" value="代取件" />
            <van-cell title="手机号" value="16487551894" />
            <van-cell title="快递单号" value="12154579832365" />
          </van-cell-group>
          <van-cell-group class="tag-list">
            <van-cell title="已存入" value="2020.07.10" />
            <van-cell title="格口号" value="AS0402" />
            <van-cell title="存入状态" class="status" value="代取件" />
            <van-cell title="手机号" value="16487551894" />
            <van-cell title="快递单号" value="12154579832365" />
          </van-cell-group>
        </van-tab>
        <van-tab title="已取件">
          <van-cell-group class="tag-list">
            <van-cell title="已存入" value="2020.07.10" />
            <van-cell title="格口号" value="AS0402" />
            <van-cell title="存入状态" class="status" value="代取件" />
            <van-cell title="手机号" value="16487551894" />
            <van-cell title="快递单号" value="12154579832365" />
          </van-cell-group>
          <van-cell-group class="tag-list">
            <van-cell title="已存入" value="2020.07.10" />
            <van-cell title="格口号" value="AS0402" />
            <van-cell title="存入状态" class="status" value="代取件" />
            <van-cell title="手机号" value="16487551894" />
            <van-cell title="快递单号" value="12154579832365" />
          </van-cell-group>
        </van-tab>
        <van-tab title="未取件">
          <van-cell-group class="tag-list">
            <van-cell title="已存入" value="2020.07.10" />
            <van-cell title="格口号" value="AS0402" />
            <van-cell title="存入状态" class="status" value="代取件" />
            <van-cell title="手机号" value="16487551894" />
            <van-cell title="快递单号" value="12154579832365" />
          </van-cell-group>
          <van-cell-group class="tag-list">
            <van-cell title="已存入" value="2020.07.10" />
            <van-cell title="格口号" value="AS0402" />
            <van-cell title="存入状态" class="status" value="代取件" />
            <van-cell title="手机号" value="16487551894" />
            <van-cell title="快递单号" value="12154579832365" />
          </van-cell-group>
        </van-tab>
        <van-tab title="问题件">
          <van-cell-group class="tag-list">
            <van-cell title="已存入" value="2020.07.10" />
            <van-cell title="格口号" value="AS0402" />
            <van-cell title="存入状态" class="status" value="代取件" />
            <van-cell title="手机号" value="16487551894" />
            <van-cell title="快递单号" value="12154579832365" />
          </van-cell-group><van-cell-group class="tag-list">
            <van-cell title="已存入" value="2020.07.10" />
            <van-cell title="格口号" value="AS0402" />
            <van-cell title="存入状态" class="status" value="代取件" />
            <van-cell title="手机号" value="16487551894" />
            <van-cell title="快递单号" value="12154579832365" />
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Dispatch",
  components: {
    Scroll
  },
  data() {
    return {
      value: "",
      active: 0
    };
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
        this.$toast("刷新成功");
        this.$refs.scroll.closeRefresh();
      }, 1000);
    }
  }
};
</script>

<style scoped>
.container{
  background-color: #f2f0f1;
}

/* 扫码样式 */
.scan-content {
  display: flex;
}

.search {
  flex: 1;
  /*
  margin-left: 3%;
  margin-top: 4%;
  border: 2px solid #ccc;
  border-radius: 5px; */
}

.scan {
  width: 8%;
  padding: 4%;
  padding-bottom: 0;
  background-color: #fff;
}

.scan img {
  width: 100%;
}

/* 列表 */
.tag-list{
  margin-top: 5px;
}

.van-cell{
  padding: 4px 16px;
}

.status .van-cell__value span{
  color: green;
}
</style>