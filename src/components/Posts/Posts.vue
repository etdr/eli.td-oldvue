<template>
  <ul class="postnav">
    <li><router-link to="/posts">Index</router-link></li>
    <li><router-link :to="`/posts/${penultimate}`">Penultimate Post</router-link></li>
    <li><router-link :to="`/posts/${ultimate}`">Latest Post</router-link></li>
  </ul>

  <main>
    <router-view :key="$route.name" />
  </main>
</template>

<script>
const modules = import.meta.glob('../../posts/*.md')

export default {
  data () {
    return {
      links: Object.keys(modules)
               .map(k => k.match(/20[0-9]{2}-[0-1][0-9]-[0-3][0-9]/)[0])
               .sort()
    //           .slice(-2)
    }
  },
  computed: {
    ultimate () { return this.links[this.links.length - 1] },
    penultimate () { return this.links[this.links.length - 2] }
  }
}
</script>

<style lang="postcss" scoped>
ul.postnav {
  margin: 0;
  background-color: #8629ff;
  display: flex;
  list-style-type: none;
  padding-inline-start: 0;
  padding: 2rem;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  transition: all .4s ease;

  &:hover {
    height: 7rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  }

  & li {
    
    & a {
      color: #f8f8f8;
      text-decoration: none;
      font-weight: bold;
      transition: all .4s ease;
      font-size: 2rem;
      &:hover {
        color: #040404;
      }
    }
  }
}


main {
  width: 80rem;
  margin: 2rem auto;
}
</style>