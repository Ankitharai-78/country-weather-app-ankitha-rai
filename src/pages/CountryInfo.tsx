import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import styles from "./CountryInfo.module.css";
import usePrevious from "../hooks/usePrevious";
import useWeatherApi from "../hooks/useApi";
import { getValue } from "@testing-library/user-event/dist/utils";

const CountryInfo = () => {
    const navigate = useNavigate();
    const [countryName, setCountryName] = useState("");
    const [triggerFetch, setTriggerFetch] = useState(false);
    const localState:any = useLocation().state;
    const { data, error, isLoading } = useWeatherApi(countryName, triggerFetch);
    const [locationData1, setLocationData1] = useState<any>({
      
    })
    const [locationData, setLocationData] = useState<any>({
      location: { population: " ",lat: "",lon: "",country: ""},
    });

    useEffect(() => {
      if (data) navigate("/CountryDetails", { state: { data } });
    }, [data]);

    useEffect(() => {
      if (!localState.data) {
        navigate("/");
      }
        else{
        const { location } = localState.data;
        setLocationData({ location});
      }
    }, []);

    return(
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.weatherData}>
         
            <div>
              <h3>Capital Population:</h3>
              {locationData.location.localtime_epoch}
              </div>
           
           
            <div>
              <h3>Lattitude:</h3>
              {locationData.location.lat}
              </div>
            
            <div>
              <h3>Longitude:</h3>
              {locationData.location.lon}
            </div>
            
            <div>
              <h3>Country:</h3>
              {locationData.location.country}
            </div>
          </div>
        </div>
        <button onClick={()=>navigate("/countryDetails")}>
          {locationData.location.region}
        </button>      
      </div>
      );
  };    
export default CountryInfo;