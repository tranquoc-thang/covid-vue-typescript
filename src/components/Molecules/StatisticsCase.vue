<template>
  <div class="statistics-case">
    <icon size="2.8rem" class="text-center" color="$primary-color" />
    <heading
      class="text-center"
      :text="caseNumber"
      size="3.2rem"
      color="#fff"
    ></heading>
    <sub-heading :text="caseType" class="text-center" />
  </div>
</template>

<script lang="ts">
import Icon from "../Atoms/Icon.vue";
import SubHeading from "../Atoms/SubHeading.vue";
import Heading from "../Atoms/Heading.vue";
export default {
  name: "StatisticsCase",
  components: {
    Icon,
    SubHeading,
    Heading,
  },
  props: {
    caseNumber: {
      type: Number,
      required: true,
    },
    caseType: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.statistics-case {
  @include flex(center, center, _, column);
}
.sub-heading {
  color: $text-color;
}
.icon {
  margin-bottom: 1.5rem;
}
.heading {
  margin-bottom: 1.5rem;
}
</style>
