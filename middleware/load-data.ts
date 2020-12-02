import { Context } from '@nuxt/types'

export default async function (context: Context) {
  const version = context.isDev ? 'draft' : 'published'

  if (context.isServer) {
    context.store.commit('setCacheVersion', context.app.$storyapi.cacheVersion)
  }

  if (!context.store.state.settings._uid) {
    await context.store.dispatch('loadSettings', { version })
  }

  await context.store.dispatch('loadStory', {
    version,
    slug: context.route.params.slug || '',
  }).catch((res) => {
    context.error({ statusCode: res.response.status, message: res.response.data })
  })
}
