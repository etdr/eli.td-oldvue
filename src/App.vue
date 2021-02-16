<template>
  <div id="app">
    <top-nav />

    <router-view />

    <div id="big-magic-spacer"></div>

    <bottom-bar />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import BottomBar from './components/BottomBar.vue'

export default {
  name: 'App',
  components: {
    'top-nav': TopNav,
    'bottom-bar': BottomBar
  }
}
</script>

<style lang="postcss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#big-magic-spacer {
  flex-grow: 1;
}
</style>