/**
 * Если загружать модули поэтапно, то это упростит загрузку.
 */

import main from '@/modules/main/router.js'
import notFound from '@/modules/not-found/router.js'

const routes = [
  main,
  notFound
]

export default routes
