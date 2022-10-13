<template>
  <div class="list_scroll">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      :style="{ height: height + 'px', overflow: 'auto' }"
    >
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <list-item v-for="item in listN" :key="item" :item="item"></list-item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import listItem from "./listItem.vue";
import { List, PullRefresh } from "vant";
import { ref } from "vue";
export default {
  components: {
    listItem,
    vanList: List,
    vanPullRefresh: PullRefresh,
  },
  props: {
    list: { type: Array },
    height: { type: Number, default: 0 },
  },
  setup(props, context) {
    const listN = ref(props.list);
    const loading = ref(false);
    const finished = ref(false);
    const refreshing = ref(false);
    const onLoad = () => {
      setTimeout(() => {
        if (refreshing.value) {
          listN.value.push(props.list[0]);
          refreshing.value = false;
        }

        for (let i = 0; i < 10; i++) {
          listN.value.push(props.list[0]);
        }
        loading.value = false;

        if (listN.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };
    const onRefresh = () => {
      // 清空列表数据
      finished.value = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };
    return {
      listN,
      loading,
      finished,
      refreshing,
      onLoad,
      onRefresh,
    };
  },
};
</script>
<style scoped>
</style>