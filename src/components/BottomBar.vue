<template>
  <footer>
    <p>©2021 ETD</p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
footer {
  height: 8rem;
  background-color: #040404;
  color: #f8f8f8;
  text-align: right;
  padding: 2rem 6rem;
  clip-path: polygon(0 80%, 100% 0, 100% 100%, 0 100%);
  transition: all .4s ease;

  & p {
    padding-top: 2rem;
   
  }

  &:hover {
    height: 18rem;
  }
}
</style>