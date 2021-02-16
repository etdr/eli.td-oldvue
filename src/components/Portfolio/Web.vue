<template>
  <h1>web developer</h1>

  <section>
    <h2>Vloeistof</h2>
    <img src="../../assets/img/yield/staticsjs/vloeistof.png" alt="Discsearcher" >
    <p>A mixed-drinks curation app created in Angular.</p>
  </section>

  <section>
    <h2>Eksward</h2>
    <img src="../../assets/img/yield/staticsjs/eksward.png" alt="Discsearcher" >
    <p>A crossword puzzle solving app built with React and Redux.</p>
  </section>

  <section>
    <h2>Discsearcher</h2>
    <img src="../../assets/img/yield/staticsjs/discsearcher.png" alt="Discsearcher" >
    <p>A simple project to search the Discogs API and display the results cleanly.</p>
  </section>
</template>

<script>
export default {
  name: 'Web'
}
</script>

<style lang="postcss">
section {
  margin-top: 5rem;

  & img {
    width: 90%;
    margin: 0 auto 1rem;
    display: block;
  }
}
</style>