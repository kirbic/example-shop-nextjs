import { useCart, Price } from "@kirbic/react";
import { PriceActions } from "./PriceActions";

export const Cart = () => {
  const { cart, hasItems, cart_delete } = useCart();
  console.log(cart);
  if (hasItems) {
    return (
      <div>
        <div className="cart">
          {cart.lines.map((item) => (
            <div>
              <p>Article: {item.product.name}</p>
              <Price price={item.price} />
              <PriceActions price_id={item.price.id} />
            </div>
          ))}
        </div>
        <button onClick={() => cart_delete()}>CLEAR ENTIRE CART</button>
      </div>
    );
  } else {
    return <h2>Kirbic cart is empty, please add items</h2>;
  }
};
