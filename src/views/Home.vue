<template>
  <div class="f-flexvw-vh">
    <p>pages：</p>
    <grid  :cols='3' :show-vertical-dividers="false">
      <grid-item :link="item.url" v-for="(item,i) in items" :key="i">
        <span class="grid-center">{{item.label}}</span>
      </grid-item>
    </grid>
  </div>
</template>
<script>
export default {
    data(){
        return{
            items:[
                {label:'兑换钻石',url:'/DiamondExchange'},
                {label:'消费成功',url:'/ExpensesRecord'},
                {label:'我的钱包',url:'/MyWallet'},
                {label:'消费记录',url:'/Record'},
                {label:'消费完成',url:'/Redemption'},
                {label:'投诉页面',url:'/Tousu'}
            ]
        }
    }
}
</script>
