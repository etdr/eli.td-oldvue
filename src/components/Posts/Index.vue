<template>
  <ul>
  <li v-for="p of attributes" :key="p.date">
    <h2><router-link :to="`/posts/${p.date.slice(0,10)}`">{{ p.title }}</router-link></h2>
    <p>{{ (new Date(p.date)).toDateString() }}</p>
  </li>
  </ul>
</template>


<script>
const modules = import.meta.globEager('../../posts/*.md')

export default {
  props: ['postlist'],
  mounted () {
  },
  data () {
    return {
      attributes: Object.values(modules).map(m => m.attributes).reverse()

    }
  }
}
</script>

<style lang="postcss" scoped>
ul {
  list-style-type: none;
  padding-inline-start: 0;

  & li {
    margin: 4rem 0 2rem;

  }
}
</style>