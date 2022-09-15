<template>
  <div class="wrapper">
    <q-card class="q-ma-lg">
      <q-input filled v-model="userName" label="Enter your username..." />
      <q-input filled v-model="passWord" label="Enter your password..." />
      <q-btn @click="postAction()" color="black" label="Send" />
    </q-card>
  </div>
</template>

<script setup>
import { api } from "boot/axios";
import { ref, reactive } from "vue";
import { useAuthStore } from "../../stores/authStore";
name: "SignIn";

/* Declare Store and variable */
const userName = ref("");
const passWord = ref("");

const auth = useAuthStore();

/* Methods */
const postAction = () => {
  auth.postLogin(userName, passWord);
};

/* Handle API */
api
  .post("/students/findStudent", userName)
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => {
    handleError(err);
  });
</script>

<style scoped>
@import "./SignIn.scss";
</style>
