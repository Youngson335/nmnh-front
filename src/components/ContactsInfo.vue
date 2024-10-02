<template>
  <div class="contact__connection">
    <div class="connection__info">
      <p>
        International Contact: Phone: +1 (646) 555-7890 Email:
        contact@globalappdev.com Address: 1234 Park Avenue, Suite 500, New York,
        NY 10016, USA
      </p>
    </div>
    <div class="connection__info">
      <p>
        International Contact: Phone: +1 (646) 555-7890 Email:
        contact@globalappdev.com Address: 1234 Park Avenue, Suite 500, New York,
        NY 10016, USA
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
