import { apolloExt } from "./apolloClient";
import { THE_GRAPH_URL } from "../constants/constants";

class ApiService {
  public async getTickers(query: string) {
    const res = await apolloExt(query, THE_GRAPH_URL);
    return res?.data;
  }
}

export default new ApiService();
