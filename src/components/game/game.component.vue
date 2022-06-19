<script>
import bg_pentagon from '@/images/bg-pentagon.svg'

import Option from '@/components/option/option.component.vue'

export default {
  props: {
    options: Array,
    score: Number,
  },
  components: {
    Option,
  },
  methods: {
    setOptionSelected(option) {
      if(this.option_selected < 0) {
        this.option_selected = option

        const options = this.$refs.select_option
        options.style.opacity = '0'
      }

      setTimeout( this.selectWinner, this.delay + 500 )
    },
    selectWinner() {
      const [_option, _host_option] = this.$refs.game_checker.querySelectorAll('div.option')
      const option = this.options[this.option_selected]

      this.$refs.game_checker.classList.add('completed')
      if(option.name !== _host_option.id) {
        if(option.deletes.includes(_host_option.id)) {
          _option.classList.add('winner')
          this.is_winner = 1
        }else {
          _host_option.classList.add('winner')
          this.is_winner = -1
        }
      }else {
        this.is_winner = 0
      }
    }
  },
  computed: {
    random() {
      return Math.floor(Math.random() * this.options.length)
    }
  },
  data() {
    return {
      bg_pentagon,
      option_selected: -1,
      is_winner: undefined,
      delay: 1000
    }
  }
}
</script>

<template>
  <div class='game-container'>
    <div class='game-controls'>
      <div class='select-option' ref='select_option'>
        <img :src='bg_pentagon' alt='pentagon' class='pentagon'>
        <Option v-for='option, key in options' :key='key' :option_ref='option' @click='() => setOptionSelected(key)' />
      </div>
      <div v-if='option_selected >= 0' class='game-checker' ref='game_checker'>
          <div class='part1'>
            <Option :option_ref='options[option_selected]' />
            <h3>You Picked</h3>
          </div>
          <div class='part2'>
            <Option :option_ref='options[random]' :delay='delay' />
            <h3>The House Picked</h3>
          </div>
          <div v-if='is_winner != undefined' class='game-checker__text'>
            <h3>{{
              is_winner > 0
                ? 'You Win'
                : is_winner < 0
                  ? 'You Lose'
                  : 'Draw'
            }}</h3>
            <button class="play-again">Play Again</button>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang='sass'>
@use './game.style'
</style>
