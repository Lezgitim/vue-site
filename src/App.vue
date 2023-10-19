<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {
      res: "",
    };
  },

  created() {
    this.$router.push({ name: "home" });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  text-decoration: none;
}

.center {
  padding-left: calc(50% - 540px);
  padding-right: calc(50% - 540px);
}
</style>
