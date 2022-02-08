<template>
  <div class="video">
    <div class="video-img">
      <img src="@/assets/images/video.jpg" alt="video" />
    </div>
    <div class="video-wrap">
      <heading size="2.4rem" text="What is Coronavirus?" />
      <my-text
        class="video-text"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officia quas, modi sit eligendi numquam!"
      />
      <ul class="video-list">
        <li class="video-item">
          <icon nameicon="fas fa-check-circle" />
          <my-text text="Lorem ipsum dolor sit amet" />
        </li>
        <li class="video-item">
          <icon nameicon="fas fa-check-circle" />
          <my-text text="Consectetur adipisicing elit" />
        </li>
        <li class="video-item">
          <icon nameicon="fas fa-check-circle" />
          <my-text text="Unde doloremque" />
        </li>
      </ul>
      <my-button text="LEARN MORE" />
    </div>
  </div>
</template>

<script lang="ts">
import Heading from "../Atoms/Heading.vue";
import Text from "../Atoms/Text.vue";
import Icon from "../Atoms/Icon.vue";
import Button from "../Atoms/Button.vue";
export default {
  name: "Video",
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
.video {
  padding: 0 1.5rem;
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

img {
  margin-bottom: 4rem;
}

@media (min-width: 1023px) {
  .video {
    padding-left: 5rem;
    padding-right: 5rem;
    @include flex();
    &-img {
      width: 40%;
    }
    &-wrap {
      width: 60%;
      margin-left: 15rem;
    }
  }
}
</style>
