<template>
  <div class="f-flexvw-vh">
    <!-- 头部开始 -->
    <x-header :left-options="{backText: ''}" title="投诉"></x-header>
    <!-- 头部结束 -->
    <!-- 正文开始 -->
    <div class="f-child">
        <div class="contact">
            <p>请你详细描述投诉的原因，并上传订单详情等与投诉内容相关的截图，方便我们进行核实</p>
        </div>
      <div class="reson">
        <textarea maxlength="200" cols="30" rows="7" v-model="txt" placeholder="请填写投诉原因"></textarea>
        <p class="num">{{txt.length}}/200</p>
       
        <div class="add-content">
          <div class="add-image">
            <i class="iconfont icon-tianjia"></i>
          </div>
          <div class="add-image">
            <i class="iconfont icon-tianjia"></i>
          </div>
          <div class="add-image">
            <i class="iconfont icon-tianjia"></i>
          </div>
          <div class="add-image">
            <i class="iconfont icon-tianjia"></i>
          </div>
        </div>
        <p class="num">最多上传4张</p>
      </div>
      <div class="contact">
        <p>请您留下联系方式，后续审核中如有需要，我们会电话联系您确认。</p>
        <input class="tel" type="text" placeholder="请填写联系方式" v-model="tel">
        <button v-if="txt!=''&&tel!=''" class="submit">提交</button>
        <button v-else class="save2">提交</button>
      </div>
    </div>
    <!-- 正文结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      txt: "",
      tel:''
    };
  }
};
</script>
<style lang="less" scoped>
.reson {
  display: block;
  margin: 0 15px;
  border: 1px solid #666;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  textarea {
    width: 100%;
    display: block;
    border: none;
    outline: none;
    font-size: 14px;
  }
  .num {
    text-align: right;
    color: #ccc;
    margin-bottom: 15px;
  }
  .add-content {
    width: 100%;
    margin: 15px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .add-image {
      flex-grow: 1;
      margin: 0 3px;
      border: 1px dashed #666;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      i {
        font-size: 30px;
      }
    }
  }
}
.contact {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 15px;
  display: block;
  .tel {
    outline: none;
    display: block;
    width: 100%;
    height: 30px;
    padding:5px;
    border-radius: 10px;
    border:1px solid #ccc;
     margin:10px auto;
     font-size: 16px;
  }
  .submit{
      width:100%;
      height:45px;
    border-radius: 20px;
    background: #8163ea;
    line-height: 45px;
    border:none;
    margin:10px auto;
    color:#fff;
     font-size: 18px;
  }
  .save2{
      width:100%;
      height:45px;
    border-radius: 20px;
    background: #bcb9ff;
    line-height: 45px;
    border:none;
     margin:10px auto;
     color:#fff;
     font-size: 18px;
  }

}
</style>
