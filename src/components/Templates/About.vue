<template>
  <banner
    subheading="ABOUT"
    heading="About Us"
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit praesentium porro consectetur optio!"
    button="HOW TO PREVENT"
  >
    <template v-slot:img>
      <img class="img" src="@/assets/images/banner.png" alt="banner" />
    </template>
  </banner>
  <my-video />
  <statistics />
  <needdo />
</template>

<script lang="ts">
import Banner from "../Organisms/Banner.vue";
import Statistics from "../Organisms/Statistics.vue";
import Needdo from "../Organisms/Needdo.vue";
import Video from "../Organisms/Video.vue";
export default {
  name: "About",
  components: {
    Banner,
    Statistics,
    Needdo,
    MyVideo: Video,
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  margin-top: 10rem;
}
.video {
  margin-bottom: 10rem;
}
.img {
  width: calc(100% - 100px);
  position: absolute;
  right: 0;
  bottom: 0rem;
}
.todo {
  margin-top: 0;
}
@media (min-width: 1023px) {
  .img {
    width: 40%;
  }
}
</style>
