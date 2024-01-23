import CountryList from "@/components/CountryList";
import { useEffect } from "react";
import data from "@/_data/data.json";

export default function Home() {
  return (
    <div>
      <main>
        <CountryList/>
      </main>
    </div>
  );
}
