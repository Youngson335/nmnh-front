<template>
  <div class="technology">
    <TechnologyCards />
    <StackBlock />
    <div class="optimization">
      <div class="optimization__image">
        <img src="../assets/images/appStore-image.svg" alt="" />
      </div>
      <div class="optimization__component">
        <OptimizationInfo />
      </div>
    </div>
  </div>
</template>
<script>
import TechnologyCards from "@/components/TechnologyCards.vue";
import StackBlock from "@/components/StackBlock.vue";
import OptimizationInfo from "@/components/OptimizationInfo.vue";
export default {
  components: {
    TechnologyCards,
    StackBlock,
    OptimizationInfo,
  },
};
</script>
<style lang="scss">
.optimization {
  max-height: 700px;
  &__image {
    max-width: 930px;
    margin: 0 auto;
    & img {
      width: calc(100% - 100px);
    }
  }
  &__component {
    position: relative;
    top: -350px;
  }
}
@media (max-width: 700px) {
  .optimization {
    &__component {
      top: -250px;
    }
  }
}
@media (max-width: 455px) {
  .optimization {
    max-height: 500px;
    &__component {
      top: -150px;
    }
  }
}
</style>
