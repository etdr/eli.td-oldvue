<template>
  
  <nav :class="{'on-home': onHome}">
    <ul :class="{'shown': !onHome}">
      <li><router-link to="/" class="link-to-home">Eli <span class="middle-and-surname">T. Drumm</span></router-link></li>
      <li><router-link to="/about" class="link-to-about">about</router-link></li>
      <li><router-link to="/is-a" class="link-to-portfolio">portfolio</router-link></li>
      <li><router-link to="/posts" class="link-to-posts">posts</router-link></li>
    </ul>
    
    
    <div class="title-backer" :class="{shown: onHome}">
      <h1>Eli T. Drumm</h1>
    </div>
    
  </nav>
</template>

<script>
export default {
  computed: {
    onHome () {
      return this.$route.name === 'Home' 
    }
  }
}
</script>

<style lang="postcss" scoped>
nav {
  font-family: 'Merriweather', serif;
  height: 10rem;

  &.on-home {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 60%);
    height: 32rem;
  }

  @media (max-width: 600px) {
    height: 20rem;
  }

  margin: 0;
  & .title-backer {
    margin: 0;
    height: 32rem;
    background-color: #040404;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: all 1s ease;

    & h1 {
      color: #f8f8f8;
      font-size: 14rem;
      margin: 0 2rem 2rem;
      padding: 1rem 0 4rem;
    }
  }

  & div.shown {
    
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 60%);
    
  }

  & ul.shown {
    margin: 0;
    background-color: #040404;
    /* clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); */
    transition: all 1s ease;
    height: 10rem;

    &:hover {
      height: 12rem;
      /* clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%); */
    }

    @media (max-width: 600px) {
      height: 20rem;
    }

    color: #f8f8f8;

    list-style-type: none;

    display: flex;
    padding-inline-start: 0;
    justify-content: space-around;
    align-items: center;

    & li {
      & a{
        color: #f8f8f8;
        text-decoration: none;
        font-size: 3.2rem;

        transition: all .4s ease;

        &.link-to-home {
          & .middle-and-surname {
            @media (max-width: 800px) {
              display: none;
            }
          }
        }

        &.link-to-about:hover {
          color: #f75050;
        }
        &.link-to-portfolio:hover {
          color: #ff8629;
        }
        &.link-to-posts:hover {

        }

        @media (max-width: 600px) {
          writing-mode: vertical-lr;
          text-orientation: mixed;
          transform: 180deg;
        }
        
      }
    }

    &.on-home {
      height: 0;
    }  
  }

  
}

</style>