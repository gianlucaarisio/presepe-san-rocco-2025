import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      <Analytics />
    </>
  );
}
