import React, { useEffect, useState } from "react";
import { fetchData } from "./utils";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export const Carousal = () => {
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(
          "https://picsum.photos/v2/list?page=1&limit=10"
        );
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  function nextImage() {
    if (index === data.length - 1) setIndex(0);
    else setIndex(index + 1);
  }

  function previousImage() {
    if (index === 0) setIndex(data.length - 1);
    else setIndex(index - 1);
  }

  if (loading) {
    return <h1 className="mx-auto">Loading...</h1>;
  } else {
    return (
      <div className="my-8">
        <h1 className="text-center text-xl font-semibold">
          Basic Click Slider
        </h1>
        <div className="flex items-center gap-3 w-[380px] h-[200px] mx-auto my-2">
          <FaChevronLeft
            className="w-10 h-10 p-2 shadow-3xl rounded-full bg-slate-300 hover:bg-slate-400 cursor-pointer"
            onClick={previousImage}
          />
          <div className="w-fit h-fit ">
            <img src={data[index].download_url} alt="" />
          </div>
          <FaChevronRight
            className="w-10 h-10 p-2 shadow-3xl rounded-full bg-slate-300 hover:bg-slate-400 cursor-pointer"
            onClick={nextImage}
          />
        </div>
      </div>
    );
  }
};

export default Carousal;
