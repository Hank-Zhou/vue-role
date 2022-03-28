<template>
  <div class="bg">
    <div class="box">
      <div class="title">Admin System</div>
      <div class="item">姓名:<input type="text" v-model="user.name" /></div>
      <div class="item">密码:<input type="password" v-model="user.password" /></div>
      <button @click="sumbit">提交</button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import API from "../service/api";
import { ACCESS_TOKEN, ROLE, MENUS } from "../config/constant";
import manageRoute from "../route/dynamicRoute";

export default {
  setup() {
    const router = useRouter();
    const user = reactive({ name: "", password: "" });
    const sumbit = () => {
      API.getLogin(user).then((res) => {
        localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
        localStorage.setItem(ROLE, res.data.role);
        localStorage.setItem(MENUS, JSON.stringify(res.data.menus));
        if (res.data.role === "admin") {
          router.addRoute("Layout", manageRoute);
        }
        router.push("/home");
      });
    };
    return { user, sumbit };
  },
};
</script>

<style>
.bg {
  height: 100vh;
  background: #171c30;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  background-color: #262d47;
  padding: 40px;
  border-radius: 10px;
  color: #fafffb;
  display: flex;
  flex-direction: column;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}

.item {
  margin-bottom: 20px;
}
.item input {
  margin-left: 15px;
}
</style>