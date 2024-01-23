"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    if (mode) setMode(false);
    else setMode(true);
  };
  return (
    <div className="flex justify-between px-20 max-sm:px-3 py-3 items-center shadow" id="nav">
      <h1 className="text-2xl font-bold">Where in the world?</h1>
      <h4
        className="flex gap-2 items-center cursor-pointer"
        onClick={handleMode}
      >
        <FontAwesomeIcon icon={faMoon} height={20} />
        <span>Dark Mode</span>
      </h4>
    </div>
  );
}
