<template>
    <ul class="LinkClass">
        <li v-for="item in classList" :key="item" v-text="item"></li>
    </ul>
</template>
<script>
export default {
  name: "LinkClass",
  data() {
    return {
      classList: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "JQuery",
        "ES6",
        "Vue",
        "React",
        "Angular",
        "webpack",
        "Node",
        "Sass"
      ]
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
    padding: 6px 10px;
    margin: 6px 10px;
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
