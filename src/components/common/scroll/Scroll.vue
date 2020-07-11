<template>
  <div class="scroll">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <slot></slot>
        <!--                <van-cell v-for="item in list" :key="item" :title="item" />-->
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import Vue from "vue";
import { List, PullRefresh, Toast } from "vant";

Vue.use(List)
  .use(PullRefresh)
  .use(Toast);

export default {
  name: "Scroll",
  props: {
    // loading: {
    //     type: Boolean,
    //     default: false
    // },
    // finished: {
    //     type: Boolean,
    //     default: false
    // },
    // refreshing: {
    //     type: Boolean,
    // }
  },
  data() {
    return {
      loading: false,
      finished: false,
      refreshing: false
    };
  },
  methods: {
    //开启下拉刷新
    onRefresh() {
      this.loading = false;

      this.$emit("refreshing");
    },

    //关闭下拉刷新
    closeRefresh() {
      this.refreshing = false;
    },

    //开启上拉加载
    onLoad() {
      console.log("22");

      //this.loading = true;

      this.$emit("pullUp");
    },

    //关闭上拉加载图标
    closeOnLoad() {
      this.loading = false;

      //this.finished = true;
    },

    //数据为空的时候开启
    openFinished() {
      this.finished = true;
    }
  }
};
</script>

<style scoped>
</style>