import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Professors from './views/admin/Professors.vue'
import Students from './views/admin/Students.vue'
import Administration from './views/Administration.vue'
Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const router =  new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/admin',
      name: 'admin',
      component: Administration,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/admin/professors',
      name: 'professors',
      component: Professors,
      meta:{
        requiresAuth: true
      }
  },
    {
    path: '/admin/students',
    name: 'students',
    component: Students,
    meta:{
      requiresAuth: true
    }
  }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router;