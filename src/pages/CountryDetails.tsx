import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import styles from "./CountryDetails.module.css";
import useWeatherApi from "../hooks/useApi";
import usePrevious from "../hooks/usePrevious";
import { TypeOfTag } from "typescript";

const CountryDetails = () => {
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [countryName, setCountryName] = useState("");
  const previousCountry = usePrevious(countryName);
  const localState:any = useLocation().state;
  const [locationData, setLocationData] = useState<any>({
    location: { name: "New Delhi", country: "India", timezone_id:"Asia\/Kolkata" },
    current: { temperature: "24", weather_icons: ["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0006_mist.png"], wind_speed:"9" },
  });
  const navigate = useNavigate();

 /*useEffect(() => {
    if (!localState.data) {
      navigate("/");
    } else {
      const { location,current } = localState.data;
      setLocationData({ location,current});
    }
  }, []);*/

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.weatherData}>

          <img
            className={styles.weatherIcon}
            alt="Image icon"
            src={locationData.current.weather_icons[0]}
          />
          <span>
            {locationData.current.temperature}
            <sup>°C</sup>
          </span>

          <h4>{locationData.current.wind_speed}</h4>
        </div>
        <p>
          {locationData.location.name}, {locationData.location.timezone_id},&nbsp;
          {locationData.location.country}
        </p>
      </div>
      <button onClick={() => navigate("/")}> ← Back</button>
    </div>
  );
};

export default CountryDetails;