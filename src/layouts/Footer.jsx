import { PiHeartFill } from "react-icons/pi";
import { LuArrowUpLeftSquare } from "react-icons/lu";

function LayoutFooter() {
  return (
    <footer className="relative h-12 py-2 px-3 bg-gray-200 text-center flex items-center justify-center">
      <p className="text-sm font-semibold text-gray-400 text-center">
        Made with love <PiHeartFill className="inline text-red-700" /> Ahmad
        Syauqi
      </p>
      <LuArrowUpLeftSquare className="absolute rotate-45 scale-125 right-10 -top-1.5 bg-black text-white rounded-sm" />
    </footer>
  );
}

export default LayoutFooter;
