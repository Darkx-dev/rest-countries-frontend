import React from "react";
import data from "@/_data/data.json";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function CountryList() {
  return (
    <div className="text-white p-10 max-sm:p-3">
      <div className="relative">
        <FontAwesomeIcon className="absolute bottom-1/3 left-5" icon={faSearch} height={20} />
        <input
          className="py-3 px-14 w-1/3 max-sm:w-full rounded-md"
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      <div className="cards-container grid grid-cols-4 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 gap-20 mx-auto] mt-10">
        {data.map((country, index) => {
          return (
            <Card
              key={index}
              name={country.name}
              imageUrl={country.flags.png}
              pop={country.population}
              reg={country.region}
              cap={country.capital}
              numericCode={country.numericCode}
            />
          );
        })}
      </div>
    </div>
  );
}


export async function getStaticProps() {
    const countries = data

    return {
        params: { countries }
    }
}