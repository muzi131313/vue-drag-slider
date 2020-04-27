import Vue from 'vue'
import Router from 'vue-router'

import ItemContainer from './views/containers/item-container.vue'
import ProjectContainer from './views/containers/project-container.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/item',
      name: 'item',
      component: ItemContainer,
      children: [
        {
          path: '/project',
          name: 'project',
          component: ProjectContainer,
          children: [
            {
              path: '/images',
              name: 'images',
              component: () => import(/* webpackChunkName: "image" */ './views/Images.vue')
            }
          ]
        }
      ]
    }
  ]
})
