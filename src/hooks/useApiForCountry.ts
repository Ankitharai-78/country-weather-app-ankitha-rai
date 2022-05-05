import axios from "axios";
import { useEffect, useState } from "react";
import CountryInfo from "../pages/CountryInfo";
import usePrevious from "./usePrevious";

const ACCESS_KEY = "c3470c3e57a18fd8481ad3cdbeac05d1";
const API_ENDPOINT = `http://api.weatherstack.com/current?access_key=c3470c3e57a18fd8481ad3cdbeac05d1&query=`;

export default function useCountryApi(query: string, triggerFetch: boolean) {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState({ type: 0, message: "" });

  useEffect(() => {
    async function triggerApi() {
      try {
        setLoading(true);
        const response = await axios.get(API_ENDPOINT, {
          params: {
            access_key: ACCESS_KEY,
            query,
          },
        });
        if (response.data.success === false)
          setError({
            type: 400,
            message: "Please provide valid input",
          });
        else setData(response.data);
      } catch (e: any) {
        setError({ type: 500, message: "" });
      } finally {
        setLoading(false);
      }
    }
    if (query) triggerApi();
  }, [triggerFetch]);

  return { query };
}