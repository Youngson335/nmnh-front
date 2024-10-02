<template>
  <div class="our-team">
    <Avatars />
    <UserDescription />
    <div class="our-team__aspects">
      <div class="aspects__title"><p>Aspects</p></div>
      <div class="aspects__description">
        <p>Our team does the following better:</p>
      </div>
    </div>
    <Cards class="our-team__cards" />
  </div>
</template>
<script>
import Avatars from "@/components/UI/Avatars.vue";
import UserDescription from "@/components/UI/UserDescription.vue";
import Cards from "@/components/UI/Cards.vue";
export default {
  components: {
    Avatars,
    UserDescription,
    Cards,
  },
};
</script>
<style lang="scss">
.our-team {
  margin-top: 63px;
  position: relative;
  &__aspects {
    margin-bottom: 55px;
  }
  &__cards {
    position: relative;
    bottom: -100px;
  }
}
.aspects {
  &__title {
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
  &__description {
    & p {
      font-size: 38px;
      font-weight: 700;
      line-height: 45.6px;
      color: #21225b;
      max-width: 500px;
      margin: 0 auto;
    }
  }
}
</style>
