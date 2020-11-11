import { Vue, Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
import { Getter, Mutation } from 'vuex-class'
import { StoryData } from 'storyblok-js-client'

@Component({
  asyncData(context: Context) {
    const version = context.isDev ? 'draft' : 'published'
    const slug = context.route.name === 'language-blog-slug' ? `blog/${context.route.params.slug}` : context.route.params.slug

    return context.store.dispatch('loadStory', { version, slug })
      .catch((res) => {
        context.error({ statusCode: res.response.status, message: res.response.data })
      })
  }
})
export default class StoryblokStoryHandler extends Vue {
  @Getter story!: StoryData | null

  @Mutation setStory!: (data: StoryData) => void

  mounted() {
    ((this as any).$storybridge as StoryblokBridge)
      .on(['input', 'published', 'change'], (payload?: StoryblokEventPayload) => {
        if (payload === undefined) {
          return
        }

        if (payload.action === 'input') {
          // Inject content on the input payload
          if (payload.story.id === this.story?.id) {
            this.setStory(payload.story)
          }

        } else if (payload.reload === true) {
          // Reload the page on save events
          window.location.reload();
        }
      });
  }
}
