import { baseService } from "./baseService";

export class productService extends baseService {
  getHome() {
    return this.baseGET("/home", false);
  }
}