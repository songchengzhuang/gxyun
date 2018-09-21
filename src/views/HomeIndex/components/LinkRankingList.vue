<template>
    <!-- 链接item -->
    <ul class="linkRankingList">
        <li v-for="(item, index) in linkListArr" :key="index">
          <a :href="item.linkUrl" target="_blank">
            <p class="linkTit"><span>{{index+1}}.</span>{{item.linkTitle}}</p>
            <p class="linkAuthor"><span v-text="'———— ' + item.linkAuthor"></span></p>
          </a>
        </li>
    </ul>
</template>
<script>
export default {
  name: "linkRankingList",
  data() {
    return {
      linkListArr: []
    };
  },
  methods: {
    linkListDESC() {
      this.$ajax
        .get("/gxyundata/getlinkdata", {
          params: {
            linkSearch: "",
            linkAuthor: "",
            order: "DESC",
            page: 0,
            pageSize: 8
          }
        })
        .then(res => {
          this.linkListArr = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.linkListDESC();
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
