<template>
  <div class="language">
    <div class="welcome" v-show="showWel">Welcome,xieqx!</div>
    <div class="lang_box">
      <van-popover
        v-model:show="showPopover"
        :actions="actions"
        @select="onSelect"
        placement="bottom-end"
      >
        <template #reference>
          <div>{{ $store.state.lang == "zn" ? "简体中文" : "English" }}</div>
        </template>
      </van-popover>
    </div>
  </div>
</template>
<script>
import { Popover, Toast, Button } from "vant";
import { reactive, toRefs, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
export default {
  components: { vanPopover: Popover },
  props: {
    showWel: { type: Boolean },
  },
  setup(props, context) {
    const { locale } = useI18n();

    const showPopover = ref(false);
    const store = useStore();

    const actions = [{ text: "简体中文" }, { text: "English" }];
    const onSelect = (action) => {
      if (action.text == "简体中文") {
        locale.value = "zn";
        store.commit("updateLang", "zn");
      } else {
        locale.value = "en";
        store.commit("updateLang", "en");
      }
    };
    return {
      actions,
      showPopover,
      onSelect,
    };
  },
};
</script>
<style scoped lang="less">
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
</style>