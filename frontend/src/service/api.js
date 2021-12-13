import service from "./index";

const API = {};

API.getLogin = (params) => {
  return service.get("/login", { params: params });
}

API.getData = () => {
  return service.get("/getData");
}

export default API;