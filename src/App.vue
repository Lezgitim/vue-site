<template>
  <div id="app">
    <ProjectDetails></ProjectDetails>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import ProjectDetails from "./pages/ProjectDetails";
export default {
  name: "App",
  components: {
    ProjectDetails,
  },
  data() {
    return {
      res: "",
    };
  },
  
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');



* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.center {
  padding-left: calc(50% - 540px);
  padding-right: calc(50% - 540px);
}
</style>
