<script>
import options from '@/data.js'

import Header from '@/components/header/header.component.vue'
import Game from '@/components/game/game.component.vue'
import Rules from '@/components/rules/rules.component.vue'

export default {
  components: {
    Header,
    Game,
    Rules,
  },
  data() {
    return {
      score: 0,
      options,
    }
  },
  methods: {
    addScore() {
      this.score = this.score + 1
    },
    resetScore() {
      this.score = 0
    }
  }
}
</script>

<template>
  <Header :score='score' :options='options'/>
  <Game :options='options' :add_score='addScore' :reset_score='resetScore'/>
  <Rules />
</template>

<style>
</style>
