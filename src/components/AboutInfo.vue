<template>
  <div class="about__info">
    <div class="about__items">
      <div class="about__block">
        <div class="about__achifka">
          <p>About US</p>
        </div>
        <div class="about__title">
          <h2>Crafting apps that are both seamless and functional</h2>
        </div>
        <div class="about__text">
          <p>
            A small team of two developers successfully managed to create
            applications from scratch. Their collaboration and skills allowed
            them to bring innovative ideas to life.
          </p>
        </div>
      </div>
      <div class="about__list">
        <div class="list__item">
          <div class="list__icon">
            <img src="../assets/icons/check-icon.svg" alt="" />
          </div>
          <div class="list__text">
            <div class="list__title">
              <h3>Digital Technology are Our Specialty</h3>
            </div>
            <div class="list__description">
              <p>
                We create digital products that will always be not just in your
                pocket, but also in your heart
              </p>
            </div>
          </div>
        </div>
        <div class="list__item">
          <div class="list__icon">
            <img src="../assets/icons/check-icon.svg" alt="" />
          </div>
          <div class="list__text">
            <div class="list__title">
              <h3>Start width Us</h3>
            </div>
            <div class="list__description">
              <p>
                A large team can be time-consuming and costly—why not entrust
                the task to those who truly understand it all?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about__image">
      <img src="../assets/images/promo1-img.svg" alt="" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.about {
  &__info {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #eaf1ff 0%, rgba(255, 255, 255, 0) 50%);
    padding-top: 180px;
  }
  &__achifka {
    display: inline-block;
    background: #eaf1ff;
    padding: 6px 14px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-bottom: 15px;
    & p {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: #4143a3;
    }
  }
  &__block {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  &__title {
    margin-bottom: 30px;
    & h2 {
      font-size: 35px;
      font-weight: 700;
      line-height: 45.6px;
      color: #21225b;
      text-align: start;
      max-width: 580px;
    }
  }
  &__text {
    padding-bottom: 100px;
    border-bottom: 2px dashed #6767672b;
    & p {
      font-size: 16px;
      font-weight: 400;
      line-height: 22.4px;
      text-align: start;
      color: #8b8b8b;
      max-width: 560px;
    }
  }
  &__list {
    background: #eaf1ff;
    margin-top: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 30px;
  }
  &__image {
    max-width: 400px;
    margin-left: 50px;
    & img {
      width: 100%;
      display: block;
    }
  }
}
.list {
  &__item {
    display: flex;
    justify-content: start;
    align-items: start;
    margin: 0 auto;
    &:first-child {
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 2px dashed #6767672b;
    }
    max-width: 500px;
  }
  &__title {
    margin-bottom: 8px;
    & h3 {
      font-size: 19px;
      font-weight: 700;
      line-height: 22.8px;
      color: #21225b;
      text-align: start;
    }
  }
  &__description {
    & p {
      font-size: 16px;
      font-weight: 400;
      line-height: 22.4px;
      text-align: start;
      color: #8b8b8b;
    }
  }
  &__icon {
    margin-right: 15px;
  }
}
@media (max-width: 1060px) {
  .about {
    &__image {
      max-width: 300px;
    }
    &__title {
      & h2 {
        font-size: 25px;
        line-height: 31.6px;
      }
    }
    &__text {
      padding-bottom: 50px;
    }
  }
  .list {
    &__title {
      & h3 {
        font-size: 16px;
      }
    }
    &__description {
      & p {
        font-size: 12px;
      }
    }
  }
}
@media (max-width: 950px) {
  .about {
    &__info {
      flex-direction: column;
    }
    &__list {
      margin-bottom: 50px;
    }
    &__items {
      width: calc(100% - 100px);
    }
    &__image {
      margin-left: 0px;
    }
  }
}
</style>
