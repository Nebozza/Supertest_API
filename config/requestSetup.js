import urlConfig from "./url_config";
import supertest from "supertest";
const request = supertest(urlConfig.baseUrl);

export default request;