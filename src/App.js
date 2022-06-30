import React from "react";
import Layout from "./hoc/Layout/Layout";
import Header from "./Container/Header/Header";
import SectionHow from "./Container/SectionHow/SectionHow";
import SectionTesti from "./Container/SectionTesti/SectionTesti";

function App() {
  return (
    <Layout>
      <Header />
      <SectionHow />
      <SectionTesti />
    </Layout>
  );
}

export default App;
