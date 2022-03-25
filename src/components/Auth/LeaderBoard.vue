<template>
  <div class="leader-board">
    <div class="neone-text leader-board__logout" v-if="GETUSER" @click="LOGOUT">
      <span class="neone-text__txt">Logout</span
      ><span class="neone-text__shadow">Logout</span
      ><span class="neone-text__gradient"></span>
    </div>
    <div class="leader-board__list">
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
      <LeaderField />
    </div>
    <LoginInPopup
      v-if="isAutorization && isLogin"
      @closeAutorization="isAutorization = false"
      @changeAutorization="isLogin = !isLogin"
    />
    <RegistrationPopup
      v-if="isAutorization && !isLogin"
      @closeAutorization="isAutorization = false"
      @changeAutorization="isLogin = !isLogin"
    />
    <div
      class="btn leader-board__btn"
      v-if="!GETUSER"
      @click="isAutorization = true"
    >
      Register
    </div>
    <div class="btn leader-board__btn" v-else @click="isAutorization = true">
      Add my score
    </div>
  </div>
</template>@/components/Auth/SignInForm.vue

<script>
import LeaderField from "@/components/Auth/LeaderField.vue";
import LoginInPopup from "@/components/Auth/LoginInPopup.vue";
import RegistrationPopup from "@/components/Auth/RegistrationPopup.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    LeaderField,
    LoginInPopup,
    RegistrationPopup,
  },
  data() {
    return {
      isAutorization: false,
      isLogin: false,
    };
  },
  computed: {
    ...mapGetters(["GETUSER"]),
  },
  methods: {
    ...mapActions(["LOGOUT"]),
  },
};
</script>

<style lang="scss" scoped>
.leader-board {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  &__logout {
    cursor: pointer;
    position: absolute;
    right: 50px;
    top: -80px;
    font-size: 35px;
    font-family: "bBuruhNgepath";
  }

  &__list {
    width: 500px;
    transform: perspective(400px) rotateX(-45deg);
    max-height: 500px;
    margin-top: 60px;
    margin-bottom: auto;
    position: relative;
    padding: 10px;
    padding-bottom: 100px;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -10%;
      height: 100%;
      width: 120%;
    }
  }

  &__btn {
    z-index: 10;
    padding: 15px 25px;
    font-size: 20px;
    position: fixed;
    left: 50%;
    bottom: 200px;
    transform: translate(-50%);
  }
}
</style>