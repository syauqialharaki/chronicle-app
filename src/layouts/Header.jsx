import Button from "../components/Button";
function HeaderLayout() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className=" mt-8 text-2xl rounded-md font-bold text-center uppercase text-gray-700">
        Chronicle Apps
      </h1>
      <h2 className="mt-2 mb-5 text-lg rounded-md text-center text-gray-700">
        Welcome Ahmad Syauqi!
      </h2>
      <div className="flex justify-center">
        <Button />
      </div>
    </div>
  );
}

export default HeaderLayout;
