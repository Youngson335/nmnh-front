<template>
  <div class="testing container">
    <div class="testing__image">
      <img src="../assets/images/sleep-mob-image.svg" alt="" />
    </div>
    <div class="testing__block">
      <div class="testing__info">
        <Achifka :achifka="text" class="testing__achifka" />
        <div class="testing__title">
          <h2>Keep Your Eyes Fixed on Your Business Goals</h2>
        </div>
        <div class="testing__description">
          <p>Create an app that allows you to implement your business tasks!</p>
        </div>
        <div class="testing__icons">
          <div class="testing__point">
            <div class="point__picture">
              <img src="../assets/images/business/data-icon.svg" alt="" />
            </div>
            <div class="point__text">
              <div class="point__title">
                <h3>Data Analysis</h3>
              </div>
              <div class="point__description">
                <p>Maintain app data</p>
              </div>
            </div>
          </div>

          <div class="testing__point">
            <div class="point__picture">
              <img src="../assets/images/business/update-icon.svg" alt="" />
            </div>
            <div class="point__text">
              <div class="point__title">
                <h3>Updated App</h3>
              </div>
              <div class="point__description">
                <p>You will get update</p>
              </div>
            </div>
          </div>

          <div class="testing__point">
            <div class="point__picture">
              <img src="../assets/images/business/repot-icon.svg" alt="" />
            </div>
            <div class="point__text">
              <div class="point__title">
                <h3>Growth Report</h3>
              </div>
              <div class="point__description">
                <p>Daily growth report</p>
              </div>
            </div>
          </div>

          <div class="testing__point">
            <div class="point__picture">
              <img src="../assets/images/business/security-icon.svg" alt="" />
            </div>
            <div class="point__text">
              <div class="point__title">
                <h3>High Security</h3>
              </div>
              <div class="point__description">
                <p>All features secure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="testing__picture">
        <img src="../assets/images/women-gradient.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import Achifka from "./UI/Achifka.vue";
export default {
  components: {
    Achifka,
  },
  data() {
    return {
      text: "testing",
    };
  },
};
</script>
<style lang="scss">
.testing {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("@/assets/table.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: 3;
  }
  &__block {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4143a3;
    max-width: 1140px;
    margin: 0 auto;
    padding: 100px 40px;
    color: #ffffff;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  &__image {
    position: absolute;
    top: -7rem;
    left: 0;
    right: 0;
    z-index: 1;
    & img {
      width: 100%;
      max-width: 580px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
  &__icons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    border-bottom: 2px dashed #ffffff18;
  }
  &__point {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    margin-bottom: 20px;
    & h2 {
      text-align: start;
      font-size: 38px;
      font-weight: 700;
      line-height: 45.6px;
    }
  }
  &__achifka {
    margin-bottom: 20px;
  }
  &__description {
    margin-bottom: 20px;
    & p {
      text-align: start;
      font-size: 16px;
      font-weight: 400;
      line-height: 22.4px;
    }
  }
  &__picture {
    max-width: 450px;
    width: calc(100% - 100px);
    margin-left: 60px;
    & img {
      width: 100%;
    }
  }
}
.point {
  &__title {
    text-align: start;
  }
  &__picture {
    padding: 15px;
    background: #ffffff38;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }
}
@media (max-width: 800px) {
  .testing {
    &__block {
      flex-direction: column;
    }
    &__picture {
      margin-left: 0px;
    }
  }
}
</style>
