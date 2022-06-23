import React, { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Description = () => {
  let [categories] = useState({
    Description: [
      {
        id: 0,
        title:
          "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
      },
    ],
    "Additional Information": [
      {
        id: 1,
        title:
          "Aenean commodo ligula eget dolor. Anything: 10 answers to your questions aboutAnything: 10 answers to your questions about consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
      },
    ],
    "Reviews (3)": [
      {
        id: 2,
        title: "Ask Me  Anything: 10 answers to your questions about Anything: 10 answers to your questions about coffee Ask Me Anything: 10 answers to your questions about coffee Ask Me Anything: 10 answers to your questions about coffee",
      },
    ],
  });

  return (
    <div className="w-full max-w-full px-2  sm:px-0">
      <Tab.Group>
        <Tab.List className="flex justify-center items-center ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "px-11 rounded-t-2xl text-2xl outline-none font-medium text-center py-4 leading-none",
                  "",
                  selected
                    ? "bg-[#262a33]  text-white leading-none"
                    : "text-[#262a33]"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-[#262a33] p-3",
                "focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <div key={post.id} className="flex">
                       <div className="basis-1/2 ">
                      <p className="text-base text-white px-20 py-20"> {post.title}</p>
                    </div>
                    <div className="basis-1/2 ">
                      <p className="text-base text-white px-20 py-20"> {post.title}</p>
                    </div>
                  </div>
                 
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Description;
