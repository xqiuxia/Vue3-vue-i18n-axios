<template>
  <div class="list_item">
    <div class="item-box" @click="gotoDetail">
      <div class="list_item_title">{{ item.title }}</div>
      <div class="list_item_content">
        <div>简介：{{ item.sub }}</div>
        <div>扼要：{{ item.two }}</div>
        <div>时间：{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  components: {},
  props: {
    item: {
      type: Object,
    },
  },
  setup(props, context) {
    const router = useRouter();
    const gotoDetail = () => {
      console.log(1);
      router.push({ path: "/detail", params: { id: "1" } });
    };
    return {
      gotoDetail,
    };
  },
};
</script>
<style scoped lang="less">
.list_item {
  padding: 8px;
  .item-box {
    text-align: left;
    padding: 5px;
    background: linear-gradient(88deg, #ffaf7e, #ff9958 70%, #ff7a63);
    box-shadow: 1px 1px 2px 2px #ccc;
    border-radius: 4px;
    .list_item_title {
      font-size: 14px;
      color: #333;
    }
    .list_item_content {
      font-size: 12px;
      color: #666;
      padding: 2px 0;
    }
  }
}
</style>