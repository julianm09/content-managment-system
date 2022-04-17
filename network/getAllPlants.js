import axios from "axios";

export const getAllPlants = async () => {
  try {
    const response = await axios.get(`http://localhost:3001/api/plants`);

    return response.data.data;
  } catch (error) {
    console.log(error.reponse);
    return {
      error: error.response,
    };
  }
};
