<template>
  <div class="home">
    <div>Home页面</div>
    <button @click="getData">setup getData</button>
    <div>id: {{ data.value.data.data.id }}</div>
    <button @click="methodGetData">methods getData</button>
    <div>id: {{ id }}</div>
  </div>
</template>

<script>
import { reactive } from "vue";
import API from "../service/api";
export default {
  setup() {
    let data = reactive({value: { data: { data: { id: "" }}}});
    const user = reactive({ name: "", password: "" });

    const getData = async () => {
      console.log(user);
      data.value = await API.getData('/getData')
      console.log(data)
    };

    return {
      user,
      data,
      getData,
    };
  },

  data() {
    return {
      id: ""
    }
  },

  methods: {
    async methodGetData() {
      const { data } = await API.getData('/getData')
      this.id = data.data.id
    }
  }
}
</script>
