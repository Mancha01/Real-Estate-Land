import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "0444968a33mshc5c80f484c1c4d0p1a5bc1jsndea874482ba6",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
};
