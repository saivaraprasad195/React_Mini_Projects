import { useState } from "react";
import data from "./data";
export default function Accordian() {
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [multiples, setMultiples] = useState([]);

  function handleSelection(currentId) {
    setSelectedId(currentId === selectedId ? null : currentId);
  }

  function handleMultipleSelection(currentId) {
    let cpyMultiples = [...multiples];
    const index = cpyMultiples.indexOf(currentId);

    if (index === -1) cpyMultiples.push(currentId);
    else cpyMultiples.splice(index, 1);
    setMultiples(cpyMultiples);
  }

  return (
    <div>
      <h1 className="text-3xl text-center">Accordian</h1>
      <div className="w-[450px] mx-auto">
        <button
          className="p-2 mt-1 block bg-orange-400 mx-auto cursor-pointer"
          onClick={() => {setMultipleSelection(!multipleSelection)}}
        >
          Enable Multiple Selection
        </button>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="p-2 m-5 bg-rose-300">
              <p
                className="cursor-pointer flex justify-between items-center"
                onClick={
                  multipleSelection
                    ? () => handleMultipleSelection(item.id)
                    : () => handleSelection(item.id)
                }
              >
                {item.question} <span className="bg-rose-200 px-2 py-1">+</span>
              </p>
              {multipleSelection && multiples.includes(item.id) ? (
                <p className="bg-red-500 mt-2">{item.answer}</p>
              ) : (
                selectedId === item.id && <p>{item.answer}</p>
              )}
            </div>
          ))
        ) : (
          <h1>No Data Found</h1>
        )}
      </div>
    </div>
  );
}
