/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function Card(params: any) {
  return (
    <Link href={`/${params.numericCode}`}>
      <div className="rounded-md overflow-hidden cursor-pointer" id="card">
        <div className="h-1/2" id="card-top">
          <img
            className="object-cover w-full h-full"
            src={params.imageUrl}
            alt="image"
          />
        </div>
        <div className="h-1/2 p-5" id="card-bottom">
          <span className="font-bold text-lg" id="name">
            {params.name}
          </span>
          <div className="mt-2">
            <ul>
              <li>
                <span className="font-semibold">Population: </span>
                <span>{params.pop}</span>
              </li>
              <li>
                <span className="font-semibold">Region: </span>
                <span>{params.reg}</span>
              </li>
              <li>
                <span className="font-semibold">Capital: </span>
                <span>{params.cap}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
