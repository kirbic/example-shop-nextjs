import { useCart, Price } from "@kirbic/react";
import { PriceActions } from "./PriceActions";

export const Cart = () => {
  const { cart, hasItems, cart_delete, redirect_to_checkout } = useCart();
  if (hasItems) {
    return (
      <div style={{ border: "1px solid red", padding: 20, marginTop: 10 }}>
        <h2>Cart</h2>
        <div className="cart" style={{ marginBottom: 20 }}>
          {cart.lines.map((item) => (
            <div key={item.price.id}>
              <p>
                Article: {item.product.name}, Price ref: {item.price.name}
              </p>
              {item.quantity}x <Price price={item.price} />
              <PriceActions price_id={item.price.id} />
            </div>
          ))}
        </div>
        <button onClick={() => cart_delete()}>CLEAR ENTIRE CART</button>
        <div style={{ marginTop: 40 }}>
          <button onClick={() => redirect_to_checkout()}>CHECKOUT</button>
        </div>
      </div>
    );
  } else {
    return <h2>Kirbic cart is empty, please add items</h2>;
  }
};
