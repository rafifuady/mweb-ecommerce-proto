import Axios from "axios";

export class baseService {
  baseURL = "https://private-4639ce-ecommerce56.apiary-mock.com/";
  constructor(baseURL) {
    this.baseURL = typeof baseURL === "undefined" ? this.baseURL : baseURL;
  }

  getHeader(useAuth) {
    const AUTH_TOKEN = JSON.parse(localStorage.getItem("auth_token"));
    let headers = {};
    headers = {
      ...headers,
      ...{
        "Content-Type": "application/json",
      },
    };

    if (AUTH_TOKEN && useAuth) {
      headers = { ...headers, ...{ Authorization: "Bearer " + AUTH_TOKEN } };
    }

    return headers;
  }

  async baseHTTP(url, method, body, useAuth) {
    let response = {
      isError: false,
      message: "",
      data: null,
    };
    try {
      if (method === "GET" || method === "DELETE") {
        response.data = await (
          await Axios({
            method: method,
            url: this.baseURL + url,
            headers: this.getHeader(useAuth),
          })
        ).data;
      } else {
        response.data = await (
          await Axios({
            method: method,
            url: this.baseURL + url,
            headers: this.getHeader(useAuth),
            data: body,
          })
        ).data;
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("lastLogin");
        localStorage.removeItem("role");
        localStorage.removeItem("userDetail");
        localStorage.removeItem("remember");
      }
      response = {
        isError: true,
        message: error.response,
        data: {},
      };
    }
    return response;
  }

  baseGET(url, useAuth) {
    return this.baseHTTP(url, "GET", {}, useAuth);
  }

  basePOST(url, body, useAuth) {
    return this.baseHTTP(url, "POST", body, useAuth);
  }

  baseDELETE(url, useAuth) {
    return this.baseHTTP(url, "DELETE", {}, useAuth);
  }

  basePUT(url, body, useAuth) {
    return this.baseHTTP(url, "PUT", body, useAuth);
  }
}
