// pages/_app.js
import React from "react";
import { UserProvider, ssr_session } from "@kirbic/nextjs";
import { CartContainer } from "@kirbic/react";

function App({ Component, pageProps, kirbic_session }) {
  // the kirbic_session loaded from ssr contains the user, an access_token and a permissions array
  console.log(kirbic_session);

  return (
    <UserProvider initialUser={kirbic_session.user}>
      <CartContainer shop_id={process.env.NEXT_PUBLIC_KIRBIC_SHOP}>
        <Component {...pageProps} />
      </CartContainer>
    </UserProvider>
  );
}

App.getInitialProps = async ({ ctx: { req, res } }) => {
  // NOTE: Use the kirbic_session.access_token to do api requests
  const kirbic_session = await ssr_session(req, res);
  return { kirbic_session };
};

export default App;
