<template>
  <div class="f-flexvw-vh">
    <x-header :left-options="{backText: ''}" title="我的钱包">
      <a slot="right" style="color:#1f1f1f">消费记录</a>
    </x-header>
    <div class="f-child">
      <!-- 轮播开始 -->
      <div class="my-swiper">
        <i class="iconfont icon-laba"></i>
        <swiper
          auto
          loop
          height="30px"
          direction="vertical"
          :interval="2000"
          :show-dots="false"
          class="swiper"
        >
          <swiper-item>
            <p>隔壁朱大侠刚刚充值了100金币</p>
          </swiper-item>
          <swiper-item>
            <p>温柔的鱼刚刚充值了1000金币</p>
          </swiper-item>
          <swiper-item>
            <p>暂无公告</p>
          </swiper-item>
        </swiper>
        <!-- <swiper :options="swiperOption" class="swiper">
          <swiper-slide>隔壁朱大侠刚刚充值了100金币</swiper-slide>
          <swiper-slide>温柔的鱼刚刚充值了1000金币</swiper-slide>
          <swiper-slide>暂无公告</swiper-slide>
        </swiper>-->
      </div>
      <!-- 轮播结束 -->
      <!-- 卡片开始 -->
      <div class="card">
        <div class="card-child">
          <p class="p">钻石余额</p>
          <p class="p2">2000</p>
          <button class="zuanshi btn">金币兑换钻石</button>
          <i class="iconfont icon-jinggao" @click="showZuanshi=true"></i>
        </div>
        <div class="card-child">
          <p class="p">钻石余额</p>
          <p class="p2">2000</p>
          <button class="jinbi btn">我要充值</button>
          <i class="iconfont icon-jinggao" @click="showJinbi=true"></i>
        </div>
      </div>
      <!-- 卡片结束 -->
      <!-- 会员展示开始 -->
      <div class="vip">
        <p class="label">爱吧会员</p>
        <ul class="ul">
          <li>
            <div class="imgLeft">
              <img src="../assets/img/super.png" alt>
            </div>
            <div class="remonendCenter">
              <p>超级心动会员</p>
              <p>
                每天5个超级喜欢
                <br>让你在人群中脱颖而出
              </p>
            </div>
            <div class="getDetail">了解详情</div>
          </li>
          <li>
            <div class="imgLeft">
              <img src="../assets/img/sayhi.png" alt>
            </div>
            <div class="remonendCenter">
              <p>超级心动会员</p>
              <p>
                每天5个超级喜欢
                <br>让你在人群中脱颖而出
              </p>
            </div>
            <div class="getDetail">了解详情</div>
          </li>
          <li>
            <div class="imgLeft">
              <img src="../assets/img/wanshitong.png" alt>
            </div>
            <div class="remonendCenter">
              <p>超级心动会员</p>
              <p>
                每天5个超级喜欢
                <br>让你在人群中脱颖而出
              </p>
            </div>
            <div class="getDetail">了解详情</div>
          </li>
        </ul>
        <!-- <div>
          <flexbox :gutter="0" wrap="wrap" align>
            <flexbox-item :span="1/2" v-for="(item,i) in items" :key="i">
              <div class="my-grid-child">
                <div class="my-grid-child-end">
                  <span>{{item.title}}</span>
                  <span>{{item.label}}</span>
                  <span>{{item.text}}</span>
                  <button>{{item.button}}</button>
                </div>
              </div>
            </flexbox-item>
          </flexbox>
        </div>-->
      </div>
      <!-- 会员展示结束 -->
      <!-- 弹窗开始 -->
      <!-- <div v-transfer-dom>
        <x-dialog
       
          v-model="showZuanshi"
          class="dialog-demo"
          hide-on-blur
        >
          <div class="dialog-box">
            <div class="box-header">
              <p>
                虚拟货币
                <span>钻石</span>
              </p>
              <i class="iconfont icon-close" @click="showZuanshi=false"></i>
            </div>
            <div class="box-content">
              <p class="point">1. 钻石的用途</p>
              <p>钻石可用来购买所有会员特权（我的—激活特权—选择要购买的特权—进行购买）</p>
              <p class="point">2. 如何获取钻石</p>
              <p>金币可直接兑换钻石且比率为:1金币=100钻石，平台也会在部分活动中，给用户发放钻石</p>
              <p class="point">3. 消费时虚拟货币的扣减顺序</p>
              <p>虚拟货币就减顺序：金币-钻石，且不支持混合支付。如购买会员时钻石数量不够择会自动将金币转化为钻石支付。</p>
            </div>
          </div>
        </x-dialog>
        <x-dialog
          
          v-model="showJinbi"
          class="dialog-demo"
          hide-on-blur
        >
          <div class="dialog-box">
            <div class="box-header">
              <p>
                虚拟货币
                <span>金币</span>
              </p>
              <i class="iconfont icon-close" @click="showJinbi=false"></i>
            </div>
            <div class="box-content">
              <p class="point">1. 金币的用途</p>
              <p>金币是本充值平台的中间货币，可以自由转换成平台下各产品的消费货币</p>
              <p class="point">2. 如何获取和使用金币</p>
              <p>目前金币唯一来源是通过充值获得。当你在爱吧婚恋平台下进行各产品的消费时，可直接用于支付</p>
              <p class="point">3. 消费时虚拟货币的扣减顺序</p>
              <p>虚拟货币就减顺序：金币-钻石，且不支持混合支付。如购买会员时钻石数量不够择会自动将金币转化为钻石支付。</p>
            </div>
          </div>
        </x-dialog>
      </div>-->
      <!-- 弹窗结束 -->
    </div>
  </div>
