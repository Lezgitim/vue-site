<template>
  <div>
    <header>
      <Head></Head>
    </header>
    <main class="mainProjectDetails">
      <div class="pictureWidthOn pictureWidthOn_style"></div>
      <article class="articleTextMainProjectDetails">
        <div
          class="articleTextMainProjectDetails__div-center articleTextMainProjectDetails__div-center_style"
        >
          <h1
            class="articleTextMainProjectDetails__head1 articleTextMainProjectDetails__head1_stile"
          >
            {{ text.head }}
          </h1>
          <p
            class="articleTextMainProjectDetails__paragraph articleTextMainProjectDetails__paragraph_stile"
          >
            {{ text.paragraph1 }}
          </p>
          <p
            class="articleTextMainProjectDetails__paragraph articleTextMainProjectDetails__paragraph_stile"
          >
            {{ text.paragraph2 }}
          </p>
        </div>
      </article>
      <div class="projectDetailsSlider projectDetailsSlider_fon"></div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/footer'
import Head from "../components/head";
import store from "@/store";
export default {
  components: {
    Footer, Head },
  name: "VueSiteProjectDetails",

  data() {
    return {};
  },

  computed: {
    text() {
      return store.state.lists;
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.pictureWidthOn {
  &_style {
    width: 100vw;
    height: 350px;
    background: url(../assets/PhotoProjectDetails.jpg),
      lightgray 50% / cover no-repeat;
  }
}

.articleTextMainProjectDetails {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__div-center {
    &_style {
      margin-top: 100px;
      padding-left: calc(50% - 220px);
      padding-right: calc(50% - 220px);
    }
  }
  &__head1 {
    &_stile {
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%; /* 62.5px */
      letter-spacing: 1px;
    }
  }
  &__paragraph {
    &_stile {
      color: #4d5053;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 33px */
      letter-spacing: 0.22px;
    }
  }
}

.projectDetailsSlider {
 
  &_fon {
    background: url(../assets/projectDetailsSlider.png),
      lightgray 50% / cover no-repeat;
    height: 800px;
    margin-left: calc(50% - 540px);
    margin-right: calc(50% - 540px);
    margin-top: 50px;
    margin-bottom: 50px;
    border-radius: 10%;
  }
}
</style>
