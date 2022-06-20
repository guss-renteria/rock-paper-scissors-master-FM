<script>
import img_rules from '@/images/image-rules-bonus.svg'
import icon_close from '@/images/icon-close.svg'

export default {
  data() {
    return {
      img_rules,
      icon_close,
    }
  },
  methods: {
    toggleRules() {
      const rules_modal = this.$refs.rules_modal

      if(rules_modal.style.display == 'none')
        rules_modal.style.display = 'grid'
      else if(rules_modal.style.display == 'grid')
        rules_modal.style.display = 'none'
    }
  },
  mounted() {
    const rules_modal = this.$refs.rules_modal

    rules_modal.style.display = 'none'
  }
}
</script>

<template>
  <div class='rules-container'>
    <button @click='toggleRules'>Rules</button>

    <div class='modal' ref='rules_modal' @click='toggleRules'>
      <div class='modal-container' @click='e => e.stopPropagation()'>
        <h2>Rules</h2>
        <img :src='img_rules' alt='rules'>
        <button @click='toggleRules'><img :src='icon_close' alt='exit'></button>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
@use './rules.style'
</style>
