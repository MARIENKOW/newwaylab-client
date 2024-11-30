import { $AdminApi } from "../http/index.js";
import config from "../configs/config.js";

const ITEM_API_URL = config.SERVER_API + "/Item";

export default class ItemService {
   constructor($api = $AdminApi) {
      this.create = async (value) => {
         const res = await $api.post(ITEM_API_URL + "/", value, {
            headers: { "Content-Type": "multipart/form-data" },
         });
         return res;
      };
      this.update = async (id, value) => {
         const res = await $api.put(ITEM_API_URL + "/" + id, value, {
            headers: { "Content-Type": "multipart/form-data" },
         });
         return res;
      };
      this.delete = async (id) => {
         const res = await $api.delete(ITEM_API_URL + "/" + id);
         return res;
      };
      this.getById = async (id) => {
         const res = await $api.get(ITEM_API_URL + "/" + id);
         return res;
      };
   }
}
