import dotenv from "dotenv";
dotenv.config();

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";
const headers = new Headers();
if (process.env.NEXT_PUBLIC_RAPID_API_KEY)
  headers.append("X-RapidAPI-Key", process.env.NEXT_PUBLIC_RAPID_API_KEY);
else console.error("RAPID_API_KEY is not defined in the environment.");
headers.append("X-RapidAPI-Host", "youtube-v3-alternative.p.rapidapi.com");

const options: RequestInit = {
  method: "GET",
  headers,
};

export const fetchFromApi = async (url: string): Promise<Response> => {
  const response = await fetch(`${BASE_URL}/${url}`, options);
  return response;
};
