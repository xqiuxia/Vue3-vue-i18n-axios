<template>
  <div class="login">
    <lang :showWel="false"></lang>
    <div class="banner">
      <van-icon name="free-postage" size="80" color="#014488" />
    </div>
    <div class="login-box">
      <div class="username">
        <van-field
          v-model="username"
          :label="$t('login.userName')"
          :placeholder="$t('login.userNameTips')"
        />
      </div>
      <div class="passw">
        <van-field
          v-model="password"
          :label="$t('login.password')"
          :placeholder="$t('login.passwordTips')"
        />
      </div>
      <div class="type" @click="toggle('register')" v-show="type == 'login'">
        {{ $t("login.registerT") }}
      </div>
      <div class="type" @click="toggle('login')" v-show="type == 'register'">
        {{ $t("login.loginT") }}
      </div>
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
export default {
  components: { lang, vanField: Field, vanButton: Button, vanIcon: Icon },
  setup() {
    const router = useRouter();
    const state = reactive({
      username: "",
      password: "",
      type: "login",
      showLoading: false,
      disabled: false,
    });
    const toggle = (v) => {
      state.type = v;
    };
    const submit = () => {
      if (state.type == "login") {
        Toast.success("登录");
      } else {
        Toast.success("注册");
      }
      router.replace("/index");
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
    padding: 0px 10px;
    text-align: left;
  }
  .type {
    color: #014488;
    font-size: 14px;
    padding: 5px 0;
  }
}
</style>