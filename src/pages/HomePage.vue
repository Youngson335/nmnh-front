<template>
  <div class="home">
    <StartHome />
    <div class="home__info">
      <Achifka :achifka="text" class="home__achifka" />
      <div class="home__title">
        <h2>Our team does the following better:</h2>
      </div>
      <Cards />
    </div>
    <div class="home__technology">
      <StackBlock />
    </div>
    <div class="home__about">
      <AboutInfo />
    </div>
    <div class="home__steps">
      <Achifka :achifka="steps" class="home__achifka" />
      <div class="steps__title">
        <h2>Our approach in three steps</h2>
      </div>
      <Steps />
      <div class="steps__image">
        <img src="../assets/images/steps-image.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import StartHome from "@/components/StartHome.vue";
import Achifka from "@/components/UI/Achifka.vue";
import Cards from "@/components/UI/Cards.vue";
import StackBlock from "@/components/StackBlock.vue";
import AboutInfo from "@/components/AboutInfo.vue";
import Steps from "@/components/Steps.vue";
export default {
  components: {
    StartHome,
    Achifka,
    Cards,
    StackBlock,
    AboutInfo,
    Steps,
  },
  data() {
    return {
      text: "Aspects",
      steps: "Easy Steps",
    };
  },
};
</script>
<style lang="scss">
.home {
  background: #fff;
  position: relative;
  &__achifka {
    margin-bottom: 10px;
  }
  &__info {
  }
  &__about {
    margin-bottom: 90px;
  }
  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 50px;
    & h2 {
      font-size: 38px;
      font-weight: 700;
      line-height: 45.6px;
      color: #21225b;
    }
  }
  &__technology {
    position: relative;
    bottom: -100px;
  }
}
.steps {
  &__title {
    margin-bottom: 40px;
    & h2 {
      font-size: 38px;
      font-weight: 700;
      line-height: 45.6px;
      text-align: center;
      color: #21225b;
      max-width: 440px;
      margin: 0 auto;
    }
  }
  &__image {
    & img {
      width: 90%;
      max-width: 750px;
    }
  }
}
</style>
