import { Context } from '@nuxt/types'
import { DEFAULT_LANG } from '~/config'

export default function (context: Context) {
  if (context.route.path === '/') {
    return context.redirect(`/${DEFAULT_LANG}`)
  }
}
