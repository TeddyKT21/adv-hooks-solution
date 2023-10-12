import { useReducer } from "react";
import { cartReducer } from "../util/cartReducer";
import { items } from "../util/items";
import Product from "./Product";
import CartItem from "./CartItem";

export default function ManageCart() {
  const initialState: Cart = { items: [] };
  const [cart, dispatch] = useReducer(cartReducer,initialState);
  console.log(cart);

  return (
    <div>
      <h2>item to add:</h2>
      <div>
        {items.map((item) => (
          <Product
            key={item.id}
            product={item}
            addProduct={() => dispatch({ type: "+", payload: { id: item.id } })}
          />
        ))}
      </div>
      <h2>items in cart:</h2>
      <div>
        {cart.items.map((item) => (
          <CartItem
            key={item.product.id}
            item={item}
            addItem={() =>
              dispatch({ type: "+", payload: { id: item.product.id } })
            }
            removeOne={() =>
              dispatch({ type: "-", payload: { id: item.product.id } })
            }
            deleteItem={() =>
              dispatch({ type: "delete", payload: { id: item.product.id } })
            }
          />
        ))}
      </div>
    </div>
  );
}
