<template>
  <input
    class="input"
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="ts">
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  height: 43px;
  border-radius: 0.4rem;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;
  color: $text-color;
  background-color: $background-color;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  outline: none;
  &:focus {
    border: 1px solid $primary-color;
  }
}
</style>
