<template>
  <div id="app">
        <keep-alive>
           <router-view v-if="$route.meta.keepAlive" ></router-view>
        </keep-alive>
           <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import "./assets/css/global.less";

</style>
