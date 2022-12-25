import React from "react";

export default function ItemList({ data }) {
  return (
    <div className="bg-light border rounded-3">
      <div className="container">
        {data.map((itemObj) => {
          return (
            <div className="row m-2" key={`${itemObj.title}-${itemObj.brand}`}>
              <div className="col-md-12 ">
                <div className="row  border rounded overflow-hidden flex-md-row shadow-sm position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 ">
                      {itemObj.title}
                    </strong>
                    <div className="row">
                      <div className="col-md-6">
                        <strong>Brand:</strong>
                        {itemObj.brand}
                      </div>
                      <div className="col-md-6">
                        {" "}
                        <strong>Category:</strong>
                        {itemObj.category}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <strong>Price:</strong>
                        {itemObj.price}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <strong>Description:</strong>
                        {itemObj.description}
                      </div>
                    </div>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img src={itemObj.thumbnail}  width="200px" height="200px"/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
