<template>
  <div class="solution-way">
    <icon
      size="3.5rem"
      class="text-center"
      color="$primary-color"
      :nameicon="solutionIcon"
    />
    <div class="solution-content">
      <heading
        class="text-center"
        :text="solutionTitle"
        size="1.6rem"
        weight="900"
      ></heading>
      <my-text :text="solutionDesc" />
    </div>
  </div>
</template>

<script lang="ts">
import Icon from "../Atoms/Icon.vue";
import Text from "../Atoms/Text.vue";
import Heading from "../Atoms/Heading.vue";
export default {
  name: "StatisticsCase",
  components: {
    Icon,
    Heading,
    MyText: Text,
  },
  props: {
    solutionIcon: {
      type: Number,
      required: true,
    },
    solutionTitle: {
      type: String,
      required: true,
    },
    solutionDesc: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.solution {
  &-way {
    @include flex(flex-start, flex-start);
  }
  &-content {
    @include flex(flex-start, flex-start, _, column);
    margin-left: 1rem;
  }
}
.icon {
  margin-bottom: 1.5rem;
  width: 50px;
  height: 50px;
  @include flex(center, center);
}
</style>
