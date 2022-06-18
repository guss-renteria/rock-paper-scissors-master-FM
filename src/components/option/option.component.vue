<script>
export default {
  props: {
    option_ref: Object,
  },
}
</script>

<template>
  <div class='option'>
    {{ option_ref.name }}
  </div>
</template>
