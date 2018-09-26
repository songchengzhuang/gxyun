<template>
    <ul class="LinkClass">
        <li v-for="item in classList" :key="item.classId">
          <p v-text="item.className"></p>
        </li>
    </ul>
</template>
<script>
export default {
  name: "LinkClass",
  data() {
    return {
      classList: []
    };
  },
  methods: {
    // 获取分类数据
    getClassList() {
      this.$ajax
        .get("/gxyundata/getLinkClass")
        .then(res => {
          this.classList = res.data.data;
          if (typeof Storage !== "undefined") {
            sessionStorage.classList = JSON.stringify(res.data.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    if (typeof Storage !== "undefined") {
      if (!sessionStorage.classList) {
        this.getClassList();
      } else {
        this.classList = JSON.parse(sessionStorage.classList);
      }
    } else {
      this.getClassList();
    }
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
