function Main() {
  return (
    <div
      id="container-awal"
      className="flex flex-col md:flex-row flex-grow container mx-auto py-4 px-3 "
    >
      <div className="basis-1/3 mx-5 md:content-start lg:content-center ">
        <h1 className="mt-8 mb-5 text-2xl rounded-md font-bold text-center uppercase text-gray-700">
          Chronicle Apps
        </h1>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-8">
          <h2 className="text-base/10 font-semibold text-center bg-gray-700 text-white">
            Create a New Note
          </h2>
          <div className="md:flex">
            <div class="px-4 w-full">
              <div class="mt-7 mb-4 max-w-md">
                <div class="grid grid-cols-1 gap-6">
                  <label class="block">
                    <span class="text-gray-700">Title</span>
                    <input
                      type="text"
                      class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                      placeholder=""
                      wfd-id="id8"
                    />
                  </label>
                  <label class="block">
                    <span class="text-gray-700">content</span>
                    <textarea
                      class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                      rows="4"
                    ></textarea>
                  </label>
                  <div className="flex justify-center lg:justify-end">
                    <button class="rounded-lg bg-gray-500 h-8 text-white w-32 center">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 basis-2/3 md:content-start lg:content-center">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-8">
          <h2 className="text-base/10 font-semibold text-center bg-gray-700 text-white">
            Search Note
          </h2>
          <div className="md:flex bg-white">
            <div class="px-4 w-full">
              <div class="mt-7 mb-4 max-full">
                <div class="grid grid-cols-1 gap-6">
                  <label class="block">
                    <input
                      type="text"
                      class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black text-center"
                      placeholder=""
                      wfd-id="id8"
                    />
                  </label>
                  <div className="flex justify-center">
                    <button class="rounded-lg bg-gray-500 h-8 text-white w-32">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl m-8">
          <h2 className="text-base/10 font-semibold text-center bg-gray-700 text-white">
            Results
          </h2>
          <div className="flex flex-col lg:flex-row lg:h-96 divide-x-2 divide-gray-200">
            <div className="w-full bg-white ">
              <h3 className="text-base/10 text-center  text-white bg-gray-600">
                Active
              </h3>
              <div className="wrapper lg:overflow-y-auto lg:max-h-96 ">
                <a className="h-20 w-full flex items-center justify-center">
                  Sorry, there are no notes here
                </a>
              </div>
            </div>
            <div className=" w-full bg-white">
              <h3 className="text-base/10 text-center text-white bg-gray-600 ">
                Archieve
              </h3>
              <div className="wrapper lg:overflow-y-auto lg:max-h-96">
                <a className="h-20 w-full flex items-center justify-center">
                  Sorry, there are no notes here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
