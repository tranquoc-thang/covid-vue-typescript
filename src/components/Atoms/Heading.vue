<template>
  <h1
    class="heading"
    :style="{ fontSize: size, color: color, fontWeight: weight }"
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
    size: {
      type: String,
      default: "2rem",
    },
    color: {
      type: String,
      default: "$primary-color",
    },
    weight: {
      type: String,
      default: "900",
    },
  },
};
</script>

<style lang="scss" scoped>
.heading {
  color: $primary-color;
  font-weight: 900;
}
</style>
