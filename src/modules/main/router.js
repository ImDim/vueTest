export default {
    name: 'main',
    path: '/',
    component: () => import('@/modules/main/view/index.vue'),
    title: 'Main',
    layout: 'DefaultLayout',
    isPublic: true
};