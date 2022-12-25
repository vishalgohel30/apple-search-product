import React, { useEffect, useState } from "react";

const uniqueArray = (a, b) => [...new Set((a || []).map((i) => i[b]))];

const initialState = {
  title: "",
  brand: "",
  category: "",
};
export default function ItemSidbar({ data, handleSearch,handleReset }) {
  const [state, setState] = useState(initialState);

  useEffect(()=>{
    if(data && data[0]){ setState({...state,brand:uniqueArray(data, "brand")[0], category:uniqueArray(data, "category")[0] }) }
  },[data])

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <div className="bg-light border rounded-3">
      <div className="container text-center">
        <div className="row mt-2">
          <div className="col-md-12">
            <input
              type="text"
              name={"title"}
              className="form-control"
              placeholder="title"
              value={state.title}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <select
              className="form-select"
              onChange={handleChange}
              name={"brand"}
              value={state.brand}
              aria-label="brand"
            >
              {uniqueArray(data, "brand").map((brand) => (
                <option value={brand} key={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12">
            <select
              className="form-select"
              onChange={handleChange}
              name={"category"}
              value={state.category}
              aria-label="category"
            >
              {uniqueArray(data, "category").map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row mt-2">
          <div className="col-md-12 d-grid gap-2">
            <button type="button" className="btn btn-dark" onClick={()=> handleSearch(state)}>
              Search
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12 d-grid gap-2">
            <button type="button" className="btn btn-dark" onClick={()=> {
             setState({...state,brand:uniqueArray(data, "brand")[0], category:uniqueArray(data, "category")[0] })
                handleReset()}}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
