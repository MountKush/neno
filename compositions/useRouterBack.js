import { computed } from '@vue/composition-api'
import router from '~/router'
import store from '~/store'

export default function() {
  /**
   * Determines if the step backwards in history will remain within the app or exit.
   */
  const doesRouteBackExist = computed(() => {
    return !!store?.state?.route?.from?.name
  })

  /**
   * Goes one step backwards in the history, but instead of leaving app when `route.from`
   * is exhausted it will default to the `baseRoute`.
   * @param {Object} [baseRoute] The default route
   * @param {string} baseRoute.name The route name
   */
  const routerGoBack = (baseRoute = { name: 'index' }) =>
    doesRouteBackExist ?
      router.go(-1) :
      router.push(baseRoute)

  return {
    doesRouteBackExist,
    routerGoBack
  }
}
