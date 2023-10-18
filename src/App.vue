<template>
  <div id="app">
    <ProjectPage></ProjectPage>
    <Pages404></Pages404>
  </div>
</template>

<script>
import Pages404 from './pages/pages404'
import ProjectPage from './pages/ProjectPage'

// import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Pages404,
    ProjectPage,
   
    
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
