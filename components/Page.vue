<template>
  <section v-if="story">
    <!-- Intro -->
    <Component
      v-if="story.content.intro && story.content.intro[0]"
      :is="story.content.intro[0].component"
      :blok="story.content.intro[0]"
    />

    <!-- Content -->
    <Component
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    />
  </section>
</template>

<script lang="ts">
import { StoryData } from 'storyblok-js-client'
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation } from 'vuex-class'

@Component({
  components: {
  },
  head() {
    const story: StoryData = (this as any).story
    const language: string = (this as any).language

    return {
      title: story.content.meta?.title || `Project | ${story.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: story.content.meta?.description || '',
        },
      ],
      link: [
        {
          rel: 'alternate',
          hreflang: language,
          href: `/${story.full_slug}`,
        }
      ]
    }
  }
})
export default class Page extends Vue {
  @Getter story!: StoryData | null
  @Getter language!: string

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
</script>

<style scoped lang="scss">
</style>
