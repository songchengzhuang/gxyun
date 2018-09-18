<template>
    <!-- 链接item -->
    <div class="LinkList">
        <div class="LinkItem" v-for="(item,index) in linkListArr" :key="index">
          <div class="linkImg" v-text="item.title.slice(0,1)"></div>
          <div class="LinkItemLeft">
            <h2 v-text="item.title"></h2>
            <p class="linkTxt"><span v-text="item.url"></span><span v-if="item.pwa" v-text="'密码：' + item.pwa" style="color: #515A6E"></span></p>
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
          pwa: "",
          title: "Vue.js 源码全方位深入解析",
          author: "乘风追月",
          class: "Vue",
          time: "2018-09-15"
        },
        {
          url: "https://pan.baidu.com/s/1NFGRdOx9lDTwCZQdh1raAA",
          pwa: "q0a3",
          title: "前端完整学习资料",
          author: "爱学习的笨蛋",
          class: "UI",
          time: "2018-09-15"
        },
        {
          url: "https://pan.baidu.com/s/16b_bfqeSGyLimqjXV-8UwA",
          pwa: "",
          title: "打造扛得住的MySQL数据库架构",
          author: "夜星空",
          class: "MySQL",
          time: "2018-09-13"
        },
        {
          url: "https://pan.baidu.com/s/1JD3_68LRBRBGsiycUrx3MQ",
          pwa: "",
          title: "BAT各大公司面试题",
          author: "知乎其微",
          class: "React",
          time: "2018-09-15"
        },
        {
          url: "https://pan.baidu.com/s/1S9iN47ijRcHQhJIH7egirw",
          pwa: "",
          title: "Google资深工程师深度讲解Go语言",
          author: "知微",
          class: "golang",
          time: "2018-09-18"
        },
        {
          url: "https://pan.baidu.com/s/1Cz8M4T0SAuKZAN4et3JXVw",
          pwa: "kol3",
          title: "Angular4.0从入门到实践",
          author: "小粉",
          class: "Angular",
          time: "2018-09-16"
        },
        {
          url: "https://pan.baidu.com/s/13wrlboqorOMjjaI0dZDTwQ",
          pwa: "",
          title: "HTML5与CSS3实现动态网页系列课程",
          author: "小Q",
          class: "HTML5",
          time: "2018-09-11"
        },
        {
          url: "https://pan.baidu.com/s/1bxAttYbO9zPFQzwPa5QwdQ",
          pwa: "",
          title: "Androad 架构",
          author: "爱学习的笨蛋",
          class: "Androad",
          time: "2018-08-21"
        },
        {
          url: "https://pan.baidu.com/s/1Jawtn8MdDHa16gyifOvrBg",
          pwa: "",
          title: "ES6零基础教学 解析彩票项目",
          author: "小万酱",
          class: "ES6",
          time: "2018-09-15"
        },
        {
          url: "https://pan.baidu.com/s/14snUMWqnzRZNWBJGi-pHQA",
          pwa: "",
          title: "Vue2.0+Node.js+MongoDB全栈打造商城系统",
          author: "二水",
          class: "Vue",
          time: "2018-09-05"
        },
        {
          url: "https://pan.baidu.com/s/1-iu1gU416aphMjSVYTRMfw",
          pwa: "",
          title: "2019前端跳槽面试必备技巧",
          author: "奔跑的小前端",
          class: "面试",
          time: "2018-09-13"
        },
        {
          url: "https://pan.baidu.com/s/1MYj-2Idw007zTYIFRbnmaA",
          pwa: "",
          title: "网易云python",
          author: "洛雨美",
          class: "python",
          time: "2018-07-25"
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
    padding: 16px 36px 12px 26px;
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
    .linkImg {
      width: 60px;
      height: 60px;
      font-size: 22px;
      font-weight: 600;
      color: #000;
      text-align: center;
      line-height: 60px;
      border-radius: 6px;
      background: #f2f2f2;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      overflow: hidden;
    }
    .LinkItemLeft {
      margin-left: 80px;
      margin-right: 100px;
      h2 {
        font-size: 20px;
        line-height: 20px;
        color: #333;
        margin-bottom: 12px;
        letter-spacing: 1px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
      }
      .linkTxt {
        font-size: 14px;
        line-height: 18px;
        color: #808080;
        margin-bottom: 10px;
        display: -webkit-box;
        overflow: hidden;
        white-space: normal !important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        span {
          margin-right: 8px;
        }
      }
      .authorTxt {
        font-size: 12px;
        transform: scale(0.9);
        transform-origin: 0 0;
        -ms-transform: scale(0.9); /* IE 9 */
        -ms-transform-origin: 0 0; /* IE 9 */
        -webkit-transform: scale(0.9); /* Safari 和 Chrome */
        -webkit-transform-origin: 0 0; /* Safari 和 Chrome */
        -moz-transform: scale(0.9); /* Firefox */
        -moz-transform-origin: 0 0; /* Firefox */
        -o-transform: scale(0.9); /* Opera */
        -o-transform-origin: 0 0;
        line-height: 12px;
        color: #4285f4;
        span {
          display: inline-block;
          margin-right: 22px;
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
