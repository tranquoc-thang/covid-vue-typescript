<template>
  <div class="solution">
    <solution-way
      solutionIcon="fas fa-shield-virus"
      solutionTitle="Protection"
      solutionDesc="Lorem ipsum dolor sit."
    />
    <solution-way
      solutionIcon="fas fa-head-side-mask"
      solutionTitle="Prevention"
      solutionDesc="Lorem ipsum dolor sit."
    />
    <solution-way
      solutionIcon="fas fa-spray-can"
      solutionTitle="Treatments"
      solutionDesc="Lorem ipsum dolor sit."
    />
    <solution-way
      solutionIcon="fas fa-virus-slash"
      solutionTitle="Symptoms"
      solutionDesc="Lorem ipsum dolor sit."
    />
  </div>
</template>

<script lang="ts">
import SolutionWay from "../Molecules/SolutionWay.vue";
export default {
  name: "Solution",
  components: {
    SolutionWay,
  },
};
</script>

<style lang="scss" scoped>
.solution {
  padding: 0 1.5rem;
}
@media (min-width: 1023px) {
  .solution {
    display: flex;
    justify-content: center;
    & > * {
      margin: 0 3rem;
    }
  }
}
</style>
