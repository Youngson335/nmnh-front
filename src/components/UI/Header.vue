<template>
  <header class="header">
    <div class="header__menu">
      <Menu @getTitleInfo="getTitleInfo" />
    </div>
    <div class="header__text">
      <div class="header__description">
        <p>{{ description }}</p>
      </div>
      <div class="header__title">
        <h1>{{ title }}</h1>
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  components: {
    Menu,
  },
  watch: {
    $route(to) {
      this.updateTitleAndDescription(to.path);
    },
  },
  mounted() {
    this.updateTitleAndDescription(this.$route.path);
  },
  methods: {
    updateTitleAndDescription(path) {
      switch (path) {
        case "/":
          this.title =
            "Success Start With nMNH Next-Gen Mobility, Navigating Horizons";
          this.description = "perfection in one app";
          break;
        case "/about":
          this.title = "About Us";
          this.description = "The Most Effective App";
          break;
        case "/aso":
          this.title = "App Store Optimization";
          this.description = "The Most Effective App";
          break;
        case "/technologies":
          this.title = "Our technology";
          this.description = "The Most Effective App";
          break;
        case "/ourteam":
          this.title = "Our Team";
          this.description = "The Most Effective App";
          break;
        case "/contact":
          this.title = "Connection";
          this.description = "The Most Effective App";
          break;
        default:
          this.title = "";
          this.description = "";
      }
    },
  },
};
</script>
<style lang="scss">
$white: #ffffff;
.header {
  position: relative;
  background: linear-gradient(180deg, #4143a3 0%, #21225b 100%);
  color: $white;

  &__text {
    position: relative;
    z-index: 1;
    padding-bottom: 90px;
  }
  &__title {
    & h1 {
      color: $white;
      font-size: 48px;
      max-width: 700px;
      margin: 0 auto;
    }
  }
  &__description {
    color: $white;
    font-size: 16px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("@/assets/table.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: 0;
  }
  @media (max-width: 650px) {
    .header {
      &__title {
        & h1 {
          font-size: 38px;
        }
      }
    }
  }
}
</style>
