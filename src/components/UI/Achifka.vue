<template>
  <div class="achifka">
    <p>{{ achifka }}</p>
  </div>
</template>
<script>
export default {
  props: {
    achifka: {
      type: String,
    },
  },
};
</script>
<style lang="scss">
.achifka {
  display: inline-block;
  background: #eaf1ff;
  padding: 6px 14px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  & p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #4143a3;
  }
}
</style>
