<template>
  <div class="auth login">
    <form class="auth__form" @submit.prevent="validate">
      <div class="auth__close" @click="$emit('closeAutorization')"></div>
      <h1 class="auth__title">Login</h1>
      <div class="auth__field">
        <label class="auth__lable">User e-mail</label>
        <input
          class="auth__input"
          required
          v-model="email"
          type="text"
          placeholder="e-mail"
        />
        <div class="auth__error" v-if="emailError">{{ emailError }}</div>
        <div class="auth__error" v-if="error">{{ error }}</div>
      </div>

      <div class="auth__field">
        <label class="auth__lable">Password</label>
        <input
          class="auth__input"
          required
          v-model="password"
          type="password"
          placeholder="pass"
        />
        <div class="auth__error" v-if="passwordError">
          {{ passwordError }}
        </div>
      </div>
      <a class="link auth__link" @click="$emit('changeAutorization')"
        >Register</a
      >
      <button
        class="btn auth__btn"
        type="submit"
        :class="{ error: error || emailError || passwordError }"
      >
        Login in
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      passwordRepeat: "",
      error: "",
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    ...mapActions(["LOGIN"]),
    validate() {
      this.error = "";
      this.emailError = "";
      this.passwordError = "";
      let valid = true;

      if (this.email.length < 6) {
        this.emailError = "email is too short";
        valid = false;
      }
      if (!this.email.match(/^\S+@\S+\.\S+$/)) {
        this.emailError = "inwalid email";
        valid = false;
      }

      if (this.password.length < 6) {
        this.passwordError = "password is too short";
        valid = false;
      }

      if (valid) {
        this.register();
      }
    },
    async register() {
      let formData = { email: this.email, password: this.password };
      try {
        await this.LOGIN(formData);
        this.$emit("closeAutorization");
      } catch (e) {
        this.error = e.message.match(/\/(.*)\)/)[1];
      }
    },
  },
};
</script>

<style lang="scss">
</style>