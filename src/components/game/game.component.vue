<script>
import bg_pentagon from '@/images/bg-pentagon.svg'

import Option from '@/components/option/option.component.vue'

export default {
  props: {
    options: Array
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
    }
  },
  data() {
    return {
      bg_pentagon,
      option_selected: -1,
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
    </div>
    <div class='game-checker'>
    </div>
  </div>
</template>

<style lang='sass'>
@use './game.style'
</style>
