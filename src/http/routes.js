/**
 * Если загружать модули поэтамно, то это упростить загрузку.
 */
const routes = [
  {
    name: 'map',
    path: '/map',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/features/map/main.vue'),
    title: 'Map',
    layout: 'DefaultLayout',
    isPublic: true
  },
  {
    name: 'test',
    path: '/test',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/features/test/main.vue'),
    title: 'Test',
    layout: 'DefaultLayout',
    isPublic: true,
    children: [
      {
        name: 'Test',
        path: '',
        title: 'Test',
        component: () => import('@/features/test/components/test.vue'),
      },
      {
        name: 'Extra',
        path: 'extra',
        title: 'Extra',
        component: () => import('@/features/test/components/extra.vue'),
      }
    ]
  },
  {
    name: 'not-found',
    path: '*',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/features/not-found/main.vue'),
    title: '404 Not Fount',
    layout: 'NotFound',
    isPublic: true
  }
  // {
  //   name: 'login',
  //   path: '/login',
  //   component: () => import(/* webpackChunkName: "login" */ '@/features/login/main.vue'),
  //   title: 'Login',
  //   layout: 'PublicLayout',
  //   isPublic: true
  // },
  // {
  //   name: 'home',
  //   path: '/',
  //   component: () => import(/* webpackChunkName: "dashboard" */ '@/features/dashboard/main.vue'),
  //   title: 'Dashboard',
  //   layout: 'DefaultLayout',
  //   isPublic: false
  // },
  // {
  //   name: 'dashboard',
  //   path: '/dashboard',
  //   component: () => import(/* webpackChunkName: "dashboard" */ '@/features/dashboard/main.vue'),
  //   title: 'Dashboard',
  //   layout: 'DefaultLayout',
  //   isPublic: false
  // },
  // {
  //   name: 'account',
  //   path: '/account',
  //   component: () => import(/* webpackChunkName: "account" */ '@/features/account/main.vue'),
  //   title: 'Account',
  //   layout: 'DefaultLayout',
  //   isPublic: false
  // },
  // {
  //   name: 'tutorial',
  //   path: '/examples/tutorial',
  //   component: () => import(/* webpackChunkName: "tutorial" */ '@/features/tutorial/main.vue'),
  //   title: 'Tutorial',
  //   layout: 'DefaultLayout',
  //   isPublic: false
  // },
  // {
  //   name: 'wip',
  //   path: '/examples/wip',
  //   component: () => import(/* webpackChunkName: "wip" */ '@/features/wip/main.vue'),
  //   title: 'Wip',
  //   layout: 'DefaultLayout',
  //   isPublic: false
  // }
]

export default routes
