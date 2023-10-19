<template>
  <div>
    <header>
      <nav class="center nav">
        <router-link to="/home">
          <div class="interno">
            <img
              width="34px"
              height="34px"
              src="../assets/logo.png"
              alt="logo"
            />
            <h3 class="nav__h3_logo">Interno</h3>
          </div></router-link
        >

        <div class="nav__div">
          <router-link to="/home"
            ><p href="/home" class="nav__div_Home nav__div_p">
              Home
            </p></router-link
          >
          <router-link to="/project"
            ><p class="nav__div_Project nav__div_p">Project</p></router-link
          >

          <router-link to="/project/details"
            > <p class="nav__div_Blog nav__div_p">(ProjDet)</p></router-link
          > 

          <router-link to="/blog"
            > <p class="nav__div_Blog nav__div_p">Blog</p></router-link
          >
          <router-link to="/blog/details"
            > <p class="nav__div_Blog nav__div_p">(BlogDet)</p></router-link
          > 
         
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "SiteHead",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
// * {
//   margin: 0px;
//   padding: 0px;
//   box-sizing: border-box;
// }

// .center {
//   padding-left: calc(50% - 540px);
//   padding-right: calc(50% - 540px);
// }

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
}

.nav .interno {
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav__div {
  display: flex;
  justify-content: space-between;
  width: 360px;
  &_p {
    color: #292f36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
  }
}

.nav__h3_logo {
  color: #292f36;
  font-family: DM Serif Display;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}
</style>
