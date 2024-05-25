import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  return (
    // <div class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center flex flex-col flex-grow p-6 m-14">
      <p class="text-base font-semibold text-gray-600">404</p>
      <h1 class="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Page Not Found
      </h1>
      <p class="mt-6 text-base leading-7 text-gray-600">
        Maaf, kami tidak dapat menemukan halaman yang kamu cari
      </p>
      <div className="flex justify-center py-4">
        <Button to={"/"} classification="primary" />
      </div>
    </div>
    // </div>
  );
};

export default NotFound;
