<template>
  <banner
    subheading="COVID SYMPTOMS"
    heading="Symptoms"
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit praesentium porro consectetur optio!"
    button="HOW TO PREVENT"
  >
    <template v-slot:img>
      <img class="img" src="@/assets/images/symptoms.png" alt="banner" />
    </template>
  </banner>
  <symptom />
  <needdo />
</template>

<script lang="ts">
import Banner from "../Organisms/Banner.vue";
import Needdo from "../Organisms/Needdo.vue";
import Symptom from "../Organisms/Symptom.vue";
export default {
  name: "Symptoms",
  components: {
    Banner,
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
  right: -4rem;
  bottom: -2rem;
}
.needdo {
  margin-bottom: 2rem;
}
@media (min-width: 1023px) {
  .img {
    width: 40%;
  }
}
</style>
