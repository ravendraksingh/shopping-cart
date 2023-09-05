import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./autocomplete.css";

const AutoComplete = () => {
  const [show, setShow] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [products, setProducts] = useState([]);
  const [activeProductId, setActiveProductId] = useState(-1);

  const fetchProduct = async (searchText) => {
    const res = await fetch(
      "https://dummyjson.com/products/search?q=" + searchText
    );
    const data = await res.json();
    return data.products;
  };

  const handleSearch = async (e) => {
    let userInput = e.target.value;
    if (userInput && userInput.length < 3) {
      setUserInput(userInput);
      //   setShow(false);
      //   setProducts([]);
    }
    if (userInput && userInput.length > 2) {
      const products = await fetchProduct(userInput);
      console.log("fetched products", products);
      setProducts(products);
      setShow(true);
    }
  };

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
  };

  const listItemClicked = (e) => {
    console.log(e.target.id);
    const prodid = e.target.id;
    const id = prodid.split("-")[1];

    setActiveProductId(id);
    window.location.assign("/products/" + id);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   console.log(activeProductId);

  return (
    <div className="d-flex flex-column flex-grow-1">
      <input
        type="text"
        className="form-control"
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        // onClick={() => setShow(true)}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {products && products.length > 0 && (
            <div className="searchList">
              <ul>
                {products.map((product) => (
                  <li
                    className="listitem"
                    id={`productid-${product.id}`}
                    onClick={listItemClicked}
                  >
                    {`[${product.title}] `}
                    {/* {`${product.description.substring(0, 50)}`} */}
                    {`${product.description}`}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AutoComplete;
