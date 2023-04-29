import React from "react";

import { Cards, Footer, Header, Main } from "@components/scss";
import { MobileLayout } from "@components/layout/mobile-layout";

const Home: React.FC = () => {
  const a = 1;
  return (
    <div
      className="main"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <MobileLayout></MobileLayout>
      {/* <Header />
      <Main />
      <Cards />
      <Footer /> */}
    </div>
  );
};

export default Home;
