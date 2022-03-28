<template>
  <div id="home">
    <aside>
      <div class="logo">
        <img class="logo-img" src="./assets/logo.png" alt="logo">
        <div>Admin</div>
      </div>
      <ul style="list-style: none">
        <li v-for="(item,index) in newMenus" :key="index">
          <router-link class="href" :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </aside>
    <div class="content">
      <header>
        <button @click="exit">退出</button>
      </header>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import menus from "./config/menus";
import { MENUS } from "./config/constant";
export default {
  data() {
    return {
      newMenus: []
    };
  },
  created() {
    const menuKeys = JSON.parse(localStorage.getItem(MENUS));
    menus.forEach((item) => {
      if (item.key && menuKeys.includes(item.key)) this.newMenus.push(item);
    });
  },
  methods: {
    exit() {
      this.$router.push("/login");
      //清除动态路由缓存
      location.reload();
    },
  },
};
</script>

<style>
#home {
  height: 100vh;
  display: flex;
  color: #fafffb;
}
header {
  background: #262d47;
  height: 70px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  display: flex;
  flex-direction: column;
  background: #171c30;
  height: 100%;
  width: 100%;
}
aside {
  width: 220px;
  background: #262d47;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.logo-img {
  width: 50px;
  height: 50px;
}

.href {
  color: #67708d;
  text-decoration:none
}
.href:hover {
  color: #fafffb;
  text-decoration:none
}
main {
  flex: 1;
}
</style>
