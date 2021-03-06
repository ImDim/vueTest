import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(Router)

/**
 * Проверка авторизирован ли пользователь.
 *
 * @param  {Route}    to   The route we want to access.
 * @param  {Route}    from The route from which we are coming from.
 * @param  {Function} next Callback for passing a route to be called next.
 * @return {void}
 */
function guardRoute (to, from, next) {
  // work-around to get to the Vuex store (as of Vue 2.0)
  const auth = router.app.$options.store.state.auth

  if (!auth.isLoggedIn) {
    next({path: '/login', query: { redirect: to.fullPath }})
  } else {
    next()
  }
}

/**
 * Экземпляр Router, содержащий все маршруты для приложения.
 */
const router = new Router({
  mode: 'history',
  base: '/app',
  // mode: 'history',  // <-- uncomment to turn on history mode (preferred)

  routes: routes.map(route => ({
    name: route.name,
    path: route.path,
    component: route.component,
    children: route.children || [],
    beforeEnter: (to, from, next) => {
      // Setup some per-page stuff.
      document.title = route.title
      store.dispatch('common/updateTitle', route.title)
      store.dispatch('common/updateLayout', route.layout)

      // Auth navigation guard.
      if (!route.isPublic) return guardRoute(to, from, next)

      next()
    }
  }))
})

export default router
