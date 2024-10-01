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
<style lang=""></style>
