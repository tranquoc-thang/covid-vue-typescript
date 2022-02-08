<template>
  <div class="banner">
    <div class="banner-wrap">
      <sub-heading :text="subheading" class="text-center subheading" />
      <heading
        :text="heading"
        class="text-center heading"
        size="3rem"
        weight="900"
      />
      <my-text class="text-center text" :text="text" />
      <my-button v-if="button" :text="button" class="button" />
    </div>
    <slot name="img" />
  </div>
</template>

<script lang="ts">
import Heading from "../Atoms/Heading.vue";
import SubHeading from "../Atoms/SubHeading.vue";
import Button from "../Atoms/Button.vue";
import Text from "../Atoms/Text.vue";
export default {
  name: "Header",
  components: {
    Heading,
    SubHeading,
    MyText: Text,
    MyButton: Button,
  },
  props: {
    subheading: {
      type: String,
    },
    heading: {
      type: String,
    },
    button: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  @include flex(center, center, _, column);
  background-color: $background-color-second;
  border-bottom-right-radius: 50%;
  overflow: hidden;
  position: relative;
  padding: 130px 15px;
  margin-bottom: 10rem;
  &-wrap {
    text-align: center;
  }
}

.subheading {
  margin-bottom: 0.2rem;
}

.heading {
  margin-bottom: 1.5rem;
}

.text {
  margin-bottom: 3rem;
}

.button {
  margin-bottom: 4rem;
}
@media (min-width: 1023px) {
  .banner {
    padding-top: 200px;
    align-items: flex-start;
    padding-left: 5rem;
  }
  .banner-wrap {
    & > * {
      text-align: left;
    }
    & > .text {
      width: 500px;
    }
    text-align: left;
  }
}
</style>
