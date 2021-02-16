<template>
  <h1>{{ attributes.title }}</h1>
  <c />
</template>

<script>
import { VueComponent as C, attributes } from '../../../assets/content/about/motifs.md'

export default {
  name: 'Motifs',
  components: {
    c: C
  },
  data () {
    return {
      attributes
    }
  }
}
</script>

<style>

</style>