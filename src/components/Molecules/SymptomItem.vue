<template>
  <div class="symptom-item">
    <div class="symptom-icon">
      <slot name="img" />
    </div>
    <div class="symptom-content">
      <heading size="1.8rem" weight="700" :text="symptomTitle" />
      <my-text :text="symptomDesc" size="1.5rem" />
    </div>
  </div>
</template>

<script lang="ts">
import Heading from "../Atoms/Heading.vue";
import Text from "../Atoms/Text.vue";
export default {
  name: "SymptomItem",
  components: {
    Heading,
    MyText: Text,
  },
  props: {
    symptomImg: {
      type: String,
      required: true,
    },
    symptomTitle: {
      type: String,
      required: true,
    },
    symptomDesc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.symptom {
  &-item {
    @include flex(flex-start, _, _, row);
    width: calc(100% - 30px);
    border-radius: 1rem;
    background-color: $background-color;
    margin-bottom: 3rem;
    padding: 3rem 2rem;
  }
  &-icon {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    width: 80%;
    @include flex(center, center);
    background-color: $background-color;
  }
  &-content {
    width: 100%;
    margin-left: 1rem;
  }
}
.heading {
  margin-bottom: 1rem;
}
.text {
  font-size: 1.5rem;
}
</style>
