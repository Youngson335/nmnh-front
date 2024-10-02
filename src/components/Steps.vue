<template>
  <div class="steps">
    <div class="step__item">
      <div class="step__image">
        <img src="../assets/images/steps/step-1.svg" alt="" />
      </div>
      <div class="step__title">
        <p>gather all available data</p>
      </div>
    </div>
    <div class="step__arrow">
      <img src="../assets/images/steps/arrow-step.png" alt="" />
    </div>
    <div class="step__item">
      <div class="step__image">
        <img src="../assets/images/steps/step-2.svg" alt="" />
      </div>
      <div class="step__title">
        <p>create a user-friendly infrastructure</p>
      </div>
    </div>
    <div class="step__arrow">
      <img src="../assets/images/steps/arrow-step.png" alt="" />
    </div>
    <div class="step__item">
      <div class="step__image">
        <img src="../assets/images/steps/step-3.svg" alt="" />
      </div>
      <div class="step__title">
        <p>enjoy the product</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.steps {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.step {
  &__arrow {
    & img {
      width: calc(100% - 100px);
      min-width: 120px;
      max-width: 250px;
    }
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &__image {
    padding: 20px;
    background: #eaf1ff;
    width: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    & img {
      width: 40px;
    }
  }
  &__title {
    & p {
      font-size: 22px;
      font-weight: 700;
      line-height: 26.4px;
      text-align: center;
      color: #21225b;
    }
  }
}
</style>
