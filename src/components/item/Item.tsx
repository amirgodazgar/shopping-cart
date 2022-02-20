import { Button } from "@mui/material";
import { IProducts } from "./../../types/interfaces";
import { Wrapper } from "./item.styles";
import React, { FC } from "react";

type Props = {
  item: IProducts;
  handleToCart: (clickedItem: IProducts) => void;
};

const Item: FC<Props> = ({ item, handleToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>{item.price} $</h3>
      </div>
      <Button onClick={() => handleToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
};

export default Item;
