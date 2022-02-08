<template>
  <h1
    class="sub-heading"
    :style="{ color: color, fontSize: size, fontWeight: weight }"
  >
    {{ text }}
  </h1>
</template>

<script lang="ts">
export default {
  name: "Text",
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "$primary-color",
    },
    size: {
      type: String,
      default: "1.3rem",
    },
    weight: {
      type: String,
      default: "900",
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: rgba($color: $primary-color, $alpha: 0.5);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}
</style>
