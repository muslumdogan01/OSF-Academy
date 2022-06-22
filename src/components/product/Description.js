import React, { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Description = () => {
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-full max-w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl  p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5  ",
                  "",
                  selected ? "bg-[#262a33]  text-white" : "text-[#262a33]"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-black p-3",
                "focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
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

//   const [showModal, setShowModal] = useState(false);

//   const showDescription = () => {
//     setShowModal(!showModal);
//   };

// <div className="flex flex-col w-full">
//   <div className="flex justify-around items-center w-full">
//     <button onClick={showDescription}>Description</button>
//     <button onClick={showDescription}>Description</button>
//     <button>Description</button>
//   </div>
//   <div
//     className={`w-full p-20 flex bg-black text-white ${
//       showModal ? "hidden" : "visible"
//     }`}
//   >
//     <div className="basis-1/2 pr-10">
//       Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
//       penatibus et magnis dis parturient montes, nascetur ridiculus mus.
//       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
//       commodo ligula eget dolor. Aenean massa.{" "}
//     </div>
//     <div className="basis-1/2 pl-10">
//       Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
//       ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
//       pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
//       fringilla vel, aliquet nec, vulputate eget, arcu.{" "}
//     </div>
//   </div>
// </div>
