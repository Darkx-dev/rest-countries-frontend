/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import data from "@/_data/data.json";

export default function CountryDetails({
  params,
}: {
  params: {
    countryId: string;
  };
}) {
  const [country, setCountry]: any = useState({});
  const [currencies, setCurrencies]: any = useState([""]);
  const [languages, setLanguages]: any = useState([""]);
  useEffect(() => {
    data.filter((country) => {
      if (country.numericCode == params.countryId) {
        setCountry(country);
        setCurrencies(country.currencies);
        setLanguages(country.languages);
      }
    });
  });
  return (
    <main className="text-white">
      <div>Back</div>
      <div className="flex items-center justify-center">
        <div className="w-1/2 h-full bg-black" id="d-left">
          <img src={country.flags?.svg} alt="" />
        </div>
        <div className="w-1/2 space-y-5" id="d-right">
          <h3 className="text-2xl font-bold">{country.name}</h3>
          <div>
            <ul className="grid grid-cols-2 mb-10" id="details">
              <li>
                <span>Native Name: </span>
                <span>{country.nativeName}</span>
              </li>
              <li>
                <span>Population: </span>
                <span>{country.population}</span>
              </li>
              <li>
                <span>Region: </span>
                <span>{country.region}</span>
              </li>
              <li>
                <span>Sub Region: </span>
                <span>{country.subregion}</span>
              </li>
              <li>
                <span>Top Level Domain: </span>
                <span>{country.topLevelDomain}</span>
              </li>
              <li>
                <span>Currencies: </span>
                {country.currencies?.map(
                  (
                    currency: {
                      name: string;
                    },
                    index: number
                  ) => {
                    return (
                      <span key={index}>
                        {index > 0 ? "," : ""}
                        {currency.name}
                      </span>
                    );
                  }
                )}
              </li>
              <li>
                <span>Languages: </span>
                {country.languages?.map(
                  (
                    language: {
                      name: string;
                    },
                    index: number
                  ) => {
                    return (
                      <span key={index}>
                        {index > 0 ? "," : ""}
                        {language.name}
                      </span>
                    );
                  }
                )}
              </li>
              <li>
                <span>Capital: </span>
                <span>{country.capital}</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="font-bold">Border Countries: </h4>
            <ul className="flex flex-wrap gap-2" id="border-countries">
              <li>France</li>
              <li>Germany</li>
              <li>Netherlands</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
