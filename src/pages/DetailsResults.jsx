import { useEffect, useState } from "react";
import Button from "../components/Button";
import notesData from "../utils/Data";
import { useParams } from "react-router-dom";

const DetailsResults = () => {
  const { title } = useParams();

  const [note, setNote] = useState(null);

  useEffect(() => {
    const foundNote = notesData.find((note) => note.title === title);
    if (foundNote) {
      setNote(foundNote);
    }
  }, [title]);

  return (
    <div className="px-4 w-full min-h-fit">
      <div className="mt-7 mb-4 max-full">
        <div className="grid grid-cols-1 gap-6">
          <span className="text-gray-700 text-center font-semibold text-xl">
            {note && note.title}
          </span>
          <span className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black text-center leading-loose"></span>
          <span className="text-gray-700 h-20 min-h-fit text-center">
            {note && note.body}
          </span>
          <span className="mt-0 block w-full px-0.5 border-0 border-b-2 h-fit border-gray-200 focus:ring-0 focus:border-black text-center leading-loose"></span>
          <div className="flex flex-col sm:flex-row items-center sm:justify-center lg:justify-end">
            <Button />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsResults;
