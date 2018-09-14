<template>
    <!-- 链接item -->
    <div class="LinkList">
        <div class="LinkItem" v-for="item in linkListArr" :key="item">
          <div class="LinkItemLeft">
            <h2>关于vue分享博客的链接关于vue分享博客的链接关于vue分享博客的链接关于vue分享博客的链接</h2>
            <p class="linkTxt">https://pan.baidu.com/s/1CpT0vR67D0Q0hBXss0e2yAhttps://pan.baidu.com/s/1CpT0vR67D0Q0hBXss0e2yAhttps://pan.baidu.com/s/1CpT0vR67D0Q0hBXss0e2yAhttps://pan.baidu.com/s/1CpT0vR67D0Q0hBXss0e2yAhttps://pan.baidu.com/s/1CpT0vR67D0Q0hBXss0e2yA</p>
            <p class="authorTxt"><span>作者：scz</span><span>类别：vue</span><span>时间：2018-09-13</span></p>
          </div>
          <div class="LinkItemRight">
            <a href="https://pan.baidu.com/s/1CpT0vR67D0Q0hBXss0e2yA" target="_blank">
              <Icon type="ios-link" size="42" color="#e6e6e6"></Icon>
            </a>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "LinkItem",
  data() {
    return {
      linkListArr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
};
</script>
<style lang="scss" scoped>
.LinkList {
  padding: 16px 20px;
  .LinkItem {
    padding: 16px 16px 10px 16px;
    margin: 12px 0;
    border-radius: 6px;
    box-shadow: 0px 0px 5px 1px #aaa;
    position: relative;
    &:hover {
      box-shadow: 0px 0px 5px 1px #ff6666 inset;
      h2 {
        font-size: 20px;
        line-height: 20px;
        /*图片文字样式*/
        background: url(../../../assets/images/textBg.png) repeat center;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }
      .linkTxt {
        color: #333;
      }
    }
    .LinkItemLeft {
      margin-right: 100px;
      h2 {
        font-size: 20px;
        line-height: 20px;
        color: #333;
        margin-bottom: 16px;
        letter-spacing: 1px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
      }
      .linkTxt {
        font-size: 16px;
        line-height: 18px;
        color: #808080;
        margin-bottom: 12px;
        display: -webkit-box;
        overflow: hidden;
        white-space: normal !important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .authorTxt {
        font-size: 12px;
        line-height: 12px;
        color: #4285f4;
        span {
          display: inline-block;
          margin-right: 26px;
        }
      }
    }

    .LinkItemRight {
      position: absolute;
      top: 50%;
      right: 26px;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      overflow: hidden;
      .ivu-icon {
        padding: 6px;
        cursor: pointer;
        &:hover {
          color: #ccc !important;
        }
      }
    }
  }
}
</style>
