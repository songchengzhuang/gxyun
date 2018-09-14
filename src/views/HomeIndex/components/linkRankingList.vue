<template>
    <!-- 链接item -->
    <ul class="linkRankingList">
        <li v-for="(item, index) in linkListArr" :key="item"><p><span>{{index+1}}.</span>关于vue分享博客的链接关</p></li>
    </ul>
</template>
<script>
export default {
  name: "linkRankingList",
  data() {
    return {
      linkListArr: [1, 2, 3, 4, 5, 6, 7]
    };
  }
};
</script>
<style lang="scss" scoped>
.linkRankingList {
  list-style: none;
  margin-top: 26px;
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
      span {
        font-size: 12px;
        color: #808080;
        padding-right: 2px;
      }
    }
  }
}
</style>
