<template>
  <div class="avatars">
    <div class="avatar__item">
      <div class="avatar__img">
        <img src="../../assets/images/avatar-1.svg" alt="" />
      </div>
      <div class="avatar__info">
        <div class="info__name">
          <h3>Belle Fayye</h3>
        </div>
        <div class="info__job">
          <p>Property Manager</p>
        </div>
      </div>
    </div>
    <div class="avatar__item">
      <div class="avatar__img">
        <img src="../../assets/images/avatar-2.svg" alt="" />
      </div>
      <div class="avatar__info">
        <div class="info__name">
          <h3>Jemmy Bones</h3>
        </div>
        <div class="info__job">
          <p>Rental Agent</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.avatars {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 66px;
  max-width: 1120px;
  margin: 0 auto;
  border: 1.56px dashed#6767672b;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 150px;
  width: calc(100% - 50px);
}
.avatar {
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 47px;
    background: linear-gradient(
      180deg,
      #eaf1ff 50%,
      rgba(255, 255, 255, 0) 50%
    );
    max-width: 300px;
    border: 1.56px dashed#6767672b;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    &:first-child {
      margin-right: 50px;
    }
  }
  &__img {
    max-width: 300px;
    & img {
      width: 100%;
    }
  }
}
.info {
  &__name {
    & h3 {
      color: #21225b;
      font-size: 29.6px;
      font-weight: 700;
      line-height: 35.52px;
      text-align: center;
      text-wrap: nowrap;
    }
  }
  &__job {
    & p {
      color: #8b8b8b;
    }
  }
}
@media (max-width: 830px) {
  .avatars {
    flex-direction: column;
  }
  .avatar__item:first-child {
    margin-right: 0px;
    margin-bottom: 20px;
  }
  .avatar__item {
    width: 100%;
    max-width: 100%;
  }
}
</style>
