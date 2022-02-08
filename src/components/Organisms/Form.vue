<template>
  <form action="" class="form" @submit.prevent="onSubmit">
    <div class="form-input">
      <div class="form-item">
        <my-text text="First name" />
        <p style="color: red; font-size: 1.4rem; margin-bottom: 0.5rem">
          {{ firstName.error }}
        </p>
        <p style="color: green; font-size: 1.4rem; margin-bottom: 0.5rem">
          {{ firstName.success }}
        </p>
        <my-input type="text" v-model="firstName.val" />
      </div>
      <div class="form-item">
        <my-text text="Last name" />
        <p style="color: red; font-size: 1.4rem; margin-bottom: 0.5rem">
          {{ lastName.error }}
        </p>
        <p style="color: green; font-size: 1.4rem; margin-bottom: 0.5rem">
          {{ lastName.success }}
        </p>
        <my-input type="text" v-model="lastName.val" />
      </div>
      <div class="form-item">
        <my-text text="Email" />
        <p style="color: red; font-size: 1.4rem; margin-bottom: 0.5rem">
          {{ email.error }}
        </p>
        <p style="color: green; font-size: 1.4rem; margin-bottom: 0.5rem">
          {{ email.success }}
        </p>
        <my-input type="text" v-model="email.val" />
      </div>
      <div class="form-item">
        <my-text text="Subject" />
        <p style="color: red; font-size: 1.4rem; margin-bottom: 0.5rem">
          {{ subject.error }}
        </p>
        <p style="color: green; font-size: 1.4rem; margin-bottom: 0.5rem">
          {{ subject.success }}
        </p>
        <my-input type="text" v-model="subject.val" />
      </div>
      <div class="form-item">
        <my-text text="Message" />
        <p style="color: red; font-size: 1.4rem; margin-bottom: 0.5rem">
          {{ message.error }}
        </p>
        <p style="color: green; font-size: 1.4rem; margin-bottom: 0.5rem">
          {{ message.success }}
        </p>
        <my-input type="text" v-model="message.val" />
      </div>
      <my-button text="SEND MESSAGE" />
    </div>
    <div class="quick-info">
      <heading text="Quick info" class="quick-info-heading" />
      <div class="quick-info-item">
        <icon nameicon="fas fa-map-marker-alt" />
        <my-text text="Fake street, 3929, London" />
      </div>
      <div class="quick-info-item">
        <icon nameicon="fas fa-phone" />
        <my-text text="+1 291 2902 392" />
      </div>
      <div class="quick-info-item">
        <icon nameicon="fas fa-envelope" />
        <my-text text="info@mydomain.com" />
      </div>
      <div class="quick-info-item">
        <icon nameicon="fas fa-globe-europe" />
        <my-text text="https://mywebsite.com" />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import Text from "../Atoms/Text.vue";
import Input from "../Atoms/Input.vue";
import Button from "../Atoms/Button.vue";
import Icon from "../Atoms/Icon.vue";
import Heading from "../Atoms/Heading.vue";
export default {
  name: "Form",
  components: {
    MyText: Text,
    MyInput: Input,
    MyButton: Button,
    Icon,
    Heading,
  },
  setup() {
    let formData = reactive({
      firstName: {
        val: "",
        error: "",
        success: "",
      },
      lastName: {
        val: "",
        error: "",
        success: "",
      },
      email: {
        val: "",
        error: "",
        success: "",
      },
      subject: {
        val: "",
        error: "",
        success: "",
      },
      message: {
        val: "",
        error: "",
        success: "",
      },
    });
    function required(target: { val: string; error: string; success: string }) {
      if (target.val) {
        target.error = "";
        target.success = "Great!";
      } else {
        target.error = "This is required";
        target.success = "";
      }
    }
    function min(
      target: { val: string; error: string; success: string },
      minValue: number
    ) {
      if (target.val.length < minValue) {
        target.error = `This field min is ${minValue} characters`;
        target.success = "";
      }
    }
    function max(
      target: { val: string; error: string; success: string },
      maxValue: number
    ) {
      if (target.val.length > maxValue) {
        target.error = `This field max is ${maxValue} characters`;
        target.success = "";
      }
    }
    function email(target: { val: string; error: string; success: string }) {
      const result = target.val.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (!result) {
        target.error = `This field must be email`;
        target.success = "";
      }
    }
    function onSubmit() {
      required(formData.firstName);
      min(formData.firstName, 6);
      max(formData.firstName, 18);
      required(formData.lastName);
      required(formData.email);
      email(formData.email);
      required(formData.subject);
      required(formData.message);
    }

    return { ...formData, onSubmit };
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 0 1.5rem;
  &-item {
    margin-bottom: 2rem;
    & > *:first-child {
      margin-bottom: 1rem;
    }
    &:last-child > *:last-child {
      height: 25rem;
    }
  }
}
.quick {
  &-info {
    &-heading {
      margin: 6rem 0 3rem;
      color: #fff;
    }
    &-item {
      @include flex(center, flex-start);
      margin-bottom: 1.5rem;
      & > *:first-child {
        width: 20px;
        height: 20px;
        @include flex(center, center);
        margin-right: 2rem;
        font-size: 1.8rem !important;
      }
    }
  }
}
@media (min-width: 1023px) {
  .form {
    padding-left: 5rem;
    padding-right: 5rem;
    @include flex();
    &-input {
      width: 50%;
    }
  }
  .quick-info {
    width: 50%;
    margin-left: 12rem;
    margin-top: -60px;
  }
}
</style>
