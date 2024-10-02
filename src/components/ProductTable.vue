<template>
  <div class="product__table">
    <img src="../assets/images/product_table-image.svg" alt="" />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.product__table {
  margin-bottom: 100px;
  & img {
    width: 80%;
    box-shadow: 0px 7.34px 36.68px 0px #5b47bc4d;
    border-radius: 25px;
  }
}
@media (max-width: 650px) {
  .product__table {
    margin-bottom: 30px;
  }
}
</style>
