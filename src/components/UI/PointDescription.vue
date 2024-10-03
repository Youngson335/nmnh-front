<template>
  <div class="point__description">
    <p>{{ point }}</p>
  </div>
</template>
<script>
export default {
  props: {
    point: {
      type: String,
    },
  },
};
</script>
<style lang="scss">
.point__description {
  & p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    text-align: start;
    color: #8b8b8b;
  }
}
</style>
