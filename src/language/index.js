import { createI18n } from "vue-i18n";
import { useStore } from "vuex";
import zn from "./zn";
import en from "./en";
const store = useStore();
const i18n = createI18n({
  locale: "zn", // 定义默认语言为中文
  legacy: false, // 让 setup 函数可以通过 t 访问
  globalInjection: true, // 让 template 可以像 vue2 那样使用 $t 来访问
  //   fallbackLocale: "zn", //切换 zh-cn en-us 控制展示文字
  messages: {
    zn,
    en,
  },
});
export default i18n;
