import axios from "axios";

const api = axios.create({ baseURL: "https://api.sampleapis.com/beers/ale" });

async function GetAllItems() {
  try {
    const res = await api.get("/");
    return res;
  } catch (error) {
    throw error;
  }
}

export { GetAllItems };
