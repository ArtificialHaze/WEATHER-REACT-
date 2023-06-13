import React, { useState } from "react";
import { AiOutlineSearch, AiFillCompass } from "react-icons/ai";
import { toast } from "react-toastify";

const Search = ({ setQuery, unit, setUnit }) => {
  const { city, setCity } = useState("");

  const handleSearch = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((pos) => {
        toast.success("Location Successfully fetched.");
        let lon = pos.coords.longitude;
        let lat = pos.coords.latitude;
        setQuery({
          lat,
          lon,
        });
      });
    }
    setQuery({ q: city });
  };

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (selectedUnit !== unit) setUnit(selectedUnit);
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search.."
          className="text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize rounded-sm placeholder:lowercase"
        />
        <AiOutlineSearch
          onClick={handleSearch}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-105"
        />
        <AiFillCompass
          onClick={handleLocation}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-105"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center ml-5">
        <button
          className="text-white text-xl font-light hover:scale-125 transition-all ease-in-out duration-200"
          name="metric"
          onClick={handleUnitChange}
        >
          &deg;C
        </button>
        <p className="text-xl text-white mx-3">&#124;</p>
        <button
          className="text-white text-xl font-light hover:scale-125 transition-all ease-in-out duration-200"
          name="imperial"
          onClick={handleUnitChange}
        >
          &deg;F
        </button>
      </div>
    </div>
  );
};

export default Search;
