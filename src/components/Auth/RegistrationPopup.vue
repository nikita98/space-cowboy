<template>
  <div class="auth registration">
    <form class="auth__form" @submit.prevent="validate">
      <div class="auth__close" @click="$emit('closeAutorization')"></div>
      <h1 class="auth__title">Registration</h1>
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
      <div class="auth__field">
        <label class="auth__lable">Repeat password</label>
        <input
          class="auth__input"
          required
          v-model="passwordRepeat"
          type="password"
          placeholder="pass"
        />
      </div>
      <a class="link auth__link" @click="$emit('changeAutorization')"
        >Login in</a
      >
      <button
        class="btn auth__btn"
        type="submit"
        :class="{ error: error || emailError || passwordError }"
      >
        Register
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
    ...mapActions(["REGISTRATION"]),
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
        this.emailError = "wrong email";
        valid = false;
      }

      if (this.password !== this.passwordRepeat) {
        this.passwordError = "passwords are not match";
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
        await this.REGISTRATION(formData);
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