import axios from "axios";
const KEY = "gHRpT9oFaGh88J1R6tMEMhKrvlCjNCyx";

export default axios.create({
  baseURL: "https://dataservice.accuweather.com"
});
export { KEY };
