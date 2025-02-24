import React from "react";
import WorkCards from "./WorkCards";
import { Apps } from "../works";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

const WorksList = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-rose-100 h-fit pt-20 px-72 pb-14">
      <button
        className="flex gap-2 p-2 bg-white rounded-sm font-bold cursor-pointer "
        onClick={() => navigate(-1)}
      >
        <ArrowLeft />
        <span>Back</span>
      </button>
      <h1 className="mt-20 text-4xl font-bold text-gray-500">
        HERE ARE SOME OF MY PROJECT LINKS
      </h1>
      <div className="grid grid-cols-3 gap-6 container mx-auto py-4 ">
        {Apps.map((item) => {
          return (
            <WorkCards
              key={item.key}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WorksList;
