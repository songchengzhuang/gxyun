<template>
    <!-- 链接item -->
    <ul class="linkRankingList">
        <li v-for="(item, index) in linkListArr" :key="item">
          <p class="linkTit"><span>{{index+1}}.</span>关于vue分享博客的链接关于vue分享博客的链接于vue分享博客的链接</p>
          <p class="linkAuthor"><span>———— 夜星空 夜星空于vue分享博客的链接空于vue分享博客的链接</span></p>
        </li>
    </ul>
</template>
<script>
export default {
  name: "linkRankingList",
  data() {
    return {
      linkListArr: [1, 2, 3, 4, 5, 6, 7, 8]
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
        padding-left: 4em;
      }
    }
    &:hover {
      color: #e74248;
    }
  }
}
</style>
