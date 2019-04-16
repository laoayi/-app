<template>
  <div class="f-flexvw-vh">
    <!-- 头部开始 -->
    <x-header :left-options="{backText: ''}" title="消费记录"></x-header>
     <!-- 头部结束 -->
     <!-- 正文开始 -->
     <div class="content">
      <div class="content-cell" v-for="(item,i) in items" :key="i">
        <div class="content-cell-title">{{item.label}}</div>
        <div class="content-cell-value">{{item.value}}</div>
      </div>
    </div>
    <group>
      <cell title="对此订单有疑惑" is-link></cell>
      <cell title="投诉" is-link @click.native="changeShowTousu()"></cell>
    </group>
    <!-- 正文结束 -->
    <!-- 弹窗开始 -->
    <div class="tousu" v-show="showTousu==true">
       <i class="iconfont icon-gou"></i>
       <p>已投诉</p>
    </div>
    <!-- 弹窗结束 -->
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
      showTousu:false,
    };
  },
  methods: {
      changeShowTousu(){
          let _this = this;
          this.showTousu = true;
          setTimeout(function(){
             _this.showTousu = false;
          },1000);
      }
  },
};
</script>
<style lang="less" scoped>
.content {
  display: block;
  width: 100%;
  padding: 15px 0;
  .content-cell {
    display: flex;
    width: 100%;
    height: 33px;
    box-sizing: border-box;
    padding: 0 15px;
    font-size: 14px;
    .content-cell-title {
      flex-grow: 1;
      text-align: left;
    }
    .content-cell-value {
      text-align: right;
    }
  }
}
.tousu{
    // display: hidden;
    z-index: 1000;
    position: fixed;
    width:150px;
    height:150px;
    left: 50%;
    margin-left: -75px;
    top:50%;
    margin-top:-75px;
    background:rgba(0, 0, 0, 0.5);
    border-radius: 7px;
    box-sizing: border-box;
    padding:10px;
    text-align: center;
    color:#fff;
    i{
        font-size: 55px;
    }
}
</style>