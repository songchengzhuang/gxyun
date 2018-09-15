<template>
    <!-- 链接item -->
    <div class="LinkList">
        <div class="LinkItem" v-for="(item,index) in linkListArr" :key="index">
          <div class="LinkItemLeft">
            <h2 v-text="item.title"></h2>
            <p class="linkTxt" v-text="item.url"></p>
            <p class="authorTxt"><span v-text="'作者：' + item.author">scz</span><span v-text="'类别：' + item.class"></span><span v-text="'时间：' + item.time"></span></p>
          </div>
          <div class="LinkItemRight">
            <a :href="item.url" target="_blank">
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
      linkListArr: [
        {
          url: "https://pan.baidu.com/s/1M11eMos98td7QBjusA6wiQ",
          title: "Vue.js 源码全方位深入解析",
          author: "乘风追月",
          class: "Vue",
          time: "2018-09-15"
        },
        {
          url: "https://pan.baidu.com/s/16b_bfqeSGyLimqjXV-8UwA",
          title: "打造扛得住的MySQL数据库架构",
          author: "夜星空",
          class: "MySQL",
          time: "2018-09-15"
        },
        {
          url: "https://pan.baidu.com/s/1JD3_68LRBRBGsiycUrx3MQ",
          title: "BAT各大公司面试题",
          author: "知乎其微",
          class: "React",
          time: "2018-09-15"
        },
        {
          url: "https://pan.baidu.com/s/13wrlboqorOMjjaI0dZDTwQ",
          title: "HTML5与CSS3实现动态网页系列课程",
          author: "小Q",
          class: "HTML5",
          time: "2018-09-15"
        },
        {
          url: "https://pan.baidu.com/s/1bxAttYbO9zPFQzwPa5QwdQ",
          title: "Androad 架构",
          author: "爱学习的笨蛋",
          class: "Androad",
          time: "2018-09-15"
        },
        {
          url: "https://pan.baidu.com/s/1Jawtn8MdDHa16gyifOvrBg",
          title: "ES6零基础教学 解析彩票项目",
          author: "小万酱",
          class: "ES6",
          time: "2018-09-15"
        },
        {
          url: "https://pan.baidu.com/s/1-iu1gU416aphMjSVYTRMfw",
          title: "2019前端跳槽面试必备技巧",
          author: "奔跑的小前端",
          class: "面试",
          time: "2018-09-15"
        },
        {
          url: "https://pan.baidu.com/s/1MYj-2Idw007zTYIFRbnmaA",
          title: "网易云python",
          author: "洛雨美",
          class: "python",
          time: "2018-09-15"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.LinkList {
  padding: 16px 20px;
  .LinkItem {
    padding: 16px 26px 12px 26px;
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
        background: #cc1a20 url(../../../assets/images/textBg.png) repeat center;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        cursor: pointer;
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
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
      }
      .linkTxt {
        font-size: 15px;
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
