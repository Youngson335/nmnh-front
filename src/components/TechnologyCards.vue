<template>
  <div class="cards">
    <div class="card">
      <div class="card__item">
        <div class="card__image">
          <img src="../assets/icons/code-icon.svg" alt="" />
        </div>
        <div class="card__title">
          <h5>Fully Functional Apps</h5>
        </div>
        <div class="card__description">
          <p>
            Build and deploy applications efficiently! Yes, you will be able to
            seamlessly create feature-rich apps with minimal effort
          </p>
        </div>
      </div>
      <div class="card__item card__active card__child">
        <div class="card__image">
          <img src="../assets/icons/design-icon.svg" alt="" />
        </div>
        <div class="card__title">
          <h5>Effortless Customization</h5>
        </div>
        <div class="card__description">
          <p>
            Optimize your workflow and customize applications with ease! Yes,
            you will be able to modify every detail to suit your needs
          </p>
        </div>
      </div>
      <div class="card__item">
        <div class="card__image">
          <img src="../assets/icons/support-icon.svg" alt="" />
        </div>
        <div class="card__title">
          <h5>Comprehensive Support</h5>
        </div>
        <div class="card__description">
          <p>
            Receive expert guidance throughout the entire development process!
          </p>
        </div>
      </div>
      <div class="card__item card__child">
        <div class="card__image">
          <img src="../assets/icons/security-icon.svg" alt="" />
        </div>
        <div class="card__title">
          <h5>Secure and Reliable</h5>
        </div>
        <div class="card__description">
          <p>
            Develop apps with confidence! Yes, you will ensure your applications
            are protected with top-tier security features
          </p>
        </div>
      </div>

      <div class="card__item">
        <div class="card__image">
          <img src="../assets/icons/integrated-icon.svg" alt="" />
        </div>
        <div class="card__title">
          <h5>Integrated Analytics</h5>
        </div>
        <div class="card__description">
          <p>
            You will be able to embed powerful analytics directly into your apps
          </p>
        </div>
      </div>
      <div class="card__item card__child">
        <div class="card__image">
          <img src="../assets/icons/codebase-icon.svg" alt="" />
        </div>
        <div class="card__title">
          <h5>Unified Codebase</h5>
        </div>
        <div class="card__description">
          <p>
            You will benefit from a unified codebase for easier maintenance and
            updates
          </p>
        </div>
      </div>
      <div class="card__item">
        <div class="card__image">
          <img src="../assets/icons/advanced-icon.svg" alt="" />
        </div>
        <div class="card__title">
          <h5>Advanced Data Insights</h5>
        </div>
        <div class="card__description">
          <p>You will have the tools to analyze and improve your apps</p>
        </div>
      </div>
      <div class="card__item card__child">
        <div class="card__image">
          <img src="../assets/icons/collaborative-icon.svg" alt="" />
        </div>
        <div class="card__title">
          <h5>Collaborative Development</h5>
        </div>
        <div class="card__description">
          <p>
            You will be able to collaborate on projects with seamless
            communication and data protection
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 60px auto;
  &__child {
    margin-top: 40px;
  }
  &__active {
    background: #4143a3 !important;
    & h5 {
      color: #ffff !important;
    }
    & p {
      color: #ffff !important;
    }
  }
  &__item {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    max-width: 260px;
    text-align: start;
    padding: 30px;
    box-shadow: 0px 0px 40px 0px #0000000d;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-left: 30px;
    background: #ffffff;
    &:first-child {
      margin-left: 0px;
    }
  }
  &__image {
    margin-bottom: 25px;
    max-width: 80px;
    & img {
      width: 100%;
      background: #eaf1ff;
      padding: 20px;
      border-radius: 50%;
    }
  }
  &__title {
    margin-bottom: 15px;
    & h5 {
      font-size: 19px;
      font-weight: 700;
      line-height: 22.8px;
      color: #21225b;
    }
  }
  &__description {
    & p {
      color: #8b8b8b;
      font-size: 15px;
      font-weight: 400;
      line-height: 22.4px;
    }
  }
}
@media (max-width: 1160px) {
  .card {
    flex-direction: column;
    align-items: center;
    &__child {
      margin-top: 0px;
    }
    &__item {
      margin-left: 0px;
      margin-bottom: 20px;
      width: calc(100% - 100px);
      max-width: 100%;
    }
  }
}
</style>
