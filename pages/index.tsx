import React from "react";

import { Cards, Footer, Header, Main } from "@components/scss";

const Home: React.FC = () => {
  const a = 1;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Main />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
