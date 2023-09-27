<template>
  <div class="center bandsPosition">
    <div class="bandsPosition__div bandsPosition__div_stil"></div>
    <div class="bandsPosition__div bandsPosition__div_stil"></div>
    <div class="bandsPosition__div bandsPosition__div_stil"></div>
    <div class="bands">
      <div id="app">
        <VueSiteHead></VueSiteHead>
        <VueSiteMain></VueSiteMain>
        <VueSiteFooter></VueSiteFooter>
      </div>
    </div>
  </div>
</template>

<script>
import VueSiteHead from './components/head.vue'
import VueSiteFooter from './components/footer.vue'
import VueSiteMain from './components/main.vue'

export default {
  name: 'App',
  components: {
    VueSiteHead,
    VueSiteMain,
    VueSiteFooter

  }
}
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.center {
  padding-left: calc(50% - 540px);
  padding-right: calc(50% - 540px);
}

.bandsPosition {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  &__div {

    &_stil {
      min-height: 4500px;
      border-left: 1px solid #E6E6E6;
      border-right: 1px solid #E6E6E6;
    }
  }

}

.bands {
  position: absolute;

}
</style>
