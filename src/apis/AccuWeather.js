import axios from "axios";
const KEY = "gHRpT9oFaGh88J1R6tMEMhKrvlCjNCyx";

export default axios.create({
  baseURL: "http://dataservice.accuweather.com"
});
export { KEY };
