<template>
  <div class="stack">
    <div class="stack__info">
      <div class="stack__achifka">
        <p>About US</p>
      </div>
      <div class="stack__title">
        <h2>
          Our applications are developed in multiple programming languages
        </h2>
      </div>
    </div>
    <div class="stack__technology">
      <div class="technology__item">
        <img src="../assets/technology/unity.svg" alt="" />
      </div>
      <div class="technology__item">
        <img src="../assets/technology/java.svg" alt="" />
      </div>
      <div class="technology__item">
        <img src="../assets/technology/python.svg" alt="" />
      </div>
      <div class="technology__item">
        <img src="../assets/technology/kotlin.svg" alt="" />
      </div>
      <div class="technology__item">
        <img src="../assets/technology/swift.svg" alt="" />
      </div>
      <div class="technology__item">
        <img src="../assets/technology/flutter.svg" alt="" />
      </div>
    </div>
  </div>
  <Statistics />
</template>
<script>
import Statistics from "./Statistics.vue";
export default {
  components: {
    Statistics,
  },
};
</script>
<style lang="scss">
.stack {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -1px 28px 5px 0px #00000040;
  max-width: 1120px;
  width: calc(100% - 50px);
  margin: 0 auto;
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
  &__technology {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__info {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    padding: 60px;
  }
  &__title {
    max-width: 350px;
    & h2 {
      text-align: start;
      font-size: 30px;
      font-weight: 700;
      line-height: 45.6px;
      color: #4143a3;
      text-transform: capitalize;
    }
  }
}
.technology {
  &__item {
    flex: 0 1 calc(33.33% - 10px);
    margin-bottom: 10px;
    & img {
      width: 100%;
      max-width: 175px;
    }
  }
}
@media (max-width: 760px) {
  .stack {
    flex-direction: column;
  }
}
</style>
