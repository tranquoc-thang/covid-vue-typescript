<template>
  <a class="logo" href="">Covid<span>.</span></a>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Logo extends Vue {}
</script>
<style lang="scss" scoped>
.logo {
  color: $text-color-hover;
  font-size: 2rem;
  font-weight: 700;
}

span {
  color: $primary-color;
}
</style>
