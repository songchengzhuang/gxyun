<template>
  <!-- 链接item -->
  <div class="LinkList">
    <div class="LinkItem" v-for="item in linkListArr" :key="item.linkId" v-if="item.linkShow">
      <div class="linkImg">
        <div class="classNum">
          <p v-for="itemClass in item.linkClass.split(',')" :key="itemClass" v-text="itemClass"></p>
        </div>
      </div>
      <div class="LinkItemLeft">
        <h2 v-if="!isLogin" v-text="item.linkTitle"></h2>
        <a v-if="isLogin" :href="item.linkUrl" target="_blank">
          <h2 v-text="item.linkTitle"></h2>
        </a>
        <p class="linkTxt"><span v-text="isLogin? item.linkUrl : item.linkUrl.slice(0,item.linkUrl.length-5)+'...'"></span><span v-if="item.linkPwa" v-text="' 密码：' + item.linkPwa" style="color: #515A6E"></span></p>
        <p class="authorTxt">
          <span class="authorSpan" v-text="item.linkAuthor"></span>
          <span class="timeSpan" v-text="timestampToTime(item.linkTime)"></span>
          <span class="praiseSpan">
            <span>
              <Icon type="ios-thumbs-up" size="16" /> {{item.linkPraise}}
            </span>
            <span>
              <Icon type="ios-thumbs-down" size="16" /> {{item.linkReport}}
            </span>
          </span>
        </p>
      </div>
      <div class="LinkItemRight">
        <a v-if="isLogin" :href="item.linkUrl" target="_blank">
          <Icon type="ios-link" size="42" color="#6c7893"></Icon>
        </a>
        <Icon v-if="!isLogin" type="ios-link" size="42" color="#f2f2f2"></Icon>
      </div>
    </div>
    <p class="moveLink">
      <span v-if="moveTxt && !noDataLink" @click="movelinkList">更多资料在等你...</span>
      <span v-if="!moveTxt && !noDataLink">亲，我也是有底线的</span>
      <span v-if="noDataLink">暂无数据呢！</span>
    </p>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "LinkItem",
  data() {
    return {
      isLogin: false,
      linkListArr: [],
      linkSearch: "",
      page: 0, // 从第几个开始
      pageSize: 10, // 每次添加是10个
      moveTxt: true,
      noDataLink: false // 暂无数据
    };
  },
  computed: {
    ...mapState(["searchParam", "useState"]),
    searchListParam() {
      return this.searchParam.trim();
    },
    yunUseState() {
      return this.useState;
    }
  },
  watch: {
    searchListParam() {
      this.linkSearch = this.searchListParam;
      this.linkListArr = [];
      this.page = 0;
      this.pageSize = 10;
      this.linkListData();
    },
    yunUseState() {
      this.isLoginFn();
      if (this.yunUseState.substr(0, 2) === "分享") {
        this.page = 0;
        this.pageSize = 10;
        this.linkListArr = [];
        this.linkListData();
      }
    }
  },
  methods: {
    isLoginFn() {
      if (
        localStorage.getItem("reg_gxy_user_name") &&
        localStorage.getItem("reg_gxy_user_id")
      ) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    linkListData() {
      this.$ajax
        .get("/gxyundata/getlinkdata", {
          params: {
            linkSearch: this.linkSearch,
            linkAuthor: "",
            order: "",
            page: this.page,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          this.moveTxt = true;
          this.linkListArr = this.linkListArr.concat(res.data.data);
          if (this.linkListArr.length && res.data.data.length < 10) {
            this.moveTxt = false;
          }

          if (this.linkListArr.length === 0 && res.data.data.length === 0) {
            this.noDataLink = true;
          } else {
            this.noDataLink = false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = change(date.getDate()) + " ";
      var h = change(date.getHours()) + ":";
      var m = change(date.getMinutes());
      return Y + M + D + h + m;
    },
    // 加载更多...
    movelinkList() {
      this.page += this.pageSize;
      this.linkListData();
    }
  },
  mounted() {
    this.linkListData();
    this.isLoginFn();
  }
};
function change(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}
</script>
<style lang="scss" scoped>
.LinkList {
  padding: 16px 20px;
  .LinkItem {
    padding: 12px 30px 6px 20px;
    margin: 12px 0;
    border-radius: 6px;
    box-shadow: 0px 0px 2px 1px #aaa;
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
      width: 70px;
      height: 70px;
      color: #fff;
      text-align: center;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      overflow: hidden;
      .classNum {
        width: 100%;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        overflow: hidden;
        p {
          font-size: 12px;
          line-height: 15px;
          margin-bottom: 2px;
          border-radius: 3px;
        }
        p:first-child {
          background-color: #f16543;
        }
        p:nth-child(2) {
          background-color: #19be6b;
        }
        p:nth-child(3) {
          background-color: #2db7f5;
        }
        p:last-child {
          background-color: #ffad33;
          margin-bottom: 0px;
        }
      }
    }
    .LinkItemLeft {
      margin-left: 90px;
      margin-right: 70px;
      h2 {
        font-size: 20px;
        line-height: 21px;
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
          margin-right: 6px;
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
        line-height: 18px;
        color: #4285f4;
        span {
          display: inline-block;
        }
        .authorSpan {
          margin-right: 26px;
        }
        .timeSpan {
          color: #999;
        }
        .praiseSpan {
          float: right;
          span {
            width: 66px;
            margin-left: 12px;
            i {
              padding: 0 3px 3px 0;
              cursor: pointer;
              &:hover {
                font-size: 18px !important;
              }
            }
          }
          span:first-child {
            color: #ff4f33;
            i {
              &:hover {
                color: #ff2300;
              }
            }
          }
          span:last-child {
            color: #8b94a7;
            i {
              &:hover {
                color: #6e7991;
              }
            }
          }
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
  .moveLink {
    font-size: 14px;
    line-height: 16px;
    color: #f16543;
    text-align: center;
    margin-top: 30px;
    letter-spacing: 1px;
    cursor: pointer;
    span:hover {
      color: #ff4f33;
      font-weight: 600;
    }
  }
}
</style>
