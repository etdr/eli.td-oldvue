<template>
  <article>
    <h1>{{ attrs.title }}</h1>
    <!-- <h3><em>{{ attrs.author }}</em></h3> -->
    <h3>{{ formattedDate }}</h3>
    <component :is="post" :key="attrs.title" />
  </article>
</template>

<script>
import { defineAsyncComponent, onMounted, ref, shallowRef } from 'vue'

const months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December']

export default {
  props: ['name'],
  mounted () {
    // console.log(this.)

  },
  computed: {
    formattedDate () {
      if (this.attrs.date) {
        const d = new Date(this.attrs.date)
        return `${d.getFullYear()} ${months[d.getMonth()]} ${d.getDate()}`
      }
      return null
    }
  },
  methods: {
  },
  setup (props) {
    
    let post = shallowRef(null)
    let attrs = ref({})
    const getPost = async () => {
      const p = await import(`../../posts/${props.name}.md`)
      post.value = p.VueComponent
      attrs.value = p.attributes
      
    }

    onMounted(() => {
      getPost()
    })

    return {
      post, attrs, getPost
    }

  },
  components: {
    
  }
}
</script>

<style lang="postcss">

h1 {
  font-size: 3rem;
  margin: 3rem 0 0;
}

h3 {
  margin: 1rem 0;
}



</style>