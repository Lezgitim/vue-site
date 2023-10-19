import BlogDetailsVue from "@/pages/BlogDetails.vue";
import BlogPageVue from "@/pages/BlogPage.vue";
import HomePageVue from "@/pages/HomePage.vue";
import ProjectDetailsVue from "@/pages/ProjectDetails.vue";
import ProjectPageVue from "@/pages/ProjectPage.vue";
import pages404Vue from "@/pages/pages404.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomePageVue,
    },
    {
      path: "/project",
      name: "project",
      component: ProjectPageVue,
    },
    {
      path: "/project/details",
      name: "projectDetails",
      component: ProjectDetailsVue,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogPageVue,
    },
    {
      path: "/blog/details",
      name: "blogDetails",
      component: BlogDetailsVue,
    },
    {
      path: "/404",
      name: "pages404",
      component: pages404Vue,
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
