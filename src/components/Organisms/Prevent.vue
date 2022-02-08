<template>
  <div class="prevent">
    <heading size="2.4rem" text="How to Prevent Coronavirus?" />
    <my-text
      class="prevent-text"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis doloribus consequatur fugit voluptatum ex rerum perspiciatis cupiditate, esse hic!"
    />
    <my-text
      class="prevent-text"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, error!"
    />
    <ul class="prevent-list">
      <li class="prevent-item">
        <icon nameicon="fas fa-check-circle" />
        <my-text text="Lorem ipsum dolor sit amet" />
      </li>
      <li class="prevent-item">
        <icon nameicon="fas fa-check-circle" />
        <my-text text="Consectetur adipisicing elit" />
      </li>
      <li class="prevent-item">
        <icon nameicon="fas fa-check-circle" />
        <my-text text="Unde doloremque" />
      </li>
    </ul>
    <my-button text="READ MORE ABOUT PREVENTION" />
  </div>
</template>

<script lang="ts">
import Heading from "../Atoms/Heading.vue";
import Text from "../Atoms/Text.vue";
import Icon from "../Atoms/Icon.vue";
import Button from "../Atoms/Button.vue";
export default {
  name: "Prevent",
  components: {
    Heading,
    MyText: Text,
    Icon,
    MyButton: Button,
  },
};
</script>

<style lang="scss" scoped>
.heading {
  text-transform: none;
  margin-bottom: 2.5rem;
}
.prevent {
  background-color: $background-color-third;
  padding: 0 1.5rem 10rem;
  &-text {
    margin-bottom: 2rem;
  }
  &-list {
    list-style: none;
    margin-bottom: 5rem;
  }
  &-item {
    @include flex(center, flex-start);
    & > * {
      &:first-child {
        margin-right: 1.8rem;
      }
    }
  }
}
@media (min-width: 1023px) {
  .prevent {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}
</style>
