import Button from "./Button";

function NewNote() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 mb-0">
      <h2 className="text-base/10 font-semibold text-center bg-gray-700 text-white">
        Create a New Note
      </h2>
      <div className="md:flex">
        <div className="px-4 w-full">
          <div className="mt-7 mb-4 max-w-md">
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                <span className="text-gray-700">Title</span>
                <input
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black required"
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Content</span>
                <textarea
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black required"
                  rows="4"
                ></textarea>
              </label>
              <div className="flex justify-center lg:justify-end">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewNote;
