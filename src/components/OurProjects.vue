<template>
  <div class="our-projects">
    <div class="our-projects__image">
      <img src="../assets/images/app-promo-image.svg" alt="" />
    </div>
    <div class="our-projects__info">
      <Achifka :achifka="text" class="our-projects__achifka" />
      <PointTitle class="our-projects__title" :title="title" />
      <PointDescription
        class="our-projects__description"
        :point="description"
      />

      <List class="our-projects__list" />
      <div class="our-project__button">
        <DiscoverMoreBtn :btn="button" />
      </div>
    </div>
  </div>
</template>
<script>
import Achifka from "./UI/Achifka.vue";
import DiscoverMoreBtn from "./UI/DiscoverMoreBtn.vue";
import List from "./UI/List.vue";
import PointDescription from "./UI/PointDescription.vue";
import PointTitle from "./UI/PointTitle.vue";
export default {
  components: {
    Achifka,
    DiscoverMoreBtn,
    List,
    PointDescription,
    PointTitle,
  },
  data() {
    return {
      text: "OUR Projects",
      description:
        "New languages, new approaches, user journeys, and application development scenarios - that's our everything",
      title: "Every day we try to do something new",
      button: "Discover More",
    };
  },
};
</script>
<style lang="scss">
.our-projects {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
  width: calc(100% - 100px);
  &__info {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 50%;
  }
  &__image {
    & img {
      width: 100%;
    }
  }
  &__achifka {
    margin-bottom: 15px;
  }
  &__list {
    margin-bottom: 40px;
  }
  &__title {
    margin-bottom: 30px;
  }
  &__description {
    margin-bottom: 25px;
  }
}
@media (max-width: 600px) {
  .our-projects {
    flex-direction: column;
    &__info {
      margin-left: 0px;
      width: 100%;
    }
  }
}
</style>
