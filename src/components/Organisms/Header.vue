<template>
  <header class="header">
    <logo class="header-logo" />
    <div class="header-nav">
      <i class="fas fa-bars btn-menu" @click="onToggleNavBar"></i>
    </div>
    <div class="nav-wrap">
      <i class="fas fa-times btn-close-menu" @click="onToggleNavBar"></i>
      <nav-item
        class="nav-item"
        @click="onToggleNavBar"
        text="Home"
        linkName="Home"
      />
      <nav-item
        class="nav-item"
        @click="onToggleNavBar"
        text="Prevention"
        linkName="Prevention"
      />
      <nav-item
        class="nav-item"
        @click="onToggleNavBar"
        text="Symptoms"
        linkName="Symptoms"
      />
      <nav-item
        class="nav-item"
        @click="onToggleNavBar"
        text="About"
        linkName="About"
      />
      <nav-item
        class="nav-item"
        @click="onToggleNavBar"
        text="Blog"
        linkName="MyBlog"
      />
      <nav-item
        class="nav-item"
        @click="onToggleNavBar"
        text="Contact"
        linkName="Contact"
      />
    </div>
  </header>
</template>

<script lang="ts">
import Logo from "../Atoms/Logo.vue";
import NavItem from "../Atoms/NavItem.vue";
export default {
  name: "Header",
  components: {
    Logo,
    NavItem,
  },
  setup() {
    let toggleMenuBar = false;
    function onToggleNavBar() {
      const navWrapElement = document.querySelector(".nav-wrap")!;
      toggleMenuBar = !toggleMenuBar;
      navWrapElement.classList.toggle("show", toggleMenuBar);
    }

    return { onToggleNavBar };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 2rem 1.5rem;
  background-color: $background-color-second;
  @include flex(center, space-between);
  position: fixed;
  z-index: 10;
  box-shadow: 1px 1px 1px rgba(#ccc, 0.2);
}

i {
  color: #fff;
  font-size: 2.2rem;
}

.nav-wrap.show {
  right: 0;
  opacity: 1;
}

@media (max-width: 740px) {
  .nav-wrap {
    position: fixed;
    top: 0;
    right: -100%;
    bottom: 0;
    width: 90%;
    max-width: 300px;
    background: $background-color;
    z-index: 1000;
    opacity: 0;
    padding: 0 30px;
    transition: all linear 0.3s;
    & > * {
      height: 50px;
      padding: 10px;
      background: $background-color;
      font-size: 2rem;
      color: $text-color-heading;
      @include flex(center, flex-start);
      &:first-child {
        justify-content: flex-end;
        margin-top: 30px;
        font-size: 2.8rem;
        margin-right: -15px;
      }
    }
  }
}

@media (min-width: 1023px) {
  .btn-menu,
  .btn-close-menu {
    display: none;
  }
  .nav-item {
    font-size: 1.6rem;
    margin: 0 2rem;
    &:hover {
      color: $text-color-hover;
      color: red;
    }
  }
  .header {
    padding-left: 5rem;
    padding-right: 3rem;
  }
}
</style>
