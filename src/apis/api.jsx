/* eslint-disable no-useless-catch */
import axios from "axios";

const baseURL = "https://planpal.kro.kr/";
const request = async ({ url, method, body = {}, params }) => {
  try {
    const config = {
      baseURL,
      params,
    };

    const data =
      (method === "get" && (await axios.get(url, config))) ||
      (method === "post" && (await axios.post(url, body, config))) ||
      (method === "patch" && (await axios.patch(url, body, config))) ||
      (method === "put" && (await axios.put(url, body, config))) ||
      (method === "delete" && (await axios.delete(url, { ...config, data: body }))) ||
      {};
    return data;
  } catch (error) {
    throw error;
  }
};

export const GET = (url) => request({ url, method: "get" });
export const POST = (url, body) => request({ url, method: "post", body });
export const PATCH = (url, body) => request({ url, method: "patch", body });
export const PUT = (url, body) => request({ url, method: "put", body });
export const DELETE = (url, body) => request({ url, method: "delete", body });
