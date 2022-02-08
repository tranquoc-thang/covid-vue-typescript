<template>
  <td class="data-row">{{ dataRow }}</td>
</template>

<script lang="ts">
export default {
  name: "DataRow",
  props: {
    dataRow: {
      type: String,
      default: "Null",
    },
  },
};
</script>

<style lang="scss" scoped></style>
