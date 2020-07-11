<template>
  <div class="cabinet">
    <!-- 导航 -->
    <van-nav-bar class="nav-bar" title="货架"></van-nav-bar>
    <!-- 列表 -->
    <scroll class="container" @pullUp="pullUp" @refreshing="refreshing" ref="scroll">
      <van-row>
        <van-col class="list" span="11">
          <div class="list-content">
            <div>小区智能柜</div>
            <p>大号柜F001</p>
            <van-icon class="dian" name="stop" />
            <span class="dian">空闲20个</span>
          </div>
          <img src="~assets/img/home/clear.png" alt />
        </van-col>
        <van-col class="list" span="11">
          <div class="list-content">
            <div>小区智能柜</div>
            <p>大号柜F001</p>
            <van-icon class="dian" name="stop" />
            <span class="dian">空闲20个</span>
          </div>
          <img src="~assets/img/home/clear.png" alt />
        </van-col>
        <van-col class="list" span="11">
          <div class="list-content">
            <div>小区智能柜</div>
            <p>大号柜F001</p>
            <van-icon class="dian" name="stop" />
            <span class="dian">空闲20个</span>
          </div>
          <img src="~assets/img/home/clear.png" alt />
        </van-col>
        <van-col class="list" span="11">
          <div class="list-content">
            <div>小区智能柜</div>
            <p>大号柜F001</p>
            <van-icon class="dian" name="stop" />
            <span class="dian">空闲20个</span>
          </div>
          <img src="~assets/img/home/clear.png" alt />
        </van-col>
        <van-col class="list" span="11">
          <div class="list-content">
            <div>小区智能柜</div>
            <p>大号柜F001</p>
            <van-icon class="dian" name="stop" />
            <span class="dian">空闲20个</span>
          </div>
          <img src="~assets/img/home/clear.png" alt />
        </van-col>
        <van-col class="list" span="11">
          <div class="list-content">
            <div>小区智能柜</div>
            <p>大号柜F001</p>
            <van-icon class="dian" name="stop" />
            <span class="dian">空闲20个</span>
          </div>
          <img src="~assets/img/home/clear.png" alt />
        </van-col>
        <van-col class="list" span="11">
          <div class="list-content">
            <div>小区智能柜</div>
            <p>大号柜F001</p>
            <van-icon class="dian" name="stop" />
            <span class="dian">空闲20个</span>
          </div>
          <img src="~assets/img/home/clear.png" alt />
        </van-col>
        <van-col class="list" span="11">
          <div class="list-content">
            <div>小区智能柜</div>
            <p>大号柜F001</p>
            <van-icon class="dian" name="stop" />
            <span class="dian">空闲20个</span>
          </div>
          <img src="~assets/img/home/clear.png" alt />
        </van-col>
        <van-col class="list" span="11">
          <div class="list-content">
            <div>小区智能柜</div>
            <p>大号柜F001</p>
            <van-icon class="dian" name="stop" />
            <span class="dian">空闲20个</span>
          </div>
          <img src="~assets/img/home/clear.png" alt />
        </van-col>
      </van-row>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Cabinet",
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
        this.$toast("刷新成功");
        this.$refs.scroll.closeRefresh();
      }, 1000);
    }
  }
};
</script>

<style scoped>
.cabinet {
  height: 100vh;
  position: relative;
}
/* 滚动区域 */
.container {
  background-color: #f2f0f1;
}
/* 列表 */
.list {
  display: flex;
  background-color: #fff;
  margin: 3% 2%;
  border-radius: 15px;
}

.list-content {
  flex: 1;
  padding: 6%;
  font-size: 12px;
  line-height: 1.5rem;
}

.list-content p {
  margin: 0;
  color: #999;
  font-size: 12px;
}

.list img {
  padding: 15% 0;
  padding-right: 10%;
  width: 30%;
  height: 30%;
}

.dian {
  color: #019856;
}
</style>