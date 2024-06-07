import React, { useEffect, useState } from "react";
import Header from "../common/Header";

const Table = () => {
  let count = 0;
  const getcount = () => {
    count += 1;
    return count;
  };
  const [Tops, setTops] = useState([]);
  useEffect(() => {
    async function LoadTops() {
      const response = await fetch("http://127.0.0.1:8000/top", {
        method: "GET",
      }).then((res) => res.json().then((data) => setTops(data)));
    }
    LoadTops();
  }, []);

  return (
    <div className="d-flex flex-column All align-items-center justify-content-around">
      <Header />
      <div className="header h1">SCORE TABLE TOP(10)</div>
      <div className="container">
        <div className="row text-center fw-bold py-2">
          <div className="col header">ROW</div>
          <div className="col header">NAME</div>
          <div className="col header">SCORE</div>
        </div>
        {Tops.map((user) => (
          <div className="row text-center py-2" key={user.name}>
            <div className="col header">{getcount()}</div>
            <div className="col header">{user.name}</div>
            <div className="col header">{user.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;