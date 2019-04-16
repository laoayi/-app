<template>
  <div class="f-flexvw-vh">
    <x-header :left-options="{backText: ''}" title="兑换钻石"></x-header>
    <!-- 卡片开始 -->
    <div class="card">
      <div class="card-child">
        <p>
          <i class="iconfont icon-icon-test"></i>钻石余额
        </p>
        <p>2000</p>
      </div>
    </div>
    <!-- 卡片结束 -->
    <!-- grid开始 -->
    <div class="my-grid">
      <flexbox :gutter="0" wrap="wrap" align>
        <flexbox-item :span="1/3" v-for="(item,i) in items" :key="i">
          <div class="my-grid-child">
            <div ref="icon" class="my-grid-child-end" @click="getGrid(i)">
              <span>{{item.title}}</span>
              <span>{{item.label}}</span>
              <div class="money-select show-none">
                <i class="iconfont icon-sanjiaoxing"></i>
                <i class="iconfont icon-xuanzhong"></i>
                </div>
            </div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
    <!-- grid结束 -->
    <!-- button开始 -->
    <div class="button-group">
      <button>确认充值</button>
      <p>
        <i v-if="select==false" class="iconfont icon-select1" @click="select=true"></i>
        <i v-else class="iconfont icon-select2" @click="select=false"></i>已阅读并同意《用户充值协议》
      </p>
    </div>
    <!-- button结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "100钻石", label: "1金币" },
        { title: "100钻石", label: "1金币" },
        { title: "100钻石", label: "1金币" },
        { title: "100钻石", label: "1金币" },
        { title: "100钻石", label: "1金币" },
        { title: "100钻石", label: "1金币" },
        { title: "100钻石", label: "1金币" },
        { title: "100钻石", label: "1金币" },
        { title: "100钻石", label: "1金币" }
      ],
      select: false
    };
  },
  methods: {
      getGrid(index){
          console.log(index);
          if(this.$refs.icon[index].children[2].className == 'money-select'){
              
            this.$refs.icon[index].children[2].classList.add('show-none')
          }else{
              for(let i=0;i<this.$refs.icon.length;i++){
                  this.$refs.icon[i].children[2].classList.add('show-none')
              }
              this.$refs.icon[index].children[2].classList.remove('show-none')
          }
      },
  },
};
</script>
<style lang="less" scoped>
.card {
  display: block;
  margin: 15px;
  text-align: center;
  color: #cfac80;
  font-size: 20px;
  font-weight: bold;
  .card-child {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    background: #333;
    border-radius: 7px;
    padding: 10px 0;
    i {
      border: 2px solid #cfac80;
      padding: 3px;
      font-size: 15px;
      border-radius: 100%;
      margin-right: 15px;
    }
  }
}
.my-grid {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 15px;
  .my-grid-child {
    width: 100%;
    height: 100px;
    padding: 5px;
    box-sizing: border-box;
    .my-grid-child-end {
      text-align: center;
      position: relative;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      padding: 10px 0;
      flex-direction: column;
      justify-content: space-around;
      border: 1px solid #cfac80;
      border-radius: 7px;
      overflow: hidden;
        .money-select{
            position: absolute;
            width:60%;
            height: 60%;
            bottom: 0;
            right:0;
            text-align: right;
            .icon-sanjiaoxing{
                z-index:500;
                font-size: 50px;
            }
            .icon-xuanzhong{
                z-index:1000;
                font-size: 16px;
                color:#fff;
                position: absolute;
                right:3px;
                top:55%;
            }
        }
    }
  }
}
.button-group {
  width: 100%;
  padding: 10px 15px;
  box-sizing: border-box;
  button {
    display: block;
    width: 100%;
    height: 50px;
    border:none;
    line-height: 50px;
    border-radius: 20px;
    background: #292929;
    font-size: 18px;
    color: #fff;
    margin-bottom: 10px;
  }
  p {
    i {
      margin-right: 5px;
      font-size: 16px;
      color: green;
    }
    font-size: 14px;
    text-align: center;
    color: #ccc;
  }
}
.show-none{
    display: none;
}

</style>
