<template>
  <Page />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Page from '~/components/Page.vue'

@Component({
  components: {
    Page,
  },
})
export default class PageSlug extends Vue {
}
</script>

<style scoped lang="scss">
</style>
