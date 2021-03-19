import { useCart } from "@kirbic/react";

export const PriceActions = ({ price_id }) => {
  const { line_delete, line_add, line_remove } = useCart();
  return (
    <div>
      <button onClick={() => line_delete(price_id)}>Delete line</button>
      <button onClick={() => line_add(price_id)}>ADD ONE</button>
      <button onClick={() => line_remove(price_id)}>REMOVE ONE</button>
    </div>
  );
};
