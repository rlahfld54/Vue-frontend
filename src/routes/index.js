import Vue from 'vue'
import VueRouter from "vue-router";
import Index from '@/components/MovieIndexPage.vue'
import Show from '@/components/MovieShowPage.vue'
import Hello from '@/components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
      path: "/",
      redirect: "/hello",
      name: "Hello",
      component: Hello,
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
  },
  {
    path: '/:id',
    name: 'show',
    component: Show
  }

];

const router = new VueRouter({
  routes,
});

export default router;