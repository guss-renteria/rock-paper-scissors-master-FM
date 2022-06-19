<script>
export default {
  props: {
    option_ref: Object,
  },
}
</script>

<template>
  <div class='option'>
    <div :class='`border ${ option_ref.name }`'></div>
    <div class='content'></div>
    <img :src='option_ref.icon' :alt='option_ref.name' class='icon'>
  </div>
</template>

<style lang='sass'>
@use './option.style'
</style>
