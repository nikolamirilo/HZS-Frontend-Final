import React from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home, AddItem, SingleItem } from "./pages";
import { ScrollToTop } from "./components";

const App = () => {
  return (
    <ScrollToTop>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo/:id" element={<SingleItem />} />
          <Route path="/add-item" element={<AddItem />} />
        </Routes>
      </Layout>
    </ScrollToTop>
  );
};
export default App;
