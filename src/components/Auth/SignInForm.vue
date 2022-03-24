<template>
  <div class="auth singin-in">
    <form class="auth__form" @submit.prevent="register">
      <h1 class="auth__title">Sign in</h1>
      <div class="auth__field">
        <label class="auth__lable">User name</label>
        <input
          class="auth__input"
          required
          v-model="username"
          type="text"
          placeholder="Name"
        />
      </div>
      <div class="auth__field">
        <label class="auth__lable">Password</label>
        <input
          class="auth__input"
          required
          v-model="password"
          type="password"
          placeholder="Pass"
        />
      </div>
      <button class="btn" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["GETUSER"]),
  },
  methods: {
    ...mapActions(["LOGIN"]),
    async register() {
      console.log(this.GETUSER);
      let formData = { email: this.username, password: this.password };
      await this.LOGIN(formData);
    },
  },
};
</script>

<style lang="scss">
.auth {
  position: fixed;
  left: 50%;
  top: 28%;
  transform: translate(-50%, -50%);
  &__form {
    padding: 20px;
    border: 1px solid #bbb;
    background-color: #000;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  &__title {
    margin-bottom: 20px;
  }

  &__field {
    margin-bottom: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__lable {
    margin-bottom: 10px;
  }

  &__input {
    margin-bottom: 10px;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    outline: none;
    border: none;
    border-bottom: 1px solid #aaa;
    color: #aaa;
    background: none;
  }
}
</style>