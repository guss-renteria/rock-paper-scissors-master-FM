<script>
import options from '@/data.js'

import Header from '@/components/header/header.component.vue'
import Game from '@/components/game/game.component.vue'

export default {
  components: {
    Header,
    Game,
  },
  data() {
    return {
      score: 0,
      options,
    }
  },
}
</script>

<template>
  <Header :score='score' :options='options'/>
  <Game :options='options' :score='score'/>
</template>

<style>
</style>
