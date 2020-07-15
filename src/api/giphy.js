import axios from "axios";

const api_key = "xITEva27lz201oHiZqSBGRV4k6Dj2Kxm";

const giphy = axios.create({
  baseURL: "https://api.giphy.com/v1",
});

export const fetchGifs = async (extraParams) => {
  const res = await giphy.get("/gifs/trending", {
    params: {
      api_key,
      ...extraParams,
    },
  });
  return res.data;
};

export const searchForGifs = async (q = "", extraParams) => {
  const res = await giphy.get("/gifs/search", {
    params: {
      api_key,
      q,
      ...extraParams,
    },
  });
  return res.data;
};

export default giphy;
