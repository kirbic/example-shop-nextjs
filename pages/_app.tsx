// pages/_app.js
import React from "react";
import { UserProvider, getAccessToken, getSession } from "@kirbic/nextjs";
import { CartContainer } from "@kirbic/react";

function App({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <UserProvider>
      <CartContainer shop_id={process.env.NEXT_PUBLIC_KIRBIC_SHOP}>
        <Component {...pageProps} />
      </CartContainer>
    </UserProvider>
  );
}

App.getInitialProps = async ({ ctx: { req, res } }) => {
  const session = getSession(req, res);
  console.log("session");
  console.log(session);
  const token = getAccessToken(req, res);
  console.log("token");
  console.log(token);
  return {};
};

export default App;
