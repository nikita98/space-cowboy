<template>
  <div class="leader-board">
    <LeaderField />
    <LeaderField />
    <LeaderField />
    <LeaderField />
    <LeaderField />
    <SignInForm />
  </div>
</template>@/components/Auth/SignInForm.vue

<script>
import LeaderField from "@/components/Auth/LeaderField.vue";
import SignInForm from "@/components/Auth/SignInForm.vue";

export default {
  components: {
    LeaderField,
    SignInForm,
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
  width: 500px;
}
</style>