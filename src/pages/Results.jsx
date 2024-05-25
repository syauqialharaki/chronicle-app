import notesData from "../utils/Data";
import { Link } from "react-router-dom";

const Results = () => {
  const activeNotes = notesData.filter((note) => !note.archived);
  const archivedNotes = notesData.filter((note) => note.archived);

  return (
    <>
      <div className="w-full bg-white ">
        <h3 className="text-base/10 text-center  text-white bg-gray-600">
          Active
        </h3>
        <div className=" lg:overflow-y-auto lg:max-h-72">
          {activeNotes.length > 0 ? (
            activeNotes.map((item) => (
              <div
                key={item.id}
                className="m-3 p-4 rounded-lg bg-gray-200 text-xs"
              >
                <a className="mb-2 px-3 w-full flex items-center justify-center font-semibold">
                  {item.title}
                </a>
                <p
                  className="mb-2 px-3 overflow-hidden text-center"
                  style={{
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                  }}
                >
                  {item.body}
                </p>
                <Link
                  to={`/detail-results/${item.title}`}
                  className="flex items-center p-1 align-center justify-center rounded-md bg-gray-400 text-white"
                >
                  Selengkapnya
                </Link>
              </div>
            ))
          ) : (
            <a className="h-20 w-full flex items-center justify-center">
              Sorry, there are no notes here
            </a>
          )}
        </div>
      </div>
      <div className=" w-full bg-white">
        <h3 className="text-base/10 text-center text-white bg-gray-600 ">
          Archieve
        </h3>
        <div className=" lg:overflow-y-auto lg:max-h-72 text-xs">
          {archivedNotes.length > 0 ? (
            archivedNotes.map((item) => (
              <div
                key={item.id}
                className="m-3 p-4 rounded-lg bg-gray-200 text-xs"
              >
                <a className="mb-2 px-3 w-full flex items-center justify-center font-semibold">
                  {item.title}
                </a>
                <p
                  className="mb-2 px-3 overflow-hidden text-center"
                  style={{
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                  }}
                >
                  {item.body}
                </p>
                <Link
                  to={`/detail-results/${item.title}`}
                  className="flex items-center p-1 align-center justify-center rounded-md bg-gray-400 text-white"
                >
                  Selengkapnya
                </Link>
              </div>
            ))
          ) : (
            <a className="h-20 w-full flex items-center justify-center">
              Sorry, there are no notes here
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
