<template>
  <div class="cabinet-info">
    <van-nav-bar class="nav-bar" title="货柜管理"></van-nav-bar>
    <div class="container">
      <!-- 列表 -->
      <van-cell-group>
        <van-cell title="已存入：12小时" value="2020/07/14 10:55" />
        <van-cell title="格号口" value="AS0408" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="已存入：36小时" value="2020/07/14 10:55" />
        <van-cell title="格号口" value="AS0408" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="已存入：" value="2020/07/14 10:55" />
        <van-cell title="格号口" value="AS0408" />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="已存入：" value="2020/07/14 10:55" />
        <van-cell title="格号口" value="AS0408" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "CabinetInfo"
};
</script>

<style scoped>
.container{
  background-color: #f2f0f1;
}
/* 列表 */
.van-cell-group{
  margin-top: 2%;
}
.van-cell{
  padding: 3px 16px;
}
</style>