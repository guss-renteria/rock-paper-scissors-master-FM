<script>
export default {
  props: {
    option_ref: Object,
    delay: Number,
  },
  mounted() {
    const option = this.$refs.option

    setTimeout( function() {
      option.classList.remove('delay')
    }, this.delay | 0 )
  }
}
</script>

<template>
  <div :id='option_ref.name' class='option delay' ref='option'>
    <div class='winner'></div>
    <div :class='`border ${ option_ref.name }`'></div>
    <div class='content'></div>
    <img :src='option_ref.icon' :alt='option_ref.name' class='icon'>
  </div>
</template>

<style lang='sass'>
@use './option.style'
</style>
