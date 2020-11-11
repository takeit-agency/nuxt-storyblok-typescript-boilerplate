<template>
  <h1 class="headline">
    {{ blok.text }}
  </h1>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
})
export default class Headline extends Vue {
  @Prop() blok!: {
    text: string
  }
}
</script>

<style lang="scss" scoped>
.headline {
  font-size: 20px;
}
</style>
