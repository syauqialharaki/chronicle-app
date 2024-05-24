function Results() {
  return (
    <>
      <div className="w-full bg-white ">
        <h3 className="text-base/10 text-center  text-white bg-gray-600">
          Active
        </h3>
        <div className="wrapper lg:overflow-y-auto lg:max-h-72">
          <a className="h-20 w-full flex items-center justify-center">
            Sorry, there are no notes here
          </a>
        </div>
      </div>
      <div className=" w-full bg-white">
        <h3 className="text-base/10 text-center text-white bg-gray-600 ">
          Archieve
        </h3>
        <div className="wrapper lg:overflow-y-auto lg:max-h-72">
          <a className="h-20 w-full flex items-center justify-center">
            Sorry, there are no notes here
          </a>
        </div>
      </div>
    </>
  );
}

export default Results;
