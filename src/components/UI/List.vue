<template>
  <ul class="list__info">
    <li>We completed 500+ client’s projects</li>
    <li>We have 10+ multiple developer</li>
    <li>100+ active client’s working with us</li>
  </ul>
</template>
<script>
export default {};
</script>
<style lang="scss">
.list__info {
  list-style-type: none;
  padding: 0;
  max-width: 400px;
  text-align: start;
  & li {
    background-image: url("../../assets/icons/our-project-check-icon.svg");
    background-repeat: no-repeat;
    background-position: 0 50%;
    padding-left: 20px;

    font-size: 16px;
    font-weight: 400;
    line-height: 22.4px;
    text-align: start;
    color: #8b8b8b;
    margin-bottom: 5px;
  }
}
</style>
