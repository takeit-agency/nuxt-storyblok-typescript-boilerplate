<template>
  <div>
    <Header />
    <main id="main" role="main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class LayoutDefault extends Vue {
}
</script>

<style lang="scss">
@import "../assets/scss/styles.scss";
</style>
