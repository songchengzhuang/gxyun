<template>
    <!-- 链接item -->
    <div class="LinkList">
        <h1>最新共享</h1>
        <div class="LinkItem"></div>
    </div>
</template>
<script>
export default {
  name: "LinkItem",
  data() {
    return {
      //
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
    // width: 90%;
    height: 80px;
    margin: 0 auto;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
}
</style>
