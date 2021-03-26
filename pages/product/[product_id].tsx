import { Cart } from "../../components/Cart";
import { ProductsList } from "../../components/ProductsList";
import { User } from "../../components/User";

const ProductDetailPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Kirbic demo shop</h1>
      <User />
      <Cart />
      <ProductsList />
    </div>
  );
};

export default ProductDetailPage;
