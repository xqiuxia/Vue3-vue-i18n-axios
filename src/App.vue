<template>
  <div>
    <router-view />
    <foot-bar v-show="$route.meta.showBar"></foot-bar>
  </div>
</template>

<script>
import footBar from "./components/footBar.vue";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { reactive, toRefs } from "vue";
export default {
  name: "App",
  components: { footBar },
  setup() {
    const route = useRoute();
    const state = reactive({
      showBar: route.meta ? route.meta.showBar : false,
    });
    return { ...toRefs(state) };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
