import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveLayout from "./layout/ResponsiveLayout";
import PostList from "./pages/PostList/PostList";

const Router = () => {
  return (
    <BrowserRouter>
      <ResponsiveLayout>
        <Routes>
          <Route path="/" element={<PostList />} />
        </Routes>
      </ResponsiveLayout>
    </BrowserRouter>
  );
};
export default Router;
