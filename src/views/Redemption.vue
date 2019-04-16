<template>
  <div class="f-flexvw-vh">
    <x-header :left-options="{showBack: false}"><a slot="right" style="color:#1f1f1f">完成</a></x-header>
    <div class="duihuan">
       <i class="iconfont icon-gou1"></i>
       <p>钻石兑换成功</p>
    </div>
    <div class="content">
      <div class="content-cell" v-for="(item,i) in items" :key="i">
        <div class="content-cell-title">{{item.label}}</div>
        <div class="content-cell-value">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
    return {
      items: [
        { label: "支付方式", value: "微信" },
        { label: "创建时间", value: "2019-04-03 21:20" },
        { label: "订单号", value: "2098102938499029183748392" }
      ],
    };
  },
}
</script>
<style lang="less" scoped>
.content {
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 14px;
  .content-cell {
    display: flex;
    width: 100%;
    height: 33px;
    box-sizing: border-box;
    padding: 0 15px;
    .content-cell-title {
      flex-grow: 1;
      text-align: left;
    }
    .content-cell-value {
      text-align: right;
    }
  }
}
.duihuan{
    position: relative;
    width:150px;
    height:150px;
    margin:0 auto;
    font-size: 14px;
    // background:rgba(0, 0, 0, 0.5);
    border-radius: 7px;
    box-sizing: border-box;
    padding:10px;
    text-align: center;
    color:#141414;
    i{
        font-size: 55px;
    }
}
</style>