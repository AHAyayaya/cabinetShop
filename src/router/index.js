import Vue from 'vue'
import VueRouter from 'vue-router'


// 解决重复点击导航报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

// 懒加载页面
const Home = () => import('../views/home/Home.vue')
const Cabinet = () => import('../views/cabinet/Cabinet.vue')
const Census = () => import('../views/census/Census.vue')
const Dispatch = () => import('../views/dispatch/Dispatch.vue')
const Profile = () => import('../views/profile/Profile.vue')

const routes = [
  // 默认显示首页
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cabinet',
    component: Cabinet
  },
  {
    path: '/census',
    component: Census
  },
  {
    path: '/dispatch',
    component: Dispatch
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router