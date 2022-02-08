<template>
  <footer class="footer">
    <div class="footer-wrap">
      <div class="footer-about">
        <heading
          size="1.5rem"
          weight="500"
          class="footer-about-heading"
          text="About"
        />
        <my-text
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cumque tenetur inventore veniam, hic vel ipsa necessitatibus ducimus architecto fugiat!"
        />
        <div class="footer-about-social">
          <icon nameicon="fab fa-facebook" />
          <icon nameicon="fab fa-twitter" />
          <icon nameicon="fab fa-instagram" />
          <icon nameicon="fab fa-linkedin" />
        </div>
      </div>
      <div class="footer-links">
        <div class="footer-links-caption">
          <heading
            size="1.5rem"
            weight="500"
            class="footer-links-heading"
            text="Quick Links"
          />
        </div>
        <div class="footer-links-link">
          <a href="#">Symptoms</a>
          <a href="#">Prevention</a>
          <a href="#">FAQs</a>
          <a href="#">About Coronavirus</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="footer-links-caption">
          <heading
            size="1.5rem"
            weight="500"
            class="footer-links-heading"
            text="Helpful Links"
          />
        </div>
        <div class="footer-links-link">
          <a href="#">Helathcare Professional</a>
          <a href="#">LGU Facilities</a>
          <a href="#">Protect Your Family</a>
          <a href="#">World Health</a>
        </div>
        <div class="footer-links-caption">
          <heading
            size="1.5rem"
            weight="500"
            class="footer-links-heading"
            text="Resources"
          />
        </div>
        <div class="footer-links-link">
          <a href="#">WHO Website</a>
          <a href="#">CDC Website</a>
          <a href="#">Gov Website</a>
          <a href="#">DOH Website</a>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <my-text class="text-center" text="Copyright ©2022 All rights reserved" />
    </div>
  </footer>
</template>

<script lang="ts">
import Heading from "../Atoms/Heading.vue";
import Icon from "../Atoms/Icon.vue";
import Text from "../Atoms/Text.vue";
export default {
  name: "Footer",
  components: {
    Heading,
    Icon,
    MyText: Text,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 8rem 1.5rem;
  &-about {
    &-heading {
      color: #fff;
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }
    &-social {
      margin: 5rem 0;
      & > * {
        margin-right: 3.6rem;
      }
    }
  }
  &-links {
    &-heading {
      color: #fff;
      font-size: 1.4rem;
      margin-bottom: 2.2rem;
    }
    &-link {
      margin-top: 1rem;
      & > * {
        display: block;
        font-size: 1.6rem;
        color: $primary-color;
        margin-bottom: 1.5rem;
        font-weight: 700;
      }
    }
  }
  &-copyright {
    margin-top: 6rem;
  }
}
@media (min-width: 1023px) {
  .footer {
    padding-left: 5rem;
    padding-right: 5rem;
    &-wrap {
      @include flex(_, _, _, row);
    }
    &-about {
      width: 30%;
    }
    &-links {
      margin-left: 8rem;
      width: 70%;
      @include flex();
      & > * {
        width: 33.33%;
      }
      &-caption {
        display: none;
      }
    }
  }
}
</style>
