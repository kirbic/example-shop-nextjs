import useSWR from "swr";
import axios from "axios";
import { PriceActions } from "./PriceActions";
import Link from "next/link";

const kirbic_api = axios.create({
  baseURL: "https://api.kirbic.com",
  withCredentials: true,
  headers: {
    "x-shopcopter-shop": process.env.NEXT_PUBLIC_KIRBIC_SHOP,
  },
});

const fetcher = async (url) => {
  const res = await kirbic_api.get(url);
  return res.data;
};

export const ProductsList = () => {
  const { data } = useSWR("/catalog/product", fetcher);
  return (
    <div style={{ border: "1px solid blue", padding: 20, marginTop: 10 }}>
      <h2>Products list</h2>
      {data &&
        data.items.map((item) => (
          <div className="product" key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.prices.map((price) => (
              <PriceActions key={price.id} price_id={item.prices[0].id} />
            ))}
            <Link href={`/product/${item.slug}`}>See product details</Link>
          </div>
        ))}
    </div>
  );
};
