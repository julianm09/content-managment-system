import axios from "axios";

export const getAllWaypoints = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/api/waypoint`);

    return response.data.data;
  } catch (error) {
    console.log(error.reponse);
    return {
      error: error.response,
    };
  }
};
