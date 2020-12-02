import { Context } from '@nuxt/types'
import { DEFAULT_LANG } from '~/config'

export default function (context: Context) {
  const language = context.route.params.language || DEFAULT_LANG

  if (context.isServer) {
    context.store.commit('setCacheVersion', context.app.$storyapi.cacheVersion)
  }

  if (language !== context.store.state.language) {
    context.store.commit('setLanguage', language)
  }
}
