<template>
  <h1>{{ attributes.title }}</h1>
  <c />
</template>

<script>
import { VueComponent as C, attributes } from '../../../assets/content/about/worldview.md'

export default {
  name: 'Worldview',
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