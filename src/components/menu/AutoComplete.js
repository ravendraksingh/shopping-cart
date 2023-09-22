import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./autocomplete.css";

const AutoComplete = () => {
  const [show, setShow] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [products, setProducts] = useState([]);
  //const [activeProductId, setActiveProductId] = useState(-1);

  useEffect(() => {
    // console.log("userInput", userInput);
    if (userInput.length < 3) {
      setProducts([]);
    } else {
      const getDataTimeoutId = setTimeout(() => {
        fetch("https://dummyjson.com/products/search?q=" + userInput)
          .then((res) => res.json())
          .then((data) => {
            if (data?.products?.length > 0) {
              setProducts(data.products);
            }
          });
      }, 500);

      return () => {
        clearTimeout(getDataTimeoutId);
      };
    }
  }, [userInput]);

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
  };

  const navigate = useNavigate();

  const listItemClicked = (e) => {
    console.log("item clicked", e.target.id);
    const prodid = e.target.id;
    const id = prodid.split("-")[1];
    // setActiveProductId(id);
    // window.location.assign("/products/" + id);
    // navigate(`/products/${id}`);
    //window.location.assign(`/products/${id}`);
  };

  window.onclick = (e) => {
    // console.log("window clicked", e.target.id, show);
    if (e.target.id === "searchmodal") {
      setShow(false);
    }
  };

  return (
    <div className="d-flex flex-column w-50">
      <input
        id="userInput"
        type="text"
        className="form-control user__input"
        placeholder="Search product (type min 3 chars)"
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        onClick={() => setShow(true)}
      />
      {show && products && products.length > 0 && (
        <div id="searchmodal" className="search__modal">
          <div id="modalcontent" className="container modal__content">
            {products && products.length > 0 && (
              <div className="searchList">
                <ul>
                  {products.map((product) => (
                    <Link to={`/products/${product.id}`} target="_top">
                      <li
                        className="listitem"
                        id={`productid-${product.id}`}
                        onClick={listItemClicked}
                      >
                        {`[${product.title}] `}
                        {/* {`${product.description.substring(0, 50)}`} */}
                        {`${product.description}`}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
