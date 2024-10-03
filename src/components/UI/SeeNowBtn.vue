<template>
  <div class="see-now__button" @click="goToContact">
    <button>See now</button>
    <img src="../../assets/icons/arrow_blue-icon.svg" alt="" />
  </div>
</template>
<script>
export default {
  methods: {
    goToContact() {
      this.$router.push("/contact").then(() => {
        window.scrollTo(0, 0);
      });
    },
  },
};
</script>
<style lang="scss">
.see-now {
  &__button {
    position: relative;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 26px;
    background-color: #fff;
    max-width: 204px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    & button {
      border: none;
      background: none;
      text-transform: uppercase;
      font-size: 15px;
      font-weight: 400;
      line-height: 22.5px;
      color: #2f33a1;
    }
  }
}
</style>
