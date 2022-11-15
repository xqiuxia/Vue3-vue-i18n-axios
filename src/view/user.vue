<template>
  <div class="user">
    <div class="user_top">
      <lang :showWel="false"></lang>
      <div class="user_img_box">
        <div class="user_img">
          <van-icon name="manager" color="#014488" size="50px" />
        </div>
        <div class="user_name">{{ $store.state.username }}</div>
      </div>
    </div>
    <div class="user_content">
      <div class="log_out user_content_item" @click="logOut">
        <div class="user_content_item_left">
          <van-icon name="home-o" size="24px" color="#014488" /><span>{{
            $t("user.logOut")
          }}</span>
        </div>
        <div class="user_content_item_right"><van-icon name="arrow" /></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon, Dialog } from "vant";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, toRefs, onMounted } from "vue";
import lang from "../components/lang.vue";
export default {
  components: { lang, vanIcon: Icon },
  props: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const logOut = () => {
      Dialog.confirm({
        title: "提示",
        message: "确定退出登录？",
      })
        .then(() => {
          store.commit("updateUserName", "");
          router.push("/login");
        })
        .catch(() => {
          // on cancel
        });
    };
    onMounted(() => {
      console.log(store.state.username);
    });
    return {
      logOut,
    };
  },
};
</script>
<style scoped lang="less">
.user {
  .user_top {
    background: #6293c5;
    .user_img_box {
      padding: 40px 10px;

      display: flex;
      align-items: center;
      .user_img {
        background: #fff;
        width: 80px;
        height: 80px;
        border-radius: 80px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
      }
      .user_name {
        color: #ccc;
        font-size: 0.6rem;
        padding: 0.5rem 0.5rem;
      }
    }
  }

  .user_content {
    .user_content_item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.45rem;
      padding: 0.4rem;
      border-bottom: 0.01rem solid #ccc;
      .user_content_item_left {
        color: "#666";

        text-align: left;
        display: flex;
        align-items: center;

        span {
          margin-left: 0.4rem;
        }
      }
    }
    &:active {
      color: #014488;
    }
  }
}
</style>