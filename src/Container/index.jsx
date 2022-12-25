import React, { useEffect, useState } from "react";
import Header from "../Component";
import ItemList from "./ItemList";
import ItemSidbar from "./ItemSidbar";

export default function Container() {
  const [state, setState] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        setFilter(json.products);
        setState(json.products);
      });
  }, []);

  const handleSearch = (filter) => {
    setFilter(
      state.filter(
        (a) =>
          filter.title === a.title ||
          filter.brand === a.brand ||
          filter.category === a.category
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="container-fluid pb-3">
        <div
          className="d-grid gap-3"
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <ItemSidbar data={state} handleSearch={handleSearch} handleReset={()=>{setFilter(state)}}/>
          <ItemList data={filter} />
        </div>
      </div>
    </div>
  );
}
