<template>
  <div class="about">
    <AboutDescription />
    <AboutInfo />
    <div class="about__promo">
      <img src="../assets/images/promo2-img.svg" alt="" />
    </div>
  </div>
</template>
<script>
import AboutDescription from "@/components/AboutDescription.vue";
import AboutInfo from "@/components/AboutInfo.vue";
export default {
  components: {
    AboutDescription,
    AboutInfo,
  },
};
</script>
<style lang="scss">
.about {
  position: relative;
  &__promo {
    position: relative;
    bottom: -220px;
    left: 0;
    right: 0;
    padding-left: 70px;
    max-width: 600px;
    margin: 0 auto;
    & img {
      width: 100%;
    }
  }
}
@media (max-width: 515px) {
  .about__promo {
    bottom: -170px;
  }
}
</style>
