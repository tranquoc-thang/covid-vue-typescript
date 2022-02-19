<template>
  <async-banner
    subheading="UPDATES"
    heading="Blog Posts"
    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a, nulla incidunt eaque sit praesentium porro consectetur optio!"
  />
  <heading
    text="Statistics"
    size="3rem"
    class="text-center statistics-heading"
  />
  <my-input
    v-model="search"
    @input="onKeyupSearch"
    type="text"
    placeholder="Type here..."
  />
  <div class="blog">
    <table v-if="totalNations">
      <tr>
        <th>ID</th>
        <th @click="sortData('continent')">
          Continent
          <icon nameicon="fas fa-sort" />
        </th>
        <th @click="sortData('country')">
          Country
          <icon nameicon="fas fa-sort" />
        </th>
        <th @click="sortData('population')">
          Population
          <icon nameicon="fas fa-sort" />
        </th>
        <th @click="sortData('active')">
          Active
          <icon nameicon="fas fa-sort" />
        </th>
        <th @click="sortData('critial')">
          Critical
          <icon nameicon="fas fa-sort" />
        </th>
        <th @click="sortData('recovered')">
          Recovered
          <icon nameicon="fas fa-sort" />
        </th>
        <th @click="sortData('deaths')">
          Death
          <icon nameicon="fas fa-sort" />
        </th>
        <th @click="sortData('total')">
          Total
          <icon nameicon="fas fa-sort" />
        </th>
      </tr>
      <tr
        style="color: #fff"
        v-for="(nation, index) in totalNations"
        :key="index"
      >
        <td>{{ index }}</td>
        <td>{{ nation.continent }}</td>
        <td>{{ nation.country }}</td>
        <td>{{ nation.population }}</td>
        <td>{{ nation.cases.active }}</td>
        <td>{{ nation.cases.critical }}</td>
        <td>{{ nation.cases.recovered }}</td>
        <td>{{ nation.deaths.total }}</td>
        <td>{{ nation.cases.total }}</td>
      </tr>
    </table>
    <div class="loading" v-else></div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, defineAsyncComponent, computed } from "vue";
import Heading from "../Atoms/Heading.vue";
import Icon from "../Atoms/Icon.vue";
import Input from "../Atoms/Input.vue";
const AsyncBanner = defineAsyncComponent(
  () => import("../Organisms/Banner.vue")
);
// import Banner from "../Organisms/Banner.vue";
export default defineComponent({
  name: "Home",
  components: {
    AsyncBanner,
    Heading,
    Icon,
    MyInput: Input,
  },
  setup() {
    let search = ref("");
    let totalNations = ref(null);
    let flag = false;

    function fetchData(key: string, flag: boolean, search: string) {
      fetch("https://covid-193.p.rapidapi.com/statistics", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-193.p.rapidapi.com",
          "x-rapidapi-key":
            "414628638fmshe9fc48292bba972p1a9f46jsnb75d17489efc",
        },
      })
        .then((response) => response.json())
        .then((data) => data.response)
        .then((nations) => {
          switch (key) {
            case "country":
              if (flag) {
                nations.sort((a: any, b: any) =>
                  a.country > b.country ? 1 : -1
                );
              } else {
                nations.sort((a: any, b: any) =>
                  a.country > b.country ? -1 : 1
                );
              }
              break;
            case "continent":
              if (flag) {
                nations.sort((a: any, b: any) =>
                  a.continent > b.continent ? 1 : -1
                );
              } else {
                nations.sort((a: any, b: any) =>
                  a.continent > b.continent ? -1 : 1
                );
              }
              break;
            case "population":
              if (flag) {
                nations.sort((a: any, b: any) =>
                  a.population > b.population ? 1 : -1
                );
              } else {
                nations.sort((a: any, b: any) =>
                  a.population > b.population ? -1 : 1
                );
              }
              break;
            case "active":
              if (flag) {
                nations.sort((a: any, b: any) =>
                  a.cases.active > b.cases.active ? 1 : -1
                );
              } else {
                nations.sort((a: any, b: any) =>
                  a.cases.active > b.cases.active ? -1 : 1
                );
              }
              break;
            case "critical":
              if (flag) {
                nations.sort((a: any, b: any) =>
                  a.cases.critical > b.cases.critical ? 1 : -1
                );
              } else {
                nations.sort((a: any, b: any) =>
                  a.cases.critical > b.cases.critical ? -1 : 1
                );
              }
              break;
            case "recovered":
              if (flag) {
                nations.sort((a: any, b: any) =>
                  a.cases.recovered > b.cases.recovered ? 1 : -1
                );
              } else {
                nations.sort((a: any, b: any) =>
                  a.cases.recovered > b.cases.recovered ? -1 : 1
                );
              }
              break;
            case "total":
              if (flag) {
                nations.sort((a: any, b: any) =>
                  a.cases.total > b.cases.total ? 1 : -1
                );
              } else {
                nations.sort((a: any, b: any) =>
                  a.cases.total > b.cases.total ? -1 : 1
                );
              }
              break;
            case "deaths":
              if (flag) {
                nations.sort((a: any, b: any) =>
                  a.deaths.total > b.deaths.total ? 1 : -1
                );
              } else {
                nations.sort((a: any, b: any) =>
                  a.deaths.total > b.deaths.total ? -1 : 1
                );
              }
              break;
          }
          if (search != "") {
            nations = nations.filter((nation: any) =>
              nation.country.includes(search)
            );
          }
          totalNations.value = nations;
        });
    }

    fetchData("continent", flag, search.value);

    function sortData(key: string) {
      fetchData(key, flag, search.value);
      flag = !flag;
    }

    function onKeyupSearch(key: string) {
      fetchData(key, flag, search.value);
    }

    return { totalNations, sortData, search, onKeyupSearch };
  },
});
</script>

<style lang="scss" scoped>
.blog {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
@media (min-width: 1023px) {
  .blog {
    padding-left: 5rem;
    padding-right: 5rem;
  }
}

td {
  color: #fff;
  border: 1px solid $primary-color;
  padding: 1rem;
  transition: all 1s;
  font-size: 1.4rem;
}

th {
  color: $primary-color;
  border: 1px solid $primary-color;
  padding: 1rem;
  transition: all 1s;
  font-size: 1.8rem;
  cursor: pointer;
}

table {
  transition: all 1s;
  width: 100%;
  & tr {
    transition: all 1s;
    &:nth-child(2n + 1) {
      transition: all 1s;
      background-color: $background-color-third;
    }
  }
}

.loading {
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid $primary-color;
  width: 50px;
  height: 50px;
  animation: rotate 1s linear infinite;
  margin: 0 auto;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.statistics-heading {
  margin: 5rem 0;
  letter-spacing: 0.5rem;
}

.input {
  width: 30%;
  margin: 0 5rem 3rem auto;
}
</style>
