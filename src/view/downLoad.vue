<template>
  <div class="down-load">
    <qrcode-vue :value="url" :size="200"></qrcode-vue>
  </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";
import { reactive, toRefs } from "vue";
export default {
  components: { QrcodeVue },
  setup() {
    const state = reactive({
      url: "http://172.16.122.117:7080",
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style scoped>
</style>