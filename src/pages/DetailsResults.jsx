import Button from "../components/Button";

function DetailsResults() {
  return (
    <div className="px-4 w-full">
      <div className="mt-7 mb-4 max-full">
        <div className="grid grid-cols-1 gap-6">
          <span className="text-gray-700">Title</span>
          <span className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black text-center leading-loose"></span>
          <span className="text-gray-700">Content</span>
          <span className="mt-0 block w-full px-0.5 border-0 border-b-2 h-fit border-gray-200 focus:ring-0 focus:border-black text-center leading-loose"></span>
          <div className="flex flex-col sm:flex-row items-center sm:justify-center lg:justify-end">
            <Button />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsResults;
