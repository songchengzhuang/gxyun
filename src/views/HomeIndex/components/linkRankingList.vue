<template>
    <!-- 链接item -->
    <ul class="linkRankingList">
        <li v-for="(item, index) in linkListArr" :key="index">
          <a :href="item.url" target="_blank">
            <p class="linkTit"><span>{{index+1}}.</span>{{item.title}}</p>
            <p class="linkAuthor"><span v-text="'———— ' + item.author"></span></p>
          </a>
        </li>
    </ul>
</template>
<script>
export default {
  name: "linkRankingList",
  data() {
    return {
      linkListArr: [
        {
          url: "https://pan.baidu.com/s/1M11eMos98td7QBjusA6wiQ",
          title: "Vue.js 源码全方位深入解析",
          author: "乘风追月"
        },
        {
          url: "https://pan.baidu.com/s/16b_bfqeSGyLimqjXV-8UwA",
          title: "打造扛得住的MySQL数据库架构",
          author: "夜星空"
        },
        {
          url: "https://pan.baidu.com/s/1JD3_68LRBRBGsiycUrx3MQ",
          title: "BAT各大公司面试题",
          author: "知乎其微"
        },
        {
          url: "https://pan.baidu.com/s/13wrlboqorOMjjaI0dZDTwQ",
          title: "HTML5与CSS3实现动态网页系列课程",
          author: "小Q"
        },
        {
          url: "https://pan.baidu.com/s/1bxAttYbO9zPFQzwPa5QwdQ",
          title: "Androad 架构",
          author: "爱学习的笨蛋"
        },
        {
          url: "https://pan.baidu.com/s/1Jawtn8MdDHa16gyifOvrBg",
          title: "ES6零基础教学 解析彩票项目",
          author: "小万酱"
        },
        {
          url: "https://pan.baidu.com/s/1-iu1gU416aphMjSVYTRMfw",
          title: "2019前端跳槽面试必备技巧",
          author: "奔跑的小前端"
        },
        {
          url: "https://pan.baidu.com/s/1MYj-2Idw007zTYIFRbnmaA",
          title: "网易云python",
          author: "洛雨美"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.linkRankingList {
  list-style: none;
  li {
    padding: 10px 16px;
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    color: #333;
    position: relative;
    &:after {
      width: 90%;
      margin: 0 auto;
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background-color: #cccccc;
    }
    a {
      color: #333;
      p {
        cursor: pointer;
        // 字符串截取
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        span {
          font-size: 12px;
          color: #808080;
          padding-right: 2px;
        }
      }
      .linkAuthor {
        span {
          line-height: 12px;
          padding-top: 3px;
          padding-left: 4em;
        }
      }
      &:hover {
        color: #e74248;
      }
    }
  }
}
</style>
