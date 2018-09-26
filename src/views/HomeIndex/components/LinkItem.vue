<template>
    <!-- 链接item -->
    <div class="LinkList">
        <div class="LinkItem" v-for="item in linkListArr" :key="item.linkId" v-if="item.linkShow">
          <div class="linkImg" >
            <div class="classNum">
              <p v-for="itemClass in item.linkClass.split(',')" :key="itemClass" v-text="itemClass"></p>
            </div>
          </div>
          <div class="LinkItemLeft">
            <h2 v-text="item.linkTitle"></h2>
            <p class="linkTxt"><span v-text="item.linkUrl"></span><span v-if="item.linkPwa" v-text="'密码：' + item.linkPwa" style="color: #515A6E"></span></p>
            <p class="authorTxt">
              <span class="authorSpan" v-text="item.linkAuthor"></span>
              <span class="timeSpan" v-text="timestampToTime(item.linkTime)"></span>
              <span class="praiseSpan">
                <span><Icon type="ios-thumbsup" /> {{item.linkPraise}}</span>
                <span><Icon type="ios-thumbsdown"></Icon> {{item.linkReport}}</span>
              </span>
            </p>
          </div>
          <div class="LinkItemRight">
            <a v-if="isLogin" :href="item.linkUrl" target="_blank">
              <Icon type="ios-link" size="42" color="#e6e6e6"></Icon>
            </a>
            <Icon v-if="!isLogin" type="ios-link" size="42" color="#f2f2f2"></Icon>
          </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "LinkItem",
  data() {
    return {
      linkListArr: [],
      linkSearch: ""
    };
  },
  computed: {
    ...mapState(["searchParam"]),
    searchListParam() {
      return this.searchParam;
    },
    isLogin() {
      if (
        localStorage.getItem("reg_gxy_user_name") &&
        localStorage.getItem("reg_gxy_user_id")
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    searchListParam() {
      this.linkSearch = this.searchListParam;
      this.linkListData();
    }
  },
  methods: {
    linkListData() {
      this.$ajax
        .get("/gxyundata/getlinkdata", {
          params: {
            linkSearch: this.linkSearch,
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
    }
  },
  mounted() {
    this.linkListData();
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
    padding: 16px 30px 10px 20px;
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
        line-height: 12px;
        color: #4285f4;
        span {
          display: inline-block;
        }
        .authorSpan {
          margin-right: 26px;
        }
        .timeSpan {
          color: #ccc;
        }
        .praiseSpan {
          float: right;
          span {
            width: 76px;
            margin-left: 12px;
          }
          span:first-child {
            color: #ff4f33;
          }
          span:last-child {
            color: #8b94a7;
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
}
</style>
