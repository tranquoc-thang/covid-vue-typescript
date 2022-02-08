<template>
  <div class="symptom">
    <heading text="Symptoms of Coronavirus" />
    <my-text
      text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ipsum repellendus animi modi iure provident, cupiditate perferendis voluptatem!"
    />
    <div class="symptom-wrap">
      <div class="symptom-left">
        <symptom-item
          symptomTitle="Stay at home"
          symptomDesc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem voluptatem ratione veniam rerum qui quibusdam reprehenderit quis."
          symptomImg="@/assets/images/needdo.png"
        >
          <template v-slot:img>
            <img src="@/assets/images/symptom_high-fever.png" alt="" />
          </template>
        </symptom-item>
        <symptom-item
          symptomTitle="Wear facemask"
          symptomDesc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem voluptatem ratione veniam rerum qui quibusdam reprehenderit quis."
          symptomImg="fas fa-head-side-mask"
        >
          <template v-slot:img>
            <img src="@/assets/images/symptom_cough.png" alt="" />
          </template>
        </symptom-item>
      </div>
      <div class="symptom-right">
        <symptom-item
          symptomTitle="Keep social distancing"
          symptomDesc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem voluptatem ratione veniam rerum qui quibusdam reprehenderit quis."
          symptomImg="fas fa-people-arrows"
        >
          <template v-slot:img>
            <img src="@/assets/images/symptom_sore-troath.png" alt="" />
          </template>
        </symptom-item>
        <symptom-item
          symptomTitle="Wash your hands"
          symptomDesc=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem voluptatem ratione veniam rerum qui quibusdam reprehenderit quis."
          symptomImg="fas fa-hands-wash"
        >
          <template v-slot:img>
            <img src="@/assets/images/symptom_headache.png" alt="" />
          </template>
        </symptom-item>
      </div>
      <div class="symptom-bottom"></div>
      <p>
        <strong>Stay at home and call your doctor:</strong>
        <my-text
          text=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, eaque."
        />
      </p>
      <my-button text="HELP LINE" />
    </div>
  </div>
</template>

<script lang="ts">
import SymptomItem from "../Molecules/SymptomItem.vue";
import Heading from "../Atoms/Heading.vue";
import Text from "../Atoms/Text.vue";
import Button from "../Atoms/Button.vue";
export default {
  name: "Symptom",
  components: {
    SymptomItem,
    Heading,
    MyText: Text,
    MyButton: Button,
  },
};
</script>

<style lang="scss" scoped>
.symptom {
  background-color: $background-color-third;
  padding-top: 6rem;
  margin-top: 3rem;
  @include flex(_, center, _, column);
  &-item {
    @include flex(flex-start, center, _, row);
    margin: 0 auto 2rem;
  }
  &-bottom {
    padding: 2rem 3rem;
  }
}
img {
  width: 80%;
}
.button {
  width: fit-content;
}
strong {
  color: $primary-color;
}
p {
  font-size: 1.6rem;
  margin-bottom: 2rem;
}
.text {
  display: inline;
}
@media (min-width: 1023px) {
  .symptom {
    padding-left: 5rem;
    padding-right: 5rem;
    &-wrap {
      width: 100%;
      padding-bottom: 10rem;
    }
    &-left,
    &-right {
      @include flex();
    }
  }
}
</style>
