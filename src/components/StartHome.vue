<template>
  <div class="start">
    <div class="start__description">
      <p>Finance at the intersection of technology enables better outcomes</p>
    </div>
    <div class="start__image">
      <img src="../assets/images/promo2-img.svg" alt="" />
    </div>
    <div class="start__volna">
      <img src="../assets/images/volna-image.svg" alt="" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.start {
  background: #242664;
  position: relative;
  color: #fff;
  top: -50px;
  max-height: 450px;
  overflow: hidden;
  &__image {
    & img {
      width: 100%;
    }
  }
  &__volna {
    position: absolute;
    position: absolute;
    bottom: -1px;
    & img {
      width: 100%;
      display: block;
    }
  }
}
@media (max-width: 500px) {
  .start {
    &__image {
      position: relative;
      bottom: -100px;
    }
  }
}
</style>
