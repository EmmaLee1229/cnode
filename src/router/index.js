import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from "../components/PostList";
import Article from "../components/Article";
import User_info from "../components/User_info";
import SlideBar from "../components/SlideBar";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    components: {
      main:PostList
    }
  },
  {
    path: '/topic/:id&&author=:name',
    name: 'post_content',
    components:{
      main: Article,
      slideBar:SlideBar
    }
  },
  {
    path:'/user/:name',
    name:'user_info',
    components:{
      main: User_info
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
