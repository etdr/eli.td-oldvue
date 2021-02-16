<template>
  <p>Eli T. Drumm is {{ article }}</p>
  <transition name="what">
    <h1>{{ what }}</h1>
  </transition> 
</template>

<script>
import { onUnmounted } from 'vue'
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

<style>

</style>