<template>
  <div class="login">
    <lang :showWel="false"></lang>
    <div class="banner">
      <van-icon name="free-postage" size="80" color="#014488" />
    </div>
    <div class="login-box">
      <div class="username input_box">
        <van-field
          v-model="username"
          :label="$t('login.userName')"
          :placeholder="$t('login.userNameTips')"
        />
      </div>
      <div class="passw input_box">
        <van-field
          v-model="password"
          type="password "
          :label="$t('login.password')"
          :placeholder="$t('login.passwordTips')"
        />
      </div>
      <!-- <div class="type" @click="toggle('register')" v-show="type == 'login'">
        {{ $t("login.registerT") }}
      </div>
      <div class="type" @click="toggle('login')" v-show="type == 'register'">
        {{ $t("login.loginT") }}
      </div> -->
      <div class="btn">
        <van-button
          type="primary"
          block
          round
          :loading="showLoading"
          :disabled="disabled"
          @click="submit"
          >{{
            type == "login" ? $t("login.login") : $t("login.register")
          }}</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import { Field, Button, Icon, Toast } from "vant";
import { useRouter } from "vue-router";
import lang from "../components/lang.vue";
import api from "../api/api";
import { useStore } from "vuex";
export default {
  components: { lang, vanField: Field, vanButton: Button, vanIcon: Icon },
  setup() {
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      username: "ADF103",
      password: "S5HYQN",
      type: "login",
      showLoading: false,
      disabled: false,
    });
    const toggle = (v) => {
      state.type = v;
    };
    const submit = () => {
      if (state.type == "login") {
        api
          .login({ username: state.username, password: state.password })
          .then((res) => {
            if (res.state == "success") {
              store.commit("updateUserName", state.username);
              router.replace("/list");
            } else {
              Toast.success("用户名或密码错误！");
            }
          });
      } else {
        // Toast.success("注册");
      }
      // router.replace("/index");
    };
    return {
      ...toRefs(state),
      toggle,
      submit,
    };
  },
};
</script>
<style scoped lang="less">
.login {
  .banner {
    padding: 20px;
  }
  .login-box {
    .input_box {
      border: 0.01rem solid #014488;
      border-radius: 4px;
      padding: 2px;
    }
    .passw {
      margin: 5px 0;
    }
    padding: 0px 10px;
    text-align: left;
  }
  .type {
    color: #014488;
    font-size: 14px;
    padding: 5px 0;
  }
  .btn {
    margin-top: 30px;
  }
}
</style>