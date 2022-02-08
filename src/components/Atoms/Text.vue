<template>
  <p class="text" :style="{ lineHeight: lineHeight }">{{ text }}</p>
</template>

<script lang="ts">
export default {
  name: "Text",
  props: {
    text: {
      type: String,
      required: true,
    },
    lineHeight: {
      type: String,
      default: "1.7",
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  line-height: 1.7;
  color: $text-color;
  font-size: 1.6rem;
}
</style>
