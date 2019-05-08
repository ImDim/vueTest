/**
 * Если загружать модули поэтамно, то это упростить загрузку.
 */
const routes = [
  {
    name: 'map',
    path: '/map',
    component: () => import('@/features/map/main.vue'),
    title: 'Map',
    layout: 'DefaultLayout',
    isPublic: true
  },
  {
    name: 'test',
    path: '/test',
    component: () => import('@/features/test/main.vue'),
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
]

export default routes
