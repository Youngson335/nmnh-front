<template>
  <nav class="menu">
    <div class="menu__block">
      <div class="menu__logo">
        <img
          class="menu__logo--image"
          src="../../assets/logo-blue.svg"
          alt=""
        />
      </div>
      <ul class="menu__items">
        <router-link
          to="/"
          class="menu__item"
          @click.native="setActive('home')"
        >
          <li :class="{ active__item: activeItem === 'home' }">Home</li>
        </router-link>
        <router-link
          to="/about"
          class="menu__item"
          @click.native="setActive('about')"
        >
          <li :class="{ active__item: activeItem === 'about' }">About</li>
        </router-link>
        <router-link
          to="/aso"
          class="menu__item"
          @click.native="setActive('aso')"
        >
          <li :class="{ active__item: activeItem === 'aso' }">Aso</li>
        </router-link>
        <router-link
          to="/technologies"
          class="menu__item"
          @click.native="setActive('technologies')"
        >
          <li :class="{ active__item: activeItem === 'technologies' }">
            Technologies
          </li>
        </router-link>
        <router-link
          to="/ourteam"
          class="menu__item"
          @click.native="setActive('our_team')"
        >
          <li :class="{ active__item: activeItem === 'our_team' }">OUR TEAM</li>
        </router-link>
        <router-link
          to="/contact"
          class="menu__item"
          @click.native="setActive('contact')"
        >
          <li :class="{ active__item: activeItem === 'contact' }">Contact</li>
        </router-link>
      </ul>
      <div class="menu__search">
        <img
          class="menu__search--image"
          src="../../assets/icons/search-icon.svg"
          alt=""
        />
      </div>

      <div class="menu__btn" @click="goToForm">
        <button>Get Started</button>
        <img src="../../assets/icons/arrow-icon.svg" alt="" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeItem: "home",
    };
  },
  methods: {
    setActive(item) {
      this.activeItem = item;
      this.emitTitleInfo(item);
    },
    goToForm() {
      this.$router.push("/contact");
      this.emitTitleInfo("contact");
    },
    emitTitleInfo(item) {
      let titleInfo = {};
      switch (item) {
        case "home":
          titleInfo = {
            description: "perfection in one app",
            title: "Success Start With nMNH",
          };
          break;
        case "about":
          titleInfo = {
            description: "The Most Effective App",
            title: "About Us",
          };
          break;
        case "aso":
          titleInfo = {
            description: "The Most Effective App",
            title: "App Store Optimization",
          };
          break;
        case "technologies":
          titleInfo = {
            description: "The Most Effective App",
            title: "Our technology",
          };
          break;
        case "our_team":
          titleInfo = {
            description: "The Most Effective App",
            title: "Our Team",
          };
          break;
        case "contact":
          titleInfo = {
            description: "The Most Effective App",
            title: "Connection",
          };
          break;
      }
      this.$emit("getTitleInfo", titleInfo);
    },
  },
  mounted() {
    this.setActive(this.activeItem);
  },
};
</script>

<style lang="scss">
$white: #ffffff;
@mixin default-position($content, $items) {
  display: flex;
  justify-content: $content;
  align-items: $items;
}
a {
  text-decoration: none;
}
.menu {
  padding: 60px;
  margin-bottom: 20px;
  &__block {
    position: relative;
    z-index: 1000;
    @include default-position(space-between, center);
    background-color: $white;
    color: #21225b;
    max-width: 1140px;
    margin: 0 auto;
    padding: 21px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  &__items {
    list-style-type: none;
    @include default-position(center, center);
  }
  &__item {
    cursor: pointer;
    margin-left: 24px;
    & li {
      font-weight: 400;
      text-transform: uppercase;
      color: #21225b;
      text-wrap: nowrap;
    }
    & .active__item {
      color: #2f33a1;
    }
  }
  &__logo {
    max-width: 160px;
    &--image {
      width: 100%;
      display: block;
    }
  }
  &__search {
    padding-left: 30px;
    &--image {
      max-width: 30px;
      display: block;
    }
  }
  &__btn {
    cursor: pointer;
    @include default-position(center, center);
    & button {
      border: none;
      background: none;
      color: #ffffff;
      font-size: 15px;
      margin-right: 10px;
      text-wrap: nowrap;
    }
    background-color: #21225b;
    padding: 17px 33px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  @media (max-width: 1110px) {
    .menu {
      &__search {
        padding-left: 0;
      }
      &__logo {
        max-width: 100px;
      }
      &__item {
        & li {
          font-size: 13px;
        }
      }
      &__btn {
        padding: 10px 20px;
        & button {
          font-size: 13px;
        }
      }
      &__search--image {
        max-width: 25px;
      }
    }
  }
  @media (max-width: 900px) {
    .menu {
      &__search {
        padding-left: 0;
      }
      &__logo {
        max-width: 70px;
      }
      &__item {
        & li {
          font-size: 12px;
        }
      }
      &__btn {
        padding: 8px 10px;
        & button {
          font-size: 12px;
        }
      }
      &__search--image {
        max-width: 20px;
      }
      &__item {
        margin-left: 15px;
      }
    }
  }
  @media (max-width: 760px) {
    .menu {
      &__block {
        flex-direction: column;
      }
      &__items {
        flex-direction: column;
      }
      &__item {
        margin-left: 0px;
        margin-bottom: 5px;
      }
      &__logo {
        margin-bottom: 8px;
      }
      &__search {
        display: none;
      }
    }
  }
}
</style>
