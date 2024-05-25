import Results from "../pages/Results";
import DetailsResults from "../pages/DetailsResults";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "../layouts/Content";
import NotFound from "../pages/NotFound";

function ResultsNote() {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname.startsWith("/detail-results")) {
      return "Details Results";
    } else {
      return "Results";
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-8">
      <h2 className="text-base/10 font-semibold text-center bg-gray-700 text-white">
        {getPageTitle()}
      </h2>
      <div className="flex flex-col lg:flex-row md:h-72 lg:h-max lg:divide-x-2 lg:divide-gray-200 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Results />} />
          <Route path="detail-results/:title" element={<DetailsResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default ResultsNote;
