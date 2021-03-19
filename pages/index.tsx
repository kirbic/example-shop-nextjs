import { Cart } from "../components/Cart";
import { ProductsList } from "../components/ProductsList";
import { User } from "../components/User";

const IndexPage = () => {
  return (
    <div>
      <h1>Kirbic demo shop</h1>
      <User />
      <Cart />
      <ProductsList />
    </div>
  );
};

export default IndexPage;
