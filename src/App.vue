<template>
  <top-nav v-if="$route.name !== 'Home'" />

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