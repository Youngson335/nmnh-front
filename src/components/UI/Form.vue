<template>
  <div class="contact-form">
    <h2>Didn't Find Your Answer?<br />Submit Your Question</h2>
    <form @submit.prevent="submitForm">
      <input v-model="form.name" type="text" placeholder="Name" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input
        v-model="form.subject"
        type="text"
        placeholder="Subject"
        required
      />
      <textarea v-model="form.message" rows="4" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <p v-if="formSubmitted" class="submission-message">Заявка отправлена</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      formSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      this.formSubmitted = true;

      this.form = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };

      setTimeout(() => {
        this.formSubmitted = false;
      }, 3000);
    },
  },
};
</script>
<style scoped lang="scss">
.contact-form {
  background-color: #21225b;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;

  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;

  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input,
    textarea {
      padding: 10px;
      border: none;
      background-color: #ffffff38;
      color: white;
      border-top-left-radius: 10px;
      border-bottom-right-radius: 10px;
      margin-bottom: 5px;
      &::placeholder {
        color: #ffffff87;
        font-size: 16px;
      }
    }

    button {
      background-color: #4143a3;
      color: #ffffff;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #2f33a1;
      cursor: pointer;
      max-width: 170px;
      margin: 0 auto;

      &:hover {
        background-color: #2f33a18b;
      }
    }
  }

  .submission-message {
    margin-top: 15px;
    color: #72e572;
    font-size: 14px;
  }
}
</style>
