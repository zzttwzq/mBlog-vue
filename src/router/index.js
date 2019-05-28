import Vue from 'vue'
import Router from 'vue-router'

import index from '../page/index.vue'

import projectList from '../page/project_list.vue'
import projectAdd from '../page/project_add.vue'
import projectEdit from '../page/project_edit.vue'
import projectManager from '../page/project_manager.vue'
import projectPreview from '../page/project_detial.vue'

import learnlist from '../page/learn_list.vue'
import learadd from '../page/learn_add.vue'
import learedit from '../page/learn_edit.vue'
import learnmanager from '../page/learn_manager.vue'
import learnpreview from '../page/learn_detial.vue'

import image from '../page/image.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },

    {
      path: '/projectList',
      name: 'projectList',
      component: projectList
    },
    {
      path: '/projectAdd',
      name: 'projectAdd',
      component: projectAdd
    },
    {
      path: '/projectEdit',
      name: 'projectEdit',
      component: projectEdit
    },
    {
      path: '/projectManager',
      name: 'projectManager',
      component: projectManager
    },
    {
      path: '/projectPreview',
      name: 'projectPreview',
      component: projectPreview
    },
    
    {
      path: '/learn',
      name: 'learn',
      component: learnlist
    },
    {
      path: '/addlearn',
      name: 'addlearn',
      component: learadd
    },
    {
      path: '/editlearn',
      name: 'editlearn',
      component: learedit
    },
    {
      path: '/managerlearn',
      name: 'managerlearn',
      component: learnmanager
    },
    {
      path: '/learnpreview',
      name: 'learnpreview',
      component: learnpreview
    },
    {
      path: '/image',
      name: 'image',
      component: image
    }
  ]
})
