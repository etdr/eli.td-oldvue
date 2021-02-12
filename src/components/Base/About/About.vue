<template>
  <ul>
    <li><router-link to="/about">Summary</router-link></li>
    <li><router-link to="/about/what-I-do">What I Do</router-link></li>
    <li><router-link to="/about/background">Background</router-link></li>
    <li><router-link to="/about/motifs">Motifs</router-link></li>
    <li><router-link to="/about/worldview">Worldview</router-link></li>
  </ul>

  <main>
    <router-view />
  </main>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>

ul {
  margin: 0;
  background-color: #f75050;
  display: flex;
  list-style-type: none;
  padding-inline-start: 0;
  padding: 2rem;
  justify-content: space-around;
  align-items: center;

  & li {
    
    & a {
      color: #f8f8f8;
      text-decoration: none;
      font-weight: bold;
      transition: all .4s ease;
      &:hover {
        color: #040404;
      }
    }
  }
}



:deep() .about-subtitle {
  font-style: italic;
}

main {
  width: 100rem;
  margin: 0 auto;

  & .content {
    width: 80rem;
    margin: 0 auto;

  }
}

</style>