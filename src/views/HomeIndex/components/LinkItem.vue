<template>
    <!-- 链接item -->
    <div class="LinkList">
        <h1>最新共享</h1>
        <div class="LinkItem" v-for="item in linkListArr" :key="item">
            <h2>关于vue分享博客的链接</h2>
            <p>https://pan.baidu.com/s/1CpT0vR67D0Q0hBXss0e2yA</p>
            <p><span>作者：scz</span><span>类别：vue</span><span>时间：2018-09-13</span></p>
        </div>
    </div>
</template>
<script>
export default {
  name: "LinkItem",
  data() {
    return {
      linkListArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    };
  }
};
</script>
<style lang="scss" scoped>
.LinkList {
  padding: 16px 20px;
  h1 {
    margin: 10px 0;
  }
  .LinkItem {
    padding: 10px 16px;
    margin: 12px 0;
    border-radius: 6px;
    box-shadow: 0px 0px 5px 1px #aaa;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 5px 1px #ff6666 inset;
    }
  }
}
</style>
