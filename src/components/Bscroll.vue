<template>
  <div class="m-scrollwrap f-pr" ref="scrollw">
    <div ref="wrapper" class="wrap">
      <div>
        <load-more v-show="refreshdata" :tip="'正在刷新'"></load-more>
        <slot></slot>
        <load-more v-show="loadmore" :tip="'正在加载'"></load-more>
        <p class="u-finalpage" v-show="finishalldata">已经是最后一页</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from "better-scroll";
export default {
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 1
    },
    stopPullUp: {
      type: Boolean,
      default: false
    },
    threshold: { type: Number, default: -20 },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      loadmore: false,   //是否显示正在加载
      finishalldata: false,  //是否已全部加载
      refreshdata: false  //是否显示正在刷新
    };
  },
  // methods:{
  //   initScroll(){
  //     this.scroll = new BScroll(this.$refs.wrapper, {
  //        scrollY: true,
  //        tap:true,
  //        click: true,
  //        bounce: {
  //           top: false,
  //           bottom: true,
  //         },
  //        pullUpLoad:{
  //          threshold:-60
  //        }
  //      }
  //     );
  //      this.scroll.on('pullingUp', (pos) => {

  //               this.pullUp()

  //           })

  //   },

  // },
  // mounted: function () {
  //   this.$nextTick(function () {
  //     this.$on('childMethod', function () {
  //       console.log('监听成功')
  //     })
  //   })
  // },
  mounted() {
    // 保证在DOM渲染完毕后初始化better-scroll
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  watch: {
    stopPullUp(newval, oldval) {
      if (newval) {
        this.loadmore = false;
        this.finishalldata = true;
      } else {
        this.loadmore = true;
        this.finishalldata = false;
      }
    },
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data(newval, oldval) {
      setTimeout(() => {
        // this.refreshdata=false;
        this.scroll.finishPullDown();
        if (!this.stopPullUp) {
          this.loadmore = false;
        } //隐藏加载更多的div
        this.refresh();
      }, this.refreshDelay);
      setTimeout(() => {
        this.refreshdata = false;
      }, 2000);
    }
    //初始第一次数据加载后
    //  isScrollDataReady(newvalue,oldvalue){

    //      if(newvalue){

    //         setTimeout(() => {
    //     this._initScroll()
    //   }, 20)
    //      }
    //   }
  },
  methods: {
    isScrollDataReady() {
      let _this = this;
      setTimeout(() => {
        _this._initScroll();
      }, 20);
    },
    _initScroll() {
      //  console.log('初始化scrool');
      if (!this.$refs.wrapper) {
        return;
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        bounce: {
          //是否可上拉跟下拉并有缓冲动作
          top: this.pulldown,
          bottom: this.pullup
        },
        scrollX: this.scrollX,
        pullUpLoad: {
          threshold: this.threshold
        },
        pullDownRefresh: {
          threshold: 50,
          stop: 20,
        }
      });

      // 是否派发滚动事件
      if (this.listenScroll) {
        let me = this;
        this.scroll.on("scroll", pos => {
          me.$emit("scroll", pos);
        });
      }
      //上拉加载更多
      if (this.pullup) {
        this.scroll.on("scrollEnd", pos => {
          if (!this.stopPullUp) {
            this.$emit("pullup");
          }
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            //  console.log("调用了this.pullingUp");
            this.finishalldata = false;
            this.finishPullUp();
            // this.$emit('scrollToEnd')
          }
        });
      }
      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on("pullingUp", () => {
          //  console.log("调用了this.pullup");
          !this.stopPullUp
            ? (this.loadmore = true)
            : (this.finishalldata = true); //显示加载更多的div
          // 滚动到底部
        });
      }
      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on("pullingDown", pos => {
          console.log("下拉刷新了");
          this.refreshdata = true;
          this.$emit("pullDownRefresh");
        });
      }
      if (this.pulldown) {
        this.scroll.on("touchend", pos => {
          console.log("下拉刷新了");
          if (pos.y > 50) {
            this.$emit("pulldown");
          }
        });
      }
      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on("beforeScrollStart", () => {
          this.$emit("beforeScroll");
        });
      }
    },
    disable() {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable();
    },
    enable() {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.finishalldata = false;
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      // console.log("完成上拉");
      this.scroll && this.scroll.finishPullUp();
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  }
};
</script>
