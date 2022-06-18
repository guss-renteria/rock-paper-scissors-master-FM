<script>
import options from './data.js'

import Header from './components/header/header.component.vue'
import Option from './components/option/option.component.vue'

export default {
  components: {
    Header,
    Option,
  },
  data() {
    return {
      score: 12,
      options,
    }
  },
}
</script>

<template>
  <Header :score='score' :options='options'/>
  <!--<Option v-for='option, key in options' :key='key' :option_ref='option' />-->
</template>

<style>
</style>
