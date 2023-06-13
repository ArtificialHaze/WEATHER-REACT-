import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Tbilisi",
    },
    {
      id: 5,
      title: "Washington",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          onClick={() => setQuery({ q: city.title })}
          className="text-white text-lg font-medium"
          key={city.id}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
