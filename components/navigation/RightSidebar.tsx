import Image from "next/image";
import Link from "next/link";
import React from "react";

import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "How to create a custom hook in React?" },
  { _id: "2", title: "What is Context API in React?" },
  { _id: "3", title: "How to optimize React components for performance?" },
  { _id: "4", title: "What are the benefits of using React Hooks?" },
  {
    _id: "5",
    title: "What is the difference between let and const in TypeScript?",
  },
];

const popularTags = [
  { _id: "1", name: "React", questions: 1750 },
  { _id: "2", name: "Angular", questions: 4500 },
  { _id: "3", name: "Vue.js", questions: 8500 },
  { _id: "4", name: "JavaScript", questions: 12000 },
  { _id: "5", name: "CSS", questions: 18000 },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              // TODO: move href to routes constants
              href={`/question/${_id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>

              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
