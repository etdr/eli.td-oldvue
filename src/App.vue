<template>
  <top-nav />

  <router-view />
</template>

<script>
import TopNav from './components/TopNav.vue'

export default {
  name: 'App',
  components: {
    'top-nav': TopNav
  }
}
</script>

<style lang="postcss">

</style>