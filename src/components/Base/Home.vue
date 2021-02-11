<template>
  
  <div class="title-backer">
    <h1>Eli T. Drumm</h1>
  </div>
  
  <nav id="home-nav">
    <ul>
      <li><h2><router-link to="/about">about</router-link></h2></li>
      <li><h2><router-link to="/yield">portfolio</router-link></h2></li>
    </ul>
  </nav>
  
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
h1 {
  font-size: 14rem;
  margin: 0 2rem 2rem;
  padding: 1rem 0 4rem;
  position: absolute;

  //transform: rotate(-6deg) skewX(-6deg) translate(8rem,23rem);
  transform: skewY(-3deg) translateY(38rem);
  @media (max-width: 2200px) {
    transform: skewY(-3deg) translateY(22rem);
  }
  @media (max-width: 1400px) {
    transform: skewY(-3deg) translateY(8rem);
  }
  @media (max-width: 1100px) {
    font-size: 12rem;
  }
  @media (max-width: 900px) {
    font-size: 8rem;
  }
  
  
  color: #f8f8f8;
}

.title-backer {
  //width: 120%;
  //transform: rotate(6deg) translate(-10rem,-20rem) skewX(6deg);
  //transform: rotate(10deg) skewX(-10deg);
  /* transform: translateY(10rem); */
  /* transform: skewY(10deg); */

  

  transform: skewY(3deg) translateY(-30rem);
  height: 60rem;
  margin-bottom: -300px;
  

  @media (max-width: 2200px) {
    transform: skewY(3deg) translateY(-20rem);
    height: 45rem;
    margin-bottom: -200px;
  }

  @media (max-width: 1400px) {
    transform: skewY(3deg) translateY(-5rem);
    height: 30rem;
    margin-bottom: -20px;
  }
  
  

  background-color: #040404;
}

nav {
  margin: 0 6rem;

  & ul {
    list-style-type: none;
    padding-inline-start: none;
    & li {
      text-decoration: none;
    }
  }
}
</style>