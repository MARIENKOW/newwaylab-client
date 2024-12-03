import { $AdminApi } from "../http/index.js";
import config from "../configs/config.js";
import axios from "axios";

const PRODUCT_API_URL = config.SERVER_API + "/ProductLine";

export default class ProductLineService {
   constructor($api = $AdminApi) {
      this.create = async (value) => {
         const res = await $api.post(PRODUCT_API_URL + "/", value);
         return res;
      };
      this.getAll = async () => {
         const res = await axios.get(PRODUCT_API_URL + "/");
         return res;
      };
      this.getAllWithItems = async () => {
         const res = await axios.get(PRODUCT_API_URL + "/"+'with-items');
         return res;
      };

      this.update = async (id, value) => {
         const res = await $api.put(PRODUCT_API_URL + "/" + id, value);
         return res;
      };
      this.delete = async (id) => {
         const res = await $api.delete(PRODUCT_API_URL + "/" + id);
         return res;
      };
      this.getById = async (id) => {
         const res = await $api.get(PRODUCT_API_URL + "/" + id);
         return res;
      };
   }
}
