<template>
  <div class="todo">
    <div class="todo-left">
      <todo-item
        todoTitle="Stay at home"
        todoDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis!"
        todoIcon="fas fa-house-user"
      />
      <todo-item
        todoTitle="Wear facemask"
        todoDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis!"
        todoIcon="fas fa-head-side-mask"
      />
    </div>
    <div class="todo-right">
      <todo-item
        todoTitle="Keep social distancing"
        todoDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis!"
        todoIcon="fas fa-people-arrows"
      />
      <todo-item
        todoTitle="Wash your hands"
        todoDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, debitis!"
        todoIcon="fas fa-hands-wash"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TodoItem from "../Molecules/TodoItem.vue";
export default {
  name: "Todo",
  components: {
    TodoItem,
  },
};
</script>

<style lang="scss" scoped>
.todo {
  background-color: $background-color-third;
  padding-top: 6rem;
  margin-top: 3rem;
  @include flex(_, center);
  &-left,
  &-right {
    width: 50%;
    @include flex(center, center, _, column);
  }
  &-right {
    margin-top: 6rem;
  }
  &-item {
    @include flex(center, center, _, column);
  }
}
@media (min-width: 1023px) {
  .todo {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}
</style>
