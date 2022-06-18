<script>
export default {
  props: {
    score: Number,
    options: Array,
  }
}
</script>

<template>
  <header>
    <nav>
      <h2 v-for='option, key in options' :key='key'>{{ option.name }}</h2>
    </nav>
    <div class='score'>
      <p>Score</p>
      <p><b>{{ score }}</b></p>
    </div>
  </header>
</template>

<style lang='sass'>
@use './header.style'
</style>
