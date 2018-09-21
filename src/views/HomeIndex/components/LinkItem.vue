<template>
    <!-- 链接item -->
    <div class="LinkList">
        <div class="LinkItem" v-for="item in linkListArr" :key="item.linkId" v-if="item.linkShow">
          <div class="linkImg" v-text="item.linkTitle.slice(0,1)"></div>
          <div class="LinkItemLeft">
            <h2 v-text="item.linkTitle"></h2>
            <p class="linkTxt"><span v-text="item.linkUrl"></span><span v-if="item.linkPwa" v-text="'密码：' + item.linkPwa" style="color: #515A6E"></span></p>
            <p class="authorTxt"><span v-text="'作者：' + item.linkAuthor"></span><span v-text="'类别：' + item.linkClass"></span><span v-text="'时间：' + item.linkTime"></span></p>
          </div>
          <div class="LinkItemRight">
            <a :href="item.url" target="_blank">
              <Icon type="ios-link" size="42" color="#e6e6e6"></Icon>
            </a>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "LinkItem",
  data() {
    return {
      linkListArr: []
    };
  },
  methods: {
    linkListData() {
      this.$ajax
        .get("/gxyundata/getlinkdata", {
          params: {
            linkSearch: "",
            linkAuthor: "",
            order: "",
            page: 0,
            pageSize: 10
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
    this.linkListData();
  }
};
</script>
<style lang="scss" scoped>
.LinkList {
  padding: 16px 20px;
  .LinkItem {
    padding: 16px 36px 12px 26px;
    margin: 12px 0;
    border-radius: 6px;
    box-shadow: 0px 0px 5px 1px #aaa;
    position: relative;
    &:hover {
      box-shadow: 0px 0px 5px 1px #ff6666 inset;
      h2 {
        font-size: 20px;
        line-height: 20px;
        /*图片文字样式*/
        background: #cc1a20 url(../../../assets/images/textBg.png) repeat center;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        cursor: pointer;
      }
    }
    .linkImg {
      width: 60px;
      height: 60px;
      font-size: 22px;
      font-weight: 600;
      color: #000;
      text-align: center;
      line-height: 60px;
      border-radius: 6px;
      background: #f2f2f2;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      overflow: hidden;
    }
    .LinkItemLeft {
      margin-left: 80px;
      margin-right: 100px;
      h2 {
        font-size: 20px;
        line-height: 20px;
        color: #333;
        margin-bottom: 12px;
        letter-spacing: 1px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
      }
      .linkTxt {
        font-size: 14px;
        line-height: 18px;
        color: #808080;
        margin-bottom: 10px;
        display: -webkit-box;
        overflow: hidden;
        white-space: normal !important;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        span {
          margin-right: 8px;
        }
      }
      .authorTxt {
        font-size: 12px;
        transform: scale(0.9);
        transform-origin: 0 0;
        -ms-transform: scale(0.9); /* IE 9 */
        -ms-transform-origin: 0 0; /* IE 9 */
        -webkit-transform: scale(0.9); /* Safari 和 Chrome */
        -webkit-transform-origin: 0 0; /* Safari 和 Chrome */
        -moz-transform: scale(0.9); /* Firefox */
        -moz-transform-origin: 0 0; /* Firefox */
        -o-transform: scale(0.9); /* Opera */
        -o-transform-origin: 0 0;
        line-height: 12px;
        color: #4285f4;
        span {
          display: inline-block;
          margin-right: 22px;
        }
      }
    }

    .LinkItemRight {
      position: absolute;
      top: 50%;
      right: 26px;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      overflow: hidden;
      .ivu-icon {
        padding: 6px;
        cursor: pointer;
        &:hover {
          color: #ccc !important;
        }
      }
    }
  }
}
</style>
