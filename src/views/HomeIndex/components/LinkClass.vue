<template>
    <ul class="LinkClass">
        <li v-for="item in [1,3,2,4,5,6]" :key="item">{{item+"Vue"}}</li>
    </ul>
</template>
<script>
export default {
  name: "LinkClass",
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="scss" scoped>
.LinkClass {
  padding: 10px 8px 22px 8px;
  background: #f5f7f9;
  li {
    float: left;
    list-style: none;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 6px 12px;
    margin: 6px 12px;
    box-shadow: 1px 1px 1px #fff;
    border-radius: 3px;
    background: #fff;
    cursor: pointer;
    &:hover {
      color: #d41b1b;
      /* 渐变色 */
      background-image: -webkit-linear-gradient(
        top,
        rgba(231, 66, 72, 0),
        rgba(231, 66, 72, 0.8)
      );
      background-image: linear-gradient(
        top,
        rgba(231, 66, 72, 0),
        rgba(231, 66, 72, 0.8)
      );
    }
  }
  &:after {
    content: "\0020";
    display: block;
    height: 0;
    clear: both;
  }
  zoom: 1;
}
</style>
