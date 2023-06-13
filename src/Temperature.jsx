import React from "react";
import { BsSun } from "react-icons/bs";
import { GiSunset } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiDroplet } from "react-icons/fi";
import { BiWind } from "react-icons/bi";
import { formatToLocalTime, iconUrlFromCode } from "./APIutils";

const Temperature = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_Like,
    timezone,
  },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="Weather-icon" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}`}&deg;C</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureHigh size={18} className="mr-1" />
            Feels like:{" "}
            <span className="font-medium ml-1">
              {`${feels_Like.toFixed()}`}&deg;C
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <FiDroplet size={18} className="mr-1" />
            Humidity:{" "}
            <span className="font-medium ml-1">{`${humidity.toFixed()}`}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BiWind size={18} className="mr-1" />
            Wind:{" "}
            <span className="font-medium ml-1">
              {`${speed.toFixed()}`} km/h
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <BsSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <GiSunset />
        <p className="font-light">
          Set:
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>
        <BsSun />
        <p className="font-light">
          High:
          <span className="font-medium ml-1">
            {`${temp_max.toFixed()}`}&deg;C
          </span>
        </p>
        <p className="font-light">|</p>
        <BsSun />
        <p className="font-light">
          Low:
          <span className="font-medium ml-1">
            {`${temp_min.toFixed()}`}&deg;C
          </span>
        </p>
      </div>
    </div>
  );
};

export default Temperature;