</template>
<script>
// import "swiper/dist/css/swiper.css";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import Swiper from "swiper";
export default {
  // components: {
  //   swiper,
  //   swiperSlide
  // },
  data() {
    return {
      // swiperOption: {
      //   direction: "vertical",
      //   autoplay: true,
      //   loop: true
      // },
      items: [
        {
          title: "超级心动会员",
          label: "每天五个超级喜欢",
          text: "让你在人群中脱颖而出",
          button: "了解详情"
        },
        {
          title: "SayHi会员",
          label: "可直接向你有好感的人打招呼",
          text: "让你把握主动权",
          button: "了解详情"
        },
        {
          title: "万事通会员",
          label: "每天10次查看高级资料的机会",
          text: "有更多的机会寻找适合自己的人",
          button: "了解详情"
        },
        {
          title: "漫游者会员",
          label: "添加2个漫游定位",
          text: "与全国朋友配对无限可能",
          button: "了解详情"
        }
      ],
      showZuanshi: false,
      showJinbi: false
    };
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
@baseFontSize: 37.5;
@px2rem: 1rem / @baseFontSize;
.vip li {
  margin: 14px 7px 0px;
  list-style: none;
  box-shadow: 0px 0px 1px rgb(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 17px 14px;
  overflow: hidden;
}
.vip li .imgLeft {
  float: left;
}
.vip li .imgLeft img {
  width: 54px;
  height: 54px;
}
.vip li .remonendCenter {
  float: left;
  width: 160px;
  margin-left: 10px;
}
.vip li .remonendCenter p:nth-child(1) {
  font-size: 16px;
  font-weight: bold;
  color: #292929;
}
.vip li .remonendCenter p:nth-child(2) {
  font-size: 12px;
  font-weight: bold;
  color: #aeaeae;
}
.vip li .getDetail {
  float: right;
  width: 85px;
  border-radius: 50px;
  margin: 16px -25px;
  color: #fff;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  text-align: center;
}
.vip li:nth-child(1) .getDetail {
  background: #ff6d6e;
}
.vip li:nth-child(2) .getDetail {
  background: #a190ff;
}
.vip li:nth-child(3) .getDetail {
  background: #fe8f18;
}
.my-swiper {
  width: 70%;
  margin: 0 auto;
  margin-top: 10px;
  height: 30px;
  display: flex;
  overflow: hidden;
  color: #fff;
  background: #cecece;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 0 10px;
  line-height: 30px;
  i {
    margin-right: 5px;
  }
  .swiper {
    flex-grow: 1;
  }
}
.card {
  display: block;
  // margin: 15px;
  text-align: center;
  color: #cfac80;
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  margin-left: 8px;
  .card-child {
    position: relative;
    width: 46%;
    height: 150px;
    float: left;
    // background: #333;
    border-radius: 10px;
    padding: 10px 0;
    margin: 6px;
    margin-bottom: 20px;
    background: url(../assets/img/diamond.png) 100% 100% no-repeat;
    background-size: 100%;
    &:last-child {
      // background: #e9c38f;
      color: #8e4519;
      margin-left: 10px;
      background: url(../assets/img/goldCoin.png) 100% 100% no-repeat;
      background-size: 100%;
    }
    p:first-child {
      margin-top: 15px;
    }
    .p {
      color: #fff;
      font-size: 16px;
      position: absolute;
      top: -5px;
      left: 45px;
    }
    .p2 {
      color: #fff;
      margin-top: 40px;
    }
    .btn {
      color: pink;
      width: 120px;
      height: 30px;
    }
    i {
      border: 2px solid #cfac80;
      padding: 3px;
      font-size: 15px;
      border-radius: 100%;
      margin-right: 15px;
    }
    button {
      width: 60%;
      height: 40px;
      border: none;
      border-radius: 20px;
      color: #fff;
      margin: auto;
      margin-top: 25px;
    }
    .zuanshi {
      background: #fff;
    }
    .jinbi {
      background: #fff;
    }
    .icon-jinggao {
      position: absolute;
      color: #fff;
      top: 5px;
      right: 5px;
      font-size: 20px;
      border: none;
    }
  }
}
.vip {
  width: 100%;
  display: block;
  box-sizing: border-box;
  padding: 0 15px;
  margin-bottom: 30px;
  .label {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .my-grid-child {
    width: 100%;
    box-sizing: border-box;
    padding: 1px;
    display: block;
    .my-grid-child-end {
      border: 1px solid #f7d087;
      border-radius: 7px;
      display: flex;
      flex-direction: column;
      text-align: center;
      span {
        font-size: 12px;
        width: 120%;
        display: block;
        transform: scale(0.8);
        margin-left: -15px;
        // white-space : nowrap;
        &:first-child {
          transform: scale(1);
          margin-top: 10px;
          font-size: 16px;
          font-weight: bold;
        }
      }
      button {
        width: 60%;
        height: 30px;
        line-height: 30px;
        border: 1px solid #f7d087;
        background: #f7d087;
        border-radius: 20px;
        margin: 10px auto;
      }
    }
  }
}
.dialog-demo {
  width: 100%;
  display: block;
  background: pink;
  .dialog-box {
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    display: block;
    .box-header {
      margin-top: 10px;
      text-align: left;
      padding-bottom: 10px;
      border-bottom: 1px solid #333;
      p {
        font-weight: bold;
      }
      span {
        margin-left: 10px;
      }
      .icon-close {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
    .box-content {
      text-align: left;
      margin-bottom: 10px;
      .point {
        margin-top: 10px;
      }
    }
  }
}
</style>
