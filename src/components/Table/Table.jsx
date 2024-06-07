import React, { useEffect, useState } from "react";
import Header from "../common/Header";

const Table = () => {
  const [Tops, setTops] = useState([]);
  useEffect(() => {
    async function LoadTops() {
      const response = await fetch("http://127.0.0.1:8000/top", {
        method: "GET",
      }).then((res) => res.json().then((data) => setTops(data)));
    }
    LoadTops();
  }, []);

import React from "react";

const Table = () =>{
    return(
        <div > bye </div>
  );
};

export default Table;