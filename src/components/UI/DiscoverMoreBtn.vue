<template>
  <div class="discover-more__btn">
    <button>{{ btn }}</button>
    <img src="../../assets/icons/arrow-icon.svg" alt="" />
  </div>
</template>
<script>
export default {
  props: {
    btn: {
      type: String,
    },
  },
};
</script>
<style lang="scss">
.discover-more {
  &__btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 195px;
    & button {
      border: none;
      background: none;
      color: #ffffff;
      font-size: 15px;
      margin-right: 10px;
      text-wrap: nowrap;
    }
    background-color: #21225b;
    padding: 17px 33px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
}
</style>
