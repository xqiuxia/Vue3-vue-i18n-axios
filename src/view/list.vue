<template>
  <div class="list">
    <div class="search" ref="searchBox">
      <!-- <search-bar></search-bar> -->
      <van-search
        v-model="searchText"
        :placeholder="$t('index.searchTips')"
        @search="onSearch"
        show-action
        clear-trigger="always"
      >
        <template #action>
          <div @click="onClickButton">{{ $t("index.searchBtn") }}</div>
        </template></van-search
      >
    </div>
    <div class="list">
      <list-scroll :list="list" :height="height"></list-scroll>
    </div>
  </div>
</template>
<script>
import listScroll from "../components/listScroll.vue";
import searchBar from "@/components/searchBar.vue";
import { onMounted, reactive, toRefs, ref, nextTick } from "vue";
import { Search, Toast } from "vant";
export default {
  components: { listScroll, searchBar, vanSearch: Search },
  setup() {
    const searchBox = ref();
    const searchText = ref("");
    const onSearch = (val) => Toast(val);
    const onClickButton = () => Toast(searchText.value);
    const state = reactive({
      height: 0,
      list: [
        {
          title: "测试",
          sub: "测试的数据",
          two: "莫愁前路无知己",
          time: "2022-10-10",
        },
        {
          title: "测试",
          sub: "测试的数据",
          two: "莫愁前路无知己",
          time: "2022-10-10",
        },
      ],
    });
    onMounted(() => {
      nextTick(() => {
        state.height =
          document.documentElement.clientHeight -
          (searchBox.value?.clientHeight + 50);
      });
    });
    return {
      searchBox,
      onSearch,
      onClickButton,
      searchText,
      ...toRefs(state),
    };
  },
};
</script>
<style scoped>
</style>