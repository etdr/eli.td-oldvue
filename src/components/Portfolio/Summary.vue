<template>
  <p>Eli T. Drumm is {{ article }}</p>
  <transition name="what">
    <h1>{{ what }}</h1>
  </transition> 
</template>

<script>
import whatIAm from '../../assets/content/portfolio/what-I-am.json'

export default {
  components: {
  },
  computed: {
  },
  data () {
    return {
      whatIAm,
      what: whatIAm[Math.floor(Math.random() * whatIAm.length)],
      article: 'a'
    }
  },
  methods: {
    newWord () {
      const what = whatIAm[Math.floor(Math.random() * whatIAm.length)]
      this.article = ['a', 'e', 'i', 'o', 'u'].includes(what[0].toLowerCase()) ? 'an' : 'a'
      this.what = what
    },
    
  },
  mounted () {
    this.newWord()
    this.wordSwitch = setInterval(() => this.newWord(), 1000)
  },
  beforeUnmount () {
    clearInterval(this.wordSwitch)
    
  }
}
</script>

<style lang="postcss" scoped>
p {
  margin: 10rem 0 0;
  font-style: italic;
}

h1 {
  margin: 0;
  font-size: 10rem;
}
</style>