<template>
  <section v-if="story">
    <component
      v-for="blok in story.content.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    />
  </section>
</template>

<script lang="ts">
import { StoryData } from 'storyblok-js-client'
import { Component, Mixins } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import StoryblokPage from '../../mixins/storyblok-story-handler'

@Component
export default class PageSlug extends Mixins(StoryblokPage) {
  @Getter story!: StoryData | null
}
</script>

<style scoped lang="scss">
</style>
