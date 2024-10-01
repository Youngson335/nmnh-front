<template>
  <div class="cards">
    <div class="card">
      <div class="card__item">
        <div class="card__image">
          <img src="../../assets/icons/code-icon.svg" alt="" />
        </div>
        <div class="card__title">
          <h5>Code</h5>
        </div>
        <div class="card__description">
          <p>
            The app code is the core programming that enables the application's
            functionality!
          </p>
        </div>
      </div>
      <div class="card__item card__active card__child">
        <div class="card__image">
          <img src="../../assets/icons/design-icon.svg" alt="" />
        </div>
        <div class="card__title">
          <h5>Design</h5>
        </div>
        <div class="card__description">
          <p>
            Design refers to the visual appearance and user experience, focusing
            on usability and aesthetics
          </p>
        </div>
      </div>
      <div class="card__item">
        <div class="card__image">
          <img src="../../assets/icons/support-icon.svg" alt="" />
        </div>
        <div class="card__title">
          <h5>Support</h5>
        </div>
        <div class="card__description">
          <p>Includes assistance and resources provided to help users</p>
        </div>
      </div>
      <div class="card__item card__child">
        <div class="card__image">
          <img src="../../assets/icons/security-icon.svg" alt="" />
        </div>
        <div class="card__title">
          <h5>Code</h5>
        </div>
        <div class="card__description">
          <p>
            Involves safeguards to protect the app and its data from
            unauthorized access
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.card {
  display: flex;
  justify-content: center;
  align-items: unset;
  &__child {
    margin-top: 40px;
  }
  &__active {
    background: #4143a3;
    & h5 {
      color: #ffff !important;
    }
    & p {
      color: #ffff !important;
    }
  }
  &__item {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    max-width: 260px;
    text-align: start;
    padding: 30px;
    box-shadow: 0px 0px 40px 0px #0000000d;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-left: 30px;
    &:first-child {
      margin-left: 0px;
    }
  }
  &__image {
    margin-bottom: 25px;
    max-width: 80px;
    & img {
      width: 100%;
      background: #eaf1ff;
      padding: 20px;
      border-radius: 50%;
    }
  }
  &__title {
    margin-bottom: 15px;
    & h5 {
      font-size: 19px;
      font-weight: 700;
      line-height: 22.8px;
      color: #21225b;
    }
  }
  &__description {
    & p {
      color: #8b8b8b;
      font-size: 15px;
      font-weight: 400;
      line-height: 22.4px;
    }
  }
}
</style>
