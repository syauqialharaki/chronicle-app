import Results from "../pages/Results";
import DetailsResults from "../pages/DetailsResults";

function ResultsNote() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-8">
      <h2 className="text-base/10 font-semibold text-center bg-gray-700 text-white">
        Results / Details Results
      </h2>
      <div className="flex flex-col lg:flex-row md:h-72 lg:h-72 lg:divide-x-2 lg:divide-gray-200">
        <Results></Results>
      </div>
    </div>
  );
}

export default ResultsNote;
