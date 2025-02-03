import axios from "axios";

import BASE_URL from "./baseUrl";

const jobApi = {
  getJobs: async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching jobs:", error);
      throw error;
    }
  },
};

export default jobApi;
