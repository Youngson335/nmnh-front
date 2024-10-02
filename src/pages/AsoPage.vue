<template>
  <div class="aso container">
    <div class="aso__info">
      <Form class="aso__info--form" />
      <AsoDescription class="aso__info--description" />
    </div>
    <div class="aso__block">
      <div class="aso__block__component">
        <ProductTable />
      </div>
      <div class="aso__block__image">
        <img src="../assets/images/mockap-image.png.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import Form from "@/components/UI/Form.vue";
import AsoDescription from "@/components/AsoDescription.vue";
import ProductTable from "@/components/ProductTable.vue";
export default {
  components: {
    Form,
    AsoDescription,
    ProductTable,
  },
};
</script>
<style lang="scss">
.aso {
  margin-top: 100px;
  position: relative;
  &__info {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__block {
    &__image {
      position: absolute;
      bottom: -250px;
      left: 0;
      right: 0;
      & img {
        width: calc(100% - 100px);
        max-width: 700px;
      }
    }
  }
}
@media (max-width: 650px) {
  .aso {
    &__info {
      flex-direction: column;
      &--form {
        margin-bottom: 30px;
      }
      &--description {
        margin-left: 0 !important;
      }
    }
    &__block {
      &__image {
        bottom: -100px;
        & img {
          width: calc(100% - 50px);
        }
      }
    }
  }
}
</style>
