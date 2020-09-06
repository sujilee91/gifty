import React, { useEffect, useState } from "react";
import {
  addItemToWishlist,
  wishlistListner,
} from "../../FirebaseFunctions/wishlist";

const fakeAccountKey = "6969696";

export const Dashboard = () => {
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    wishlistListner(fakeAccountKey, setWishlist);
  }, []);

  console.log("$$$ - Dahsboard - wishlist", wishlist);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span>Wishlist</span>
      <button onClick={() => addItemToWishlist(fakeAccountKey)}>
        Add Wishlist Item
      </button>
      {Object.keys(wishlist).map((wishListItemId) => {
        const wishListItem = wishlist[wishListItemId];
        const { name, price, link, id, description, created_by } = wishListItem;
        return (
          <div
            style={{ height: "auto", width: "200px", border: "1px solid grey" }}
          >
            <a target="_blank" href={link}>
              <h1>Name: {name}</h1>
            </a>
            <code>price: {price}</code>
            <p>description: {description} </p>
          </div>
        );
      })}
    </div>
  );
};
