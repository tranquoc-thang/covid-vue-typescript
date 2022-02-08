<template>
  <banner
    subheading="UPDATES"
    heading="Blog Posts"
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit praesentium porro consectetur optio!"
  />
  <div class="blog">
    <data-row dataRow="Hello" />
  </div>
</template>

<script lang="ts">
import Banner from "../Organisms/Banner.vue";
import DataRow from "../Molecules/DataRow.vue";
export default {
  name: "Home",
  components: {
    Banner,
    DataRow,
  },
};
</script>

<style lang="scss" scoped>
.blog {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
@media (min-width: 1023px) {
  .blog {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}
</style>
