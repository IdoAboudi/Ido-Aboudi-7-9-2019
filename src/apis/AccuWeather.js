import axios from "axios";
//gHRpT9oFaGh88J1R6tMEMhKrvlCjNCyx
//FLumycQlGxikzKoWXY2loMFmQ8h97wns
const KEY = "gHRpT9oFaGh88J1R6tMEMhKrvlCjNCyx";

export default axios.create({
  baseURL: "http://dataservice.accuweather.com"
});
export { KEY };
