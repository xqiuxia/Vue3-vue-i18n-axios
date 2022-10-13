<template>
  <div class="footBar">
    <van-tabbar
      v-model="currentIndex"
      route
      active-color="#014488"
      inactive-color="#333"
      @change="changeBar"
    >
      <!-- <van-tabbar-item
        v-for="item in tabs"
        :key="item.icon"
        :icon="item.icon"
        :to="item.url"
        >{{ item.title }}</van-tabbar-item
      > -->
      <van-tabbar-item icon="home-o" to="/index">{{
        $t("index.index")
      }}</van-tabbar-item>
      <van-tabbar-item icon="records" to="/list">{{
        $t("index.listNow")
      }}</van-tabbar-item>
      <van-tabbar-item icon="label-o" to="/totalList">{{
        $t("index.listAll")
      }}</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o" to="/user">{{
        $t("index.user")
      }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
import { reactive, toRefs, ref } from "vue";
import { useI18n } from "vue-i18n";
export default {
  components: {
    vanTabbar: Tabbar,
    vanTabbarItem: TabbarItem,
  },
  setup() {
    const currentIndex = ref(1);
    const { t } = useI18n();

    const state = reactive({
      tabs: [
        {
          title: ref(t("index.index")),
          url: "/index",
          icon: "home-o",
        },
        {
          title: "列表",
          url: "/list",
          icon: "records",
        },
        {
          title: "总列表",
          url: "/totalList",
          icon: "label-o",
        },
        {
          title: "我的",
          url: "/user",
          icon: "user-circle-o",
        },
      ],
    });
    const changeBar = (index) => {
      currentIndex.value = index;
    };
    return {
      currentIndex,
      ...toRefs(state),
      changeBar,
    };
  },
};
</script>
<style scoped>
</style>