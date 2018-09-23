import Vue from 'vue'
import Router from 'vue-router'

import index from '../page/index.vue'
import project from '../page/project.vue'
import learns from '../page/learn.vue'
import image from '../page/image.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      // children: [
      //   {
      //     path: 'bar',
      //     component: page,
      //     meta: { requiresAuth: true }
      //   }
      // ]
    },
    {
      path: '/project',
      name: 'project',
      component: project,
    },
    {
      path: '/learns',
      name: 'learns',
      component: learns,
    },
    {
      path: '/image',
      name: 'image',
      component: image,
    }
  ]
})
