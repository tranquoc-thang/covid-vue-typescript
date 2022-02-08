<template>
  <banner
    subheading="CONTACT"
    heading="Get In Touch"
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit praesentium porro consectetur optio!"
  >
  </banner>
  <my-form />
</template>

<script lang="ts">
import Banner from "../Organisms/Banner.vue";
import Form from "../Organisms/Form.vue";
export default {
  name: "Contact",
  components: {
    Banner,
    MyForm: Form,
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
  .form {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}
</style>
