import React, { useState } from "react";
import Head from "next/head";
import ReviewCard from "../components/ReviewCard";

const Community = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <Head>
        <title>Zemoo | Community</title>
        <meta
          name="description"
          content="Blockchain based Ecommerce platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-24 h-screen w-9/12 mx-auto flex flex-col">
        <div className="pt-20">
          <div className="flex justify-center items-center">
            <div
              className={
                "h-16 cursor-pointer flex items-center justify-center rounded-l-full border-y-2 border-l-2 border-[#8247e5] font-medium " +
                (openTab === 1 ? "bg-[#8247e5] text-white" : "")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
            >
              <div
                className=" w-44 text-center text-xl"
                data-toggle="tab"
                role="tablist"
              >
                Technology
              </div>
            </div>
            <div
              className={
                "h-16 flex cursor-pointer items-center justify-center border-2 border-[#8247e5] font-medium " +
                (openTab === 2 ? "bg-[#8247e5] text-white" : "")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
            >
              <div
                className="w-44 text-center text-xl"
                data-toggle="tab"
                role="tablist"
              >
                Fashion
              </div>
            </div>
            <div
              className={
                "h-16 flex cursor-pointer items-center justify-center rounded-r-full border-y-2 border-r-2 border-[#8247e5] font-medium " +
                (openTab === 3 ? "bg-[#8247e5] text-white" : "")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
            >
              <div
                className="w-44 text-center text-xl"
                data-toggle="tab"
                role="tablist"
              >
                Books
              </div>
            </div>
          </div>
        </div>
        <div className="grow">
          <div className={openTab === 1 ? "block" : "hidden"}>
            <ReviewCard />
          </div>
          <div className={openTab === 2 ? "block" : "hidden"}>
            Fashion Space
          </div>
          <div className={openTab === 3 ? "block" : "hidden"}>Books Space</div>
        </div>
      </div>
    </>
  );
};

export default Community;
