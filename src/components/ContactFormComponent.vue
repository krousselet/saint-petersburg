<template>
  <div class="contact-form">
    <form
      @submit.prevent="handleSubmit"
      v-if="!submitted"
      action="https://formspree.io/f/xanokgkz"
      method="POST"
    >
      <h2>{{ $t("formTitle") }}</h2>

      <input
        v-model="form.name"
        type="text"
        :placeholder="$t('placeholderName')"
        required
      />
      <input
        v-model="form.email"
        type="email"
        :placeholder="$t('placeholderEmail')"
        required
      />
      <textarea
        v-model="form.message"
        :placeholder="$t('placeholderMessage')"
        required
      ></textarea>

      <button type="submit">{{ $t("formSend") }}</button>
    </form>

    <!-- Animation on submission -->
    <div v-else class="animation">
      <svg class="plane" viewBox="0 0 24 24">
        <path
          d="M2 3l20 9-20 9 3-9-3-9zM5 12l15 0"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>
      <p>{{ $t('formValidationText') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactFormComponent",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      submitted: false,
    };
  },
  methods: {
  async handleSubmit() {
    try {
      const response = await fetch("https://formspree.io/f/xanokgkz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.form),
      });

      if (response.ok) {
        this.submitted = true;
        setTimeout(() => {
          this.submitted = false;
          this.form = { name: "", email: "", message: "" };
        }, 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission failed", err);
      alert("Error submitting form.");
    }
  },
},
};
</script>

<style scoped lang="scss">
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    text-align: center;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  button {
    background: #002157;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    display: block;
    margin: auto;
    transition: background 0.3s;

    &:hover {
      background: #003b99;
    }
  }

  .animation {
    text-align: center;
    font-size: 1.2rem;

    .plane {
      width: 80px;
      height: 80px;
      margin: 2rem auto;
      color: #002157;
      animation: fly 2.5s ease-in-out forwards;
    }

    p {
      margin-top: 1rem;
      color: #333;
    }
  }
}

@keyframes fly {
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: translateX(50vw) translateY(-10vh) rotate(45deg);
  }
  100% {
    transform: translateX(100vw) translateY(-30vh) rotate(90deg);
    opacity: 0;
  }
}
</style>
