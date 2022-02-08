<template>
  <div class="statistics">
    <heading
      class="text-center heading"
      text="Coronavirus Statistics"
      size="2.4rem"
    />
    <my-text
      class="text-center my-text"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, voluptate!"
    />
    <statistics-case :caseNumber="activeCase" caseType="Active cases" />
    <statistics-case :caseNumber="deathCase" caseType="Deaths" />
    <statistics-case :caseNumber="recoverCase" caseType="Recovered cases" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import Heading from "../Atoms/Heading.vue";
import Text from "../Atoms/Text.vue";
import StatisticsCase from "../Molecules/StatisticsCase.vue";
export default defineComponent({
  name: "Statistics",
  components: {
    Heading,
    MyText: Text,
    StatisticsCase,
  },
  setup() {
    let activeCase = ref<number | string>(0);
    let deathCase = ref(0);
    let recoverCase = ref(0);
    fetch("https://covid-19-data.p.rapidapi.com/totals", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "414628638fmshe9fc48292bba972p1a9f46jsnb75d17489efc",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        deathCase.value = data[0].deaths.toLocaleString();
        activeCase.value = data[0].confirmed.toLocaleString();
        recoverCase.value = data[0].recovered.toLocaleString();
      });

    return { activeCase, deathCase, recoverCase };
  },
});
</script>

<style lang="scss" scoped>
.statistics {
  padding: 0 1.5rem;
}

.statistics-case {
  margin-bottom: 1.5rem;
}

.heading {
  margin-bottom: 1rem;
}
.my-text {
  margin-bottom: 4rem;
}
</style>
