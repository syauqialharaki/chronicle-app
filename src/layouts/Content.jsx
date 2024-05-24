import React from "react";
import NewNote from "../components/NewNote";
import SearchNote from "../components/SearchNote";
import HeaderLayout from "./Header";
import ResultsNote from "../components/ResultsNote";

function Main() {
  return (
    <div className="flex flex-col md:flex-row flex-grow container mx-auto py-4 px-3 ">
      <div className="basis-1/3 mx-5 md:content-start lg:content-center ">
        <HeaderLayout />
        <NewNote />
      </div>
      <div className="mx-5 basis-2/3 md:content-start lg:content-center">
        <SearchNote />
        <ResultsNote />
      </div>
    </div>
  );
}

export default Main;
