<template>
  <div>
    <div class="center bandsPosition">
      <div class="bandsPosition__div bandsPosition__div_stil"></div>
      <div class="bandsPosition__div bandsPosition__div_stil"></div>
      <div class="bandsPosition__div bandsPosition__div_stil"></div>
      <div class="bands">
        <div>
          <Head></Head>
          <Main></Main>
          <Footer></Footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Main from "../components/main";
import Head from "../components/head";
import Footer from "../components/footer";
export default {
  components: {
    Main,
    Head,
    Footer,
  },
  name: "ProjectDetails",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.bandsPosition {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  &__div {
    &_stil {
      min-height: 4500px;
      border-left: 1px solid #e6e6e6;
      border-right: 1px solid #e6e6e6;
    }
  }
}

.bands {
  position: absolute;
}
</style>
