import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    name: 'CreateBlog',
    component: () => import(/* webpackChunkName: "createBlog" */  '../components/CreateBlog.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import(/* webpackChunkName: "blogs" */  '../components/Blogs.vue')
  },
  {
    path: '/blogs/:id',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */  '../components/Blog.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
