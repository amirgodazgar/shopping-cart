import { useQuery } from "react-query";
import { FC, useState } from "react";
import { Drawer, CircularProgress, Grid, Badge } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material/";
import { Wrapper } from "./App.styles";
import { getProducts } from "./services/products";
import Item from "./components/item/Item";

interface IProducts {
  category: string;
  description: string;
  id: number;
  image: string;
  price: 109.95;
  rating: { rate: number; count: number };
  title: string;
}

const App: FC = () => {
  const { data, isLoading, error } = useQuery<IProducts[]>(
    "products",
    getProducts
  );

  if (isLoading) return <CircularProgress />;
  if (error) return <div>{"somthings went wrong..."}</div>;

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: IProducts) => {
    console.log(clickedItem);
  };

  const handleRemoveFormCart = () => null;

  console.log(data);
  return (
    <Wrapper className="App">
      <Grid container spacing={3}>
        {data?.map((item, key: number) => (
          <Grid item key={key} xs={12} sm={4}>
            <Item item={item} handleToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
