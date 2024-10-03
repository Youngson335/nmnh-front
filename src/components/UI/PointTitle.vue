<template>
  <div class="point__title">
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>
<style lang="scss">
.point__title {
  & h2 {
    font-size: 38px;
    font-weight: 700;
    line-height: 45.6px;
    color: #21225b;
    text-align: start;
  }
}
@media (max-width: 400px) {
  .point__title {
    & h2 {
      font-size: 30px;
    }
  }
}
</style>
