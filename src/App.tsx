import { useQuery } from "react-query";
import { FC, useState } from "react";
import { Drawer, CircularProgress, Grid, Badge } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material/";
import { Wrapper, StyledButton } from "./App.styles";
import { getProducts } from "./services/products";
import Item from "./components/item/Item";
import Cart from "./components/cart/Cart";
import { IProducts } from "./types/interfaces";

const App: FC = () => {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as IProducts[]);

  const { data, isLoading, error } = useQuery<IProducts[]>(
    "products",
    getProducts
  );

  if (isLoading) return <CircularProgress />;
  if (error) return <div>{"somthings went wrong..."}</div>;

  const getTotalItems = (items: IProducts[]) =>
    items.reduce((acc, cur) => acc + cur.amount, 0);

  const handleAddToCart = (clickedItem: IProducts) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFormCart = (id: number) => {
    setCartItems((prev) => {
      return prev.reduce((acc, cur) => {
        if (cur.id === id) {
          if (cur.amount === 1) return acc;
          return [...acc, { ...cur, amount: cur.amount - 1 }];
        } else {
          return [...acc, cur];
        }
      }, [] as IProducts[]);
    });
  };

  console.log(data);
  return (
    <Wrapper className="App">
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFormCart}
        />
      </Drawer>
      <StyledButton onClick={() => setOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </StyledButton>

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
