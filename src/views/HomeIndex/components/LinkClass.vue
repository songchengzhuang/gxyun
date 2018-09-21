<template>
    <ul class="LinkClass">
        <li v-for="item in classList" :key="item">
          <p v-text="item"></p>
        </li>
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
  background: #fff;
  color: #0079c4;
  margin-bottom: 16px;
  li {
    float: left;
    list-style: none;
    width: 50%;
    height: 36px;
    line-height: 36px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
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
