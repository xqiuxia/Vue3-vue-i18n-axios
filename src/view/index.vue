<!-- 首页 -->
<template>
  <div class="index">
    <lang :showWel="true"></lang>
    <div class="banner">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        :height="200"
        indicator-color="white"
      >
        <van-swipe-item v-for="(img, index) in imgs" :key="index"
          ><img :src="img"
        /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="index-box">
      <div class="title">{{ $t("index.zonglan") }}</div>
      <div class="count-box">
        <div class="current-count count-item">
          <div class="count">123</div>
          <div class="tips">{{ $t("index.index") }}</div>
        </div>
        <div class="all-count count-item">
          <div class="count">123456</div>
          <div class="tips">{{ $t("index.all") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import api from "../api/api";
import { Swipe, SwipeItem, Popover, Toast, Button } from "vant";
import { reactive, toRefs, ref, onMounted } from "vue";
import lang from "../components/lang.vue";
import api from "../api/api";
// import { getCurrentInstance } from "@vue/runtime-core";
export default {
  components: {
    vanSwipe: Swipe,
    vanSwipeItem: SwipeItem,
    vanPopover: Popover,
    vanButton: Button,
    lang,
  },
  setup() {
    const showPopover = ref(false);
    // let { ctx } = getCurrentInstance();
    const state = reactive({
      imgs: [
        require("../assets/banner1.jpeg"),
        require("../assets/banner2.jpeg"),
      ],
    });
    onMounted(() => {
      api.getList({ keyword: "", name: "ADF103" }).then((res) => {
        console.log(res);
      });
    });
    return {
      showPopover,
      ...toRefs(state),
    };
  },

  // methods: {
  //   checknet() {
  //     api
  //       .getData({
  //         userName: "",
  //         password: "",
  //         // verificationCode: "",
  //         radio: "1",
  //       })
  //       .then((res) => {
  //         console.log(res);
  //       });
  //   },
  // },
  // created() {},
  // mounted() {},
};
</script>
<style scoped lang="less">
.index {
  background: #eee;
  height: 100vh;
  font-size: 0.6rem;
  .language {
    display: flex;
    align-items: center;
    font-size: 12px;
    justify-content: flex-end;
    padding: 4px 5px;
    .lang_box {
      border: 1px solid #333;
      padding: 1px 4px;
      margin-left: 10px;
      border-radius: 4px;
      height: 20px;
      width: 50px;
      line-height: 20px;
    }
  }
  .banner {
    .van-swipe-item {
      img {
        width: 100%;
      }
    }
  }

  .index-box {
    padding: 5px;
    .title {
      color: #014488;
      font-size: 14px;
      padding: 10px 0;
    }
    .count-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .count-item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 45%;
        height: 100px;
        color: #fff;
        border-radius: 10px;
        box-shadow: 1px 1px 4px 1px #ccc;
      }
      .current-count {
        // background: linear-gradient(90deg, #e07146, #f27464);
        background: linear-gradient(88deg, #ffaf7e, #ff9958 70%, #ff7a63);
      }
      .all-count {
        background: linear-gradient(88deg, #7e9cff, #326fd1 70%, #1b55b8);
      }
      .count {
        font-size: 18px;
        // padding: 10px 0;
      }
      .tips {
        font-size: 12px;
        text-align: right;
        padding: 0 5px;
      }
    }
  }
}
</style>