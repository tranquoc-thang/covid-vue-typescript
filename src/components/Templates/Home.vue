<template>
  <banner
    subheading="COVID-19 AWARENESS"
    heading="Stay Safe. Stay Home."
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit praesentium porro consectetur optio!"
    button="HOW TO PREVENT"
  >
    <template v-slot:img>
      <img class="img" src="@/assets/images/banner.png" alt="banner" />
    </template>
  </banner>
  <statistics />
  <my-video />
  <solution />
  <div class="todo-prevent">
    <my-todo />
    <prevent />
  </div>
  <needdo />
  <symptom />
</template>

<script lang="ts">
import Banner from "../Organisms/Banner.vue";
import Statistics from "../Organisms/Statistics.vue";
import Video from "../Organisms/Video.vue";
import Solution from "../Organisms/Solution.vue";
import Todo from "../Organisms/Todo.vue";
import Prevent from "../Organisms/Prevent.vue";
import Needdo from "../Organisms/Needdo.vue";
import Symptom from "../Organisms/Symptom.vue";
export default {
  name: "Home",
  components: {
    Banner,
    Statistics,
    MyVideo: Video,
    Solution,
    MyTodo: Todo,
    Prevent,
    Needdo,
    Symptom,
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  margin-bottom: 20rem;
}
.video {
  margin-bottom: 10rem;
}
.img {
  width: calc(100% - 100px);
  position: absolute;
  right: 0;
  bottom: 3rem;
}
@media (min-width: 1023px) {
  .img {
    width: 40%;
  }
  .prevent {
    margin-top: 30px;
    padding-top: 20rem;
  }
  .todo-prevent {
    @include flex();
    background-color: $background-color-third;
  }
}
</style>
