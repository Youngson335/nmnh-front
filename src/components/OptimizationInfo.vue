<template>
  <div class="optimization__block">
    <div class="optimization__info">
      <div class="optimization__text">
        <div class="optimization__title">
          <h2>App Store Optimization</h2>
        </div>
        <div class="optimization__description">
          <p>
            Let's optimize the application to meet user demands and adhere to
            platform rules
          </p>
        </div>
        <SeeNowBtn />
      </div>
      <div class="optimization__img">
        <img src="../assets/images/mockap-image.png.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import SeeNowBtn from "./UI/SeeNowBtn.vue";
export default {
  components: {
    SeeNowBtn,
  },
};
</script>
<style lang="scss">
.optimization {
  position: relative;
  &__image {
    max-width: 930px;
    margin: 0 auto;
    & img {
      width: calc(100% - 100px);
    }
  }
  &__info {
    width: calc(100% - 50px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #21225b;
    color: #fff;
    max-width: 1120px;
    margin: 0 auto;
    width: calc(100% - 50px);
    padding: 60px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
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
      z-index: 0;
    }
  }
  &__img {
    & img {
      width: 100%;
      display: block;
    }
  }
  &__title {
    margin-bottom: 20px;
    & h2 {
      font-size: 38px;
      font-weight: 700;
      line-height: 45.6px;
      color: #fff;
      text-align: start;
    }
  }
  &__description {
    margin-bottom: 20px;
    & p {
      font-size: 16px;
      font-weight: 400;
      line-height: 22.4px;
      text-align: start;
      color: #fff;
    }
  }
}
@media (max-width: 780px) {
  .optimization {
    &__info {
      flex-direction: column;
    }
    &__img {
      display: flex;
      justify-content: end;
      align-items: center;
      width: 100%;
      margin-top: 20px;
      & img {
        max-width: 400px;
      }
    }
  }
}
</style>
