<template>
  <div class="contact container">
    <div class="contact__info">
      <Form class="contact__form" />
      <MapsInfo class="contact__maps" />
    </div>
    <ContactsInfo />
    <div class="contact__optimization">
      <div class="contact__optimization__image">
        <img src="../assets/images/women-image.svg" alt="" />
      </div>
      <div class="contact__optimization__component">
        <OptimizationInfo />
      </div>
    </div>
  </div>
</template>
<script>
import Form from "@/components/UI/Form.vue";
import MapsInfo from "@/components/MapsInfo.vue";
import ContactsInfo from "@/components/ContactsInfo.vue";
import OptimizationInfo from "@/components/OptimizationInfo.vue";
export default {
  components: {
    Form,
    MapsInfo,
    ContactsInfo,
    OptimizationInfo,
  },
};
</script>
<style lang="scss">
.contact {
  // position: relative;
  &__info {
    display: flex;
    justify-content: center;
    align-items: start;
    margin: 0 auto;
    margin-top: 110px;
    margin-bottom: 130px;
  }
  &__optimization {
    position: relative;
    max-height: 500px;
    &__image {
      position: relative;
      top: -200px;
      display: flex;
      justify-content: end;
      align-items: end;
      & img {
        max-width: 400px;
        width: calc(100% - 100px);
      }
    }
    &__component {
      position: relative;
      top: -300px;
    }
  }
}
@media (max-width: 900px) {
  .contact {
    &__optimization {
      position: relative;
      max-height: 400px;
      &__image {
        position: relative;
        top: -200px;
        display: flex;
        justify-content: end;
        align-items: end;
        & img {
          max-width: 300px;
          width: calc(100% - 100px);
        }
      }
    }
  }
}
@media (max-width: 780px) {
  .contact {
    &__optimization {
      position: relative;
      max-height: 600px;
      &__image {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 150px;
      }
    }
  }
}
@media (max-width: 780px) {
  .contact {
    &__optimization {
      position: relative;
      max-height: 500px;
    }
  }
}
@media (max-width: 800px) {
  .contact {
    &__info {
      flex-direction: column;
      align-items: center;
    }
    &__form {
      margin-bottom: 30px;
      max-width: 100% !important;
    }
    &__maps {
      margin-left: 0;
    }
  }
}
</style>
