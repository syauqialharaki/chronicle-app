import Button from "./Button";

function SearchNote() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-8">
      <h2 className="text-base/10 font-semibold text-center bg-gray-700 text-white">
        Search Note
      </h2>
      <div className="md:flex bg-white">
        <div className="px-4 w-full">
          <div className="mt-7 mb-4 max-full">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <input
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black text-center"
                  placeholder=""
                  wfd-id="id8"
                />
              </label>
              <div className="flex justify-center">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchNote;
