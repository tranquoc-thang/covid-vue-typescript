<template>
  <i
    :class="nameicon"
    class="icon"
    :style="{ color: color, fontSize: size }"
  ></i>
  <!-- <p>{{ nameicon }}</p> -->
</template>

<script lang="ts">
export default {
  name: "Icon",
  props: {
    size: {
      type: String,
      default: "1.4rem",
    },
    color: {
      type: String,
      default: "$primary-color",
    },
    nameicon: {
      type: String,
      default: "fas fa-virus",
    },
  },
};
</script>

<style lang="scss" scoped>
i {
  color: $primary-color;
}
</style>
