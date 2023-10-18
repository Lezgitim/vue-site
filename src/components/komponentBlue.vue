<template>
  <div class="blue blue_style"></div>
</template>

<script>
export default {
  name: "komponentBlue",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.blue {
  top: 50%;
  left: 50%;
  &_style {
    width: 600px;
    height: 700px;
    background-color: blue;
  }
}
</style>
