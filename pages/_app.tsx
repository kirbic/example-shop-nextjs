// pages/_app.js
import React from "react";
import { UserProvider, ssr_session } from "@kirbic/nextjs";
import { Kirbic } from "@kirbic/react";

const App = ({ Component, pageProps, kirbic_session }) => {
  // the kirbic_session loaded from ssr contains the user, an access_token and a permissions array
  // console.log(kirbic_session);

  return (
    <UserProvider initialUser={kirbic_session.user}>
      <Kirbic
        config={{
          shop_id: process.env.NEXT_PUBLIC_KIRBIC_SHOP,
          access_token: kirbic_session.access_token,
        }}
      >
        <Component {...pageProps} />
      </Kirbic>
    </UserProvider>
  );
};

App.getInitialProps = async ({ ctx }) => {
  // NOTE: Use the kirbic_session.access_token to do api requests
  const kirbic_session = await ssr_session(ctx);
  return { kirbic_session };
};

export default App;
