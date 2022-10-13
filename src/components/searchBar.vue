<template>
  <div class="search_bar">
    <van-dropdown-menu>
      <van-dropdown-item title="" ref="item">
        <van-cell center title="包邮">
          <template #right-icon> </template>
        </van-cell>
        <van-cell center title="团购">
          <template #right-icon> </template>
        </van-cell>
        <div style="padding: 5px 16px">
          <van-button type="danger" block round @click="onConfirm">
            确认
          </van-button>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>
<script>
import {
  Collapse,
  CollapseItem,
  DropdownMenu,
  DropdownItem,
  Cell,
  Button,
} from "vant";
import { reactive, toRefs, ref } from "vue";
export default {
  components: {
    vanCollapse: Collapse,
    vanCollapseItem: CollapseItem,
    vanDropdownMenu: DropdownMenu,
    vanDropdownItem: DropdownItem,
    vanCell: Cell,
    vanButton: Button,
  },
  props: {},
  setup(props, context) {
    const activeNames = ref(["1"]);
    const onConfirm = () => {};
    return {
      activeNames,
      onConfirm,
    };
  },
};
</script>
<style scoped>
</style>
