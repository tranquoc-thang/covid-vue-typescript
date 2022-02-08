<template>
  <div class="todo-item">
    <div class="todo-icon">
      <icon :nameicon="todoIcon" size="5rem" />
    </div>
    <div class="todo-content">
      <heading size="1.8rem" weight="700" :text="todoTitle" />
      <my-text :text="todoDesc" />
    </div>
  </div>
</template>

<script lang="ts">
import Heading from "../Atoms/Heading.vue";
import Text from "../Atoms/Text.vue";
import Icon from "../Atoms/Icon.vue";
export default {
  name: "TodoItem",
  components: {
    Heading,
    MyText: Text,
    Icon,
  },
  props: {
    todoIcon: {
      type: String,
      required: true,
    },
    todoTitle: {
      type: String,
      required: true,
    },
    todoDesc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  &-item {
    width: calc(100% - 30px);
    border-radius: 1rem;
    background-color: $background-color;
    margin-bottom: 3rem;
  }
  &-icon {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    width: 100%;
    height: 14rem;
    @include flex(center, center);
    background-color: #241f34;
  }
  &-content {
    padding: 30px;
    width: 100%;
  }
}
.heading {
  min-height: 100px;
}
</style>
