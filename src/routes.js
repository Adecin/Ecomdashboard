import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/errorPage/page404";
import { SamplePage } from "./pages/dashboardPages";

const Router = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SamplePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Router;