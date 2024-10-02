<template>
  <div class="maps__block">
    <div class="maps__achifka">
      <Achifka :achifka="text" />
    </div>
    <div class="maps__title">
      <h2>WE ARE HERE</h2>
    </div>
    <div class="maps__image">
      <img src="../assets/images/map-image.svg" alt="" />
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
      text: "Aims & Benefits",
    };
  },
};
</script>
<style lang="scss">
.maps {
  &__block {
    margin-left: 80px;
  }
  &__achifka {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 15px;
  }
  &__title {
    margin-bottom: 15px;
    & h2 {
      text-align: start;
      font-size: 38px;
      font-weight: 700;
      line-height: 45.6px;
      color: #21225b;
    }
  }
  &__image {
    max-width: 625px;
    display: flex;
    & img {
      width: calc(100% - 100px);
      min-width: 300px;
    }
  }
}
@media (max-width: 800px) {
  .maps {
  }
}
</style>
