import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    userName: "",
    passWord: "",
  }),
  getters: {},
  actions: {
    postLogin(userName, passWord) {
      let userNameData = userName?.value;
      let passWordData = passWord?.value;

      let obj = {
        userName: userNameData,
        passWordL: passWordData,
      };

      api.post("/post-login", obj).then((re) => {
        console.log(re.data);
      });
    },
  },
});
