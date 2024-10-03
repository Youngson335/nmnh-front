<template>
  <div class="manage-tasks">
    <div class="manage-tasks__info">
      <div class="manage-tasks__achifka">
        <Achifka :achifka="achifka" />
      </div>
      <div class="manage-tasks__title">
        <PointTitle :title="title" />
      </div>
      <div class="manage-tasks__description">
        <PointDescription :point="description" />
      </div>
      <div class="manage-tasks__list">
        <List />
      </div>
      <div class="manage-tasks__button">
        <DiscoverMoreBtn :btn="button" />
      </div>
    </div>
    <div class="manage-tasks__image">
      <img src="../assets/images/manage-image.svg" alt="" />
    </div>
  </div>
</template>
<script>
import Achifka from "./UI/Achifka.vue";
import PointTitle from "./UI/PointTitle.vue";
import PointDescription from "./UI/PointDescription.vue";
import List from "./UI/List.vue";
import DiscoverMoreBtn from "./UI/DiscoverMoreBtn.vue";
export default {
  components: {
    Achifka,
    PointTitle,
    PointDescription,
    List,
    DiscoverMoreBtn,
  },
  data() {
    return {
      title: "Manage Tasks increase productivity",
      description:
        "State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly. ",
      button: "Learn More",
      achifka: "MANAGEMENT",
    };
  },
};
</script>
<style lang="scss">
.manage-tasks {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 50px;
  background-color: #eaf1ff;
  max-width: 1140px;
  margin: 0 auto;
  width: calc(100% - 100px);
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  &__image {
    max-width: 480px;
    & img {
      width: 100%;
    }
  }
  &__info {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 50%;
  }
  &__achifka {
    margin-bottom: 15px;
    & .achifka {
      background-color: #fff;
    }
  }
  &__title {
    margin-bottom: 30px;
  }
  &__description {
    margin-bottom: 25px;
  }
  &__list {
    margin-bottom: 40px;
  }
}
@media (max-width: 700px) {
  .manage-tasks {
    flex-direction: column;
    &__info {
      width: 100%;
      margin-bottom: 50px;
    }
  }
}
</style>
