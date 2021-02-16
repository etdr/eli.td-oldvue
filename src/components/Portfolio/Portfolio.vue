<template>
  <ul>
    <li><router-link to="/is-a/web-developer">Web</router-link></li>
    <li><router-link to="/is-a/developer-in-general">Software</router-link></li>
    <li><router-link to="/is-a/designer">Design</router-link></li>
    <li><router-link to="/is-a/data-scientist">Data</router-link></li>
    <li><router-link to="/is-a/quasi-academician">Thesis</router-link></li>
    <li><router-link to="/is-a/musician">Music</router-link></li>
  </ul>

  
  <main>
    <p v-if="$route.name !== 'Portfolio Summary'">Eli T. Drumm is a</p>
    <router-view />
  </main>

</template>

<script>

</script>

<style lang="postcss" scoped>

ul {
  margin: 0;
  background-color: #ff8629;
  display: flex;
  list-style-type: none;
  padding-inline-start: 0;
  padding: 2rem;
  justify-content: space-around;
  align-items: top;
  height: 4rem;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);
  transition: all .4s ease;

  &:hover {
    height: 6rem;
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
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