<template>
  <div class="f-flexvw-vh">
    <!-- 头部开始 -->
    <x-header :left-options="{backText: ''}" title="消费记录"></x-header>
    <!-- 头部结束 -->
    <!-- 时间选择开始 -->
    <div class="time-select">
      <span @click="pinkTime">{{timeSelected}}</span>
      <i class="iconfont icon-down"></i>
    </div>
    <!-- 时间选中结束 -->
    <!-- 日志开始 -->
    <div class="spend">
      <div class="spend-child" v-for="(item,i) in items" :key="i">
        <span v-show="item.time!=''" class="spend-title">
          {{item.time}}
          <span>:</span>
        </span>
        <span class="spend-detail" v-show="item.income!=''">
          <span>支出</span>
          {{item.income}}
        </span>
        <span class="spend-detail" v-show="item.outlay!=''">
          <span>收入</span>
          {{item.outlay}}
        </span>
      </div>
      <div class="bottom-line"></div>
    </div>
    <!-- 日志结束 -->
    <!-- 兑换日志开始 -->
    <div class="exchange">
      <div class="exchange-title">
        <span :class="select?'selected':''" @click="selectCoin()">钻石</span>
        <span :class="select?'':'selected'" @click="selectCoin()">金币</span>
      </div>
      <group v-if="select==true">
        <cell
          v-for="(item,index) in list1"
          :key="index"
          :title="item.title"
          :inline-desc="item.time"
        >{{item.money}}{{coin}}</cell>
      </group>
      <group v-else>
        <cell
          v-for="(item,index) in list2"
          :key="index"
          :title="item.title+coin"
          :inline-desc="item.time"
        >{{item.money}}{{coin}}</cell>
      </group>
    </div>
    <!-- 兑换日志结束 -->
  </div>
</template>
<script>
// import { DatetimePlugin } from 'vux'
// Vue.use(    )
export default {
  data() {
    return {
      timeSelected: "2019年4月",
      items: [
        { time: "4-2", income: "2000", outlay: "2000" },
        { time: "4-3", income: "2000", outlay: "2000" }
      ],
      list1: [
        { title: "购买超级心动会员", time: "4月6日 02:47", money: "-600" },
        { title: "购买超级心动会员", time: "4月7日 02:47", money: "-600" },
        { title: "购买超级心动会员", time: "4月8日 02:47", money: "-600" },
        { title: "购买超级心动会员", time: "4月9日 02:47", money: "-600" },
        { title: "购买超级心动会员", time: "4月10日 02:47", money: "-600" }
      ],
      list2: [
        { title: "兑换", time: "4月6日 02:47", money: "-800" },
        { title: "兑换", time: "4月6日 02:47", money: "-800" }
      ],
      coins: ["金币", "钻石"],
      coin: "金币",
      select: true
    };
  },
  methods: {
    pinkTime() {
      let _this = this;
      this.$vux.datetime.show({
        // clearText: "选择开始日期",
        confirmText: "确定",
        cancelText: "取消",
        format: "YYYY年MM月",
        value: "", // 其他参数同 props
        onConfirm(value) {
          _this.timeSelected = value;
        }
      });
    },
    selectCoin() {
      let _this = this;
      this.select = !this.select;
      if (this.select == true) {
        _this.coin = "金币";
      } else {
        _this.coin = "钻石";
      }
    }
  },
  mounted() {
  }
};
</script>
<style lang="less" scoped>
.time-select {
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 10px 15px;
  span {
    font-weight: bold;
    font-size: 18px;
  }
}
.spend {
  width: 100%;
  position: relative;
  // padding:0 15px;
  box-sizing: border-box;
  display: blcok;
  .spend-child {
    display: flex;
    width: 100%;
    padding: 5px 15px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;
    .spend-title{
      font-size: 14px;
    }
    .spend-detail {
      display: inline-block;
      padding: 5px;
      border-radius: 7px;
      background: #e8cfa8;
    }
  }
  .bottom-line {
    // width:100%;
    display: block;
    padding-top: 10px;
    margin: 0 15px;
    border-bottom: 1px solid #aaa;
  }
}
.exchange {
  width: 100%;
  display: block;
  .exchange-title {
    width: inherit;
    box-sizing: border-box;
    padding: 0 15px;
    padding-top:10px;
    span {
      display: inline-block;
      padding-right:5px;
    }
    .selected {
      font-weight: bold;
      font-size: 20px;
      position: relative;
      &::after {
        content: "";
        display: block;
        width: 40%;
        position: absolute;
        left: 20%;
        bottom: 0;
        border: 1px solid #000;
      }
    }
  }
}
</style>
