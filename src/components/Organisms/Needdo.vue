<template>
  <div class="needdo">
    <div class="needdo-top">
      <my-text class="needdo-subheading" text="What you need to do" />
      <heading
        text="How To Protect Yourself"
        class="text-center heading"
        size="2.4rem"
        weight="900"
      />
      <my-text
        class="text-center text"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officia quas, modi sit eligendi numquam!"
      />
    </div>
    <div class="needdo-wrap">
      <div class="need-should-do">
        <heading text="You should do" color="#fff" size="1.6rem" />
        <li class="needdo-item">
          <icon nameicon="fas fa-check-circle" color="#a8df65" />
          <my-text text="Stay at home" />
        </li>
        <li class="needdo-item">
          <icon nameicon="fas fa-check-circle" color="#a8df65" />
          <my-text text="Wear mask" />
        </li>
        <li class="needdo-item">
          <icon nameicon="fas fa-check-circle" color="#a8df65" />
          <my-text text="Use Sanitizer" />
        </li>
        <li class="needdo-item">
          <icon nameicon="fas fa-check-circle" color="#a8df65" />
          <my-text text="Disinfect your home" />
        </li>
        <li class="needdo-item">
          <icon nameicon="fas fa-check-circle" color="#a8df65" />
          <my-text text="Wash your hand" />
        </li>
        <li class="needdo-item">
          <icon nameicon="fas fa-check-circle" color="#a8df65" />
          <my-text text="Frequent self-isolation" />
        </li>
      </div>
      <div class="need-should-avoid">
        <heading text="You should avoid" color="#fff" size="1.6rem" />
        <li class="needdo-item">
          <icon nameicon="fas fa-times" color="#e84a5f" />
          <my-text text="Avoid infected people" />
        </li>
        <li class="needdo-item">
          <icon nameicon="fas fa-times" color="#e84a5f" />
          <my-text text="Avoid animals" />
        </li>
        <li class="needdo-item">
          <icon nameicon="fas fa-times" color="#e84a5f" />
          <my-text text="Avoid handshaking" />
        </li>
        <li class="needdo-item">
          <icon nameicon="fas fa-times" color="#e84a5f" />
          <my-text text="Aviod infected surfaces" />
        </li>
        <li class="needdo-item">
          <icon nameicon="fas fa-times" color="#e84a5f" />
          <my-text text="Don't touch your face" />
        </li>
        <li class="needdo-item">
          <icon nameicon="fas fa-times" color="#e84a5f" />
          <my-text text="Avoid droplets" />
        </li>
      </div>
      <img src="@/assets/images/needdo.png" alt="banner" class="needdo-img" />
    </div>
  </div>
</template>

<script lang="ts">
import Heading from "../Atoms/Heading.vue";
import Text from "../Atoms/Text.vue";
import Icon from "../Atoms/Icon.vue";
export default {
  name: "Header",
  components: {
    Heading,
    MyText: Text,
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.needdo {
  @include flex(center, center, _, column);
  overflow: hidden;
  padding: 90px 15px;
  margin-bottom: 10rem;
  &-item {
    @include flex(center, flex-start);
    margin-bottom: 1rem;
    & > * {
      &:first-child {
        margin-right: 1rem;
      }
    }
  }
  &-top {
    margin-bottom: 15rem;
  }
}

img {
  margin-top: 1rem;
  width: 100%;
}

.subheading {
  margin-bottom: 0.2rem;
}

.heading {
  margin-bottom: 2rem;
}
.button {
  z-index: 9;
  margin-bottom: 4rem;
}
.need-should-do,
.need-should-avoid {
  list-style: none;
  width: 100%;
}
@media (min-width: 1023px) {
  .needdo {
    padding-left: 5rem;
    padding-right: 5rem;
    &-subheading {
      text-align: center;
    }
    &-wrap {
      width: 100%;
      @include flex();
    }
    &-img {
      width: 40%;
    }
  }
  .need-should-do {
    margin-right: 5rem;
  }
}
</style>
