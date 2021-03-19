// pages/_app.js
import React from "react";
import { UserProvider } from "@kirbic/nextjs";
import { CartContainer } from "@kirbic/react";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <CartContainer shop_id={process.env.NEXT_PUBLIC_KIRBIC_SHOP}>
        <Component {...pageProps} />
      </CartContainer>
    </UserProvider>
  );
}
