<template>
  <div class="statistics">
    <div class="statistics__block">
      <div class="statistics__title">
        <h3>READY TO SCALE</h3>
      </div>
      <div class="statistics__description">
        <p>
          Donec bibendum, dui id ultrices molestie, neque neque portafeli, id
          vverra ligula justo.
        </p>
      </div>
    </div>
    <div class="statistics__info">
      <div class="statistics__item">
        <div class="statistics__number">10M+</div>
        <div class="statistics__text">Total Download</div>
      </div>
      <div class="statistics__item">
        <div class="statistics__number">2580+</div>
        <div class="statistics__text">Positive review</div>
      </div>
      <div class="statistics__item">
        <div class="statistics__number">100%</div>
        <div class="statistics__text">Happy Customer</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.statistics {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 60px;
  background: #4143a3;
  border-top: 3px dashed rgb(103 103 103);
  max-width: 1120px;
  width: calc(100% - 50px);
  margin: 0 auto;
  border-bottom-right-radius: 20px;
  color: #ffffff;
  margin-bottom: 40px;
  &__block {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    max-width: 260px;
    text-align: start;
  }
  &__title {
    margin-bottom: 10px;
    & h2 {
      font-size: 22px;
      font-weight: 700;
      line-height: 26.4px;
      color: #ffffff;
    }
  }
  &__description {
    & p {
      font-size: 16px;
      font-weight: 400;
      line-height: 22.4px;
    }
  }
  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__number {
    font-size: 38px;
    font-weight: 700;
    line-height: 45.6px;
    text-align: center;
    margin-bottom: 30px;
  }
  &__item {
    padding: 30px;
    border-left: 2px solid #ffffff38;
    height: 158px;
    &:first-child {
      border: none;
    }
  }
}
@media (max-width: 820px) {
  .statistics {
    flex-direction: column;
    &__block {
      margin-bottom: 20px;
      text-align: center;
    }
    &__title {
      text-align: center;
      width: 100%;
    }
  }
}
@media (max-width: 560px) {
  .statistics {
    &__info {
      flex-direction: column;
    }
    &__item {
      border: none;
    }
  }
}
</style>
