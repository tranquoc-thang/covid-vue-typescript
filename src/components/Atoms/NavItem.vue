<template>
  <a href="#">
    <router-link :to="{ name: linkName }">{{ text }}</router-link>
  </a>
</template>

<script lang="ts">
export default {
  name: "Navitem",
  props: {
    text: {
      required: true,
      type: String,
    },
    linkName: {
      // required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: $text-color;
  cursor: pointer;
}
a:hover {
  color: $text-color-hover;
}
</style>
