<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { useStore, mapState } from "vuex";
export default {
  setup() {
    const store = useStore();
    console.log(store.state);
  },
  data() {
    return {
      name: "",
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    console.log(...mapState(["name"]));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
