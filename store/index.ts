import { ActionContext, ActionTree, GetterTree } from 'vuex'
import Storyblok, { Stories, StoryblokResult, StoryData } from 'storyblok-js-client'
import { DEFAULT_LANG } from '~/config'

interface Settings {
}

interface RootState {
  cacheVersion: string,
  language: string,
  settings: Settings
  story: StoryData | null
  stories: Stories | null
}

export const state = (): RootState => ({
  cacheVersion: '',
  language: DEFAULT_LANG,
  settings: {
    main_navi: []
  },
  story: null,
  stories: null,
})

export const mutations = {
  setSettings(state: RootState, settings: Settings) {
    state.settings = settings
  },
  setLanguage(state: RootState, language: string) {
    state.language = language
  },
  setCacheVersion(state: RootState, version: string) {
    state.cacheVersion = version
  },
  setStory(state: RootState, story: StoryData) {
    state.story = story
  },
  setStories(state: RootState, stories: Stories) {
    state.stories = stories
  },
}

export const getters: GetterTree<RootState, any> = {
  cacheVersion: (state: RootState) => state.cacheVersion,
  language: (state: RootState) => state.language,
  settings: (state: RootState) => state.settings,
  story: (state: RootState) => state.story,
  stories: (state: RootState) => state.stories,
}

export const actions: ActionTree<RootState, any> = {
  loadSettings(ctx: ActionContext<RootState, any>, payload: { version: string }) {
    return ((this as any).$storyapi as Storyblok)
      .get(`cdn/stories/${ctx.state.language}/settings`, {
        version: payload.version
      })
      .then((res: StoryblokResult) => {
        ctx.commit('setSettings', res.data.story.content)
      })
  },
  loadStory(ctx: ActionContext<RootState, any>, payload: { version: string, slug: string }) {
    return ((this as any).$storyapi as Storyblok)
      .get(`cdn/stories/${ctx.state.language}/${payload.slug}`, {
        version: payload.version
      })
      .then((res: StoryblokResult) => {
        ctx.commit('setStory', res.data.story)
      })
  },
  loadStories(ctx: ActionContext<RootState, any>, payload: { version: string }) {
    return ((this as any).$storyapi as Storyblok)
      .get('cdn/stories', {
        version: payload.version,
        starts_with: `${ctx.state.language}/blog`,
        cv: ctx.state.cacheVersion,
      })
      .then((res: Stories) => {
        ctx.commit('setStories', res)
      })
  },
}
