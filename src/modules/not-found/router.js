export default {
    name: 'not-found',
    path: '*',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/modules/not-found/view/index.vue'),
    title: '404 Not Fount',
    layout: 'NotFound',
    isPublic: true
}