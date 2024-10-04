<template>
  <div class="contact__connection">
    <div class="connection__info">
      <p>
        International Contact: Phone +7 967 778-54-86 email: sale@nmnh.top
        Adress: 123112 Moscow Presnenskaya nab. 8 str
      </p>
    </div>
    <div class="connection__info">
      <p>
        International Contact: Phone +971 56 603-6173 email: sale@nmnh.top
        Adress: 452C+WJ Dubai Al Sufouh 2
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.contact__connection {
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin: 0 auto;
}
.connection {
  &__info {
    max-width: 550px;
    & p {
      text-align: start;
      margin-bottom: 70px;
      font-size: 20px;
      font-weight: 400;
      line-height: 22.4px;
      color: #000000;
    }
  }
}
</style>
