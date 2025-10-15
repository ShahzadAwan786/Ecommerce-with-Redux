import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  allProduct,
  fetchErrorProduct,
  fetchLoadingProduct,
} from "../../store/productReducer";
import { fetchData } from "../../store/middleware/apiMiddleware";
import { loadData } from "../../store/cartListReducer";
export default function Header() {
  const cartItems = useSelector((state) => state.cartlist.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchData({
        url: "products",
        onSucess: allProduct.type,
        onLoading: fetchLoadingProduct.type,
        onError: fetchErrorProduct.type,
      })
    );
    // dispatch(fetchData({ url: "carts/5", onSucess: loadData.type }));
    // dispatch({ type: "api/makeCall", payload: { url: "carts/5" } });
    // dispatch(fetchLoadingProduct());
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => dispatch(allProduct(data)))
    //   .catch(() => {
    //     dispatch(fetchErrorProduct());
    //   });
    // fetch("https://fakestoreapi.com/carts/5")
    //   .then((res) => res.json())
    //   .then((data) => dispatch(loadData(data)));
  }, []);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
          </div>
        </Link>
      </div>
    </header>
  );
}
