<template>
  <footer class="footer">
    <div class="footer__info">
      <div class="footer__logo">
        <img src="../assets/logo-white.svg" alt="" />
      </div>
      <div class="footer__items">
        <div class="footer__block">
          <div class="block__title">
            <h5>Company</h5>
          </div>
          <div class="block__items">
            <div class="block__item" @click="goToPage('about')">
              <img src="../assets/icons/arrow-icon.svg" alt="" />
              <p>About us</p>
            </div>

            <div class="block__item" @click="goToPage('aso')">
              <img src="../assets/icons/arrow-icon.svg" alt="" />
              <p>ASO</p>
            </div>
            <div class="block__item" @click="goToPage('ourteam')">
              <img src="../assets/icons/arrow-icon.svg" alt="" />
              <p>Team</p>
            </div>
            <div class="block__item" @click="goToPage('contact')">
              <img src="../assets/icons/arrow-icon.svg" alt="" />
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        <div class="footer__block">
          <div class="block__title">
            <h5>Pool</h5>
          </div>
          <div class="block__items">
            <div class="block__item" @click="goToPage('technologies')">
              <img src="../assets/icons/arrow-icon.svg" alt="" />
              <p>Technology</p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__copyright">
        <p>Copyright © 2024 Appfit</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    goToPage(link) {
      this.$router.push(link).then(() => {
        window.scrollTo(0, 0);
      });
    },
  },
};
</script>
<style lang="scss">
.footer {
  background: linear-gradient(180deg, #4143a3 0%, #21225b 100%);
  padding-top: 130px;
  &__logo {
    margin-bottom: 40px;
  }
  &__info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
  }
  &__items {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
    margin-bottom: 40px;
    border-bottom: 1px solid #ffffff38;
    border-top: 1px solid #ffffff38;
  }
  &__block {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    text-align: start;
    &:first-child {
      margin-right: 120px;
    }
  }
  &__copyright {
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    color: #ffffff;
  }
}
.block {
  &__title {
    margin-bottom: 25px;
    h5 {
      font-size: 19px;
      font-weight: 700;
      line-height: 22.8px;
      color: #ffffff;
    }
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0px;
    }
    & img {
      margin-right: 6px;
    }
    & p {
      font-size: 16px;
      font-weight: 400;
      line-height: 22.4px;
      color: #ffffff;
    }
  }
  &__items {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
}
</style>
