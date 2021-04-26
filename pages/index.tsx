import { useKirbic } from "@kirbic/react";
import { Cart } from "../components/Cart";
import { ProductsList } from "../components/ProductsList";
import { User } from "../components/User";

const IndexPage = () => {
  const { shop_id } = useKirbic();
  return (
    <div>
      <h1>Kirbic demo shop</h1>
      <p>
        shop_id: <pre>{shop_id}</pre>
      </p>
      <User />
      <Cart />
      <ProductsList />
    </div>
  );
};

export default IndexPage;
