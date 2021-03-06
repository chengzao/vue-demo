// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

import ElementUI from '@/components/elementUI'
import Other from '@/views/todo/Other.vue'
import Home from '@/views/todo/Home.vue'
import User from '@/views/todo/User.vue'

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'HelloWorld',
    component: () =>
      import(/* webpackChunkName: 'helloworld' */ '@/views/hello/HelloWorld')
  },
  {
    path: '/ui',
    name: 'ElementUI',
    component: ElementUI
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: 'todo' */ '@/views/todo/Todo'),
    children: [
      {
        path: 'item',
        name: 'item',
        components: {
          default: Home,
          right: Other
        }
      },
      { path: ':username', component: User }
    ]
  },
  {
    path: '/other',
    // path: '/other/:id',
    props: true,
    // props: (route) => ({id: route.params}),
    // props: (route) => ({id: route.query}),
    name: 'other',
    component: () =>
      import(/* webpackChunkName: 'other' */ '@/views/other.vue'),
    beforeEnter: (to, from, next) => {
      console.log('other routes before enter')
      next()
    },
    scrollBehavior,
    alias: ['/baz', 'baz-alias']
  }
]
