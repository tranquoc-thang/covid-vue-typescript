<template>
  <button class="button" :to="{ name: linkName }">{{ text }}</button>
</template>

<script lang="ts">
export default {
  name: "Button",
  props: {
    linkName: {
      type: String,
      // required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: $primary-color;
  border-radius: 3rem;
  padding: 1.2rem 3rem;
  text-transform: uppercase;
  font-size: 1.3rem;
  color: #fff;
  font-weight: 500;
  outline: none;
  cursor: pointer;
}
</style>
