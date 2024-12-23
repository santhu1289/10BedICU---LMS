"use client";
import Reacr, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import dynamic from "next/dynamic";

const MyDynamicComponent = dynamic(() => import("./components/MyComponent"), {
  ssr: false,
});

interface props {}

const Page: FC<props> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div>
      <Heading
        title="10BedICU"
        description="e-Learning platform for comperhensive critical care"
        keywords=""
      />
      <MyDynamicComponent />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
    </div>
  );
};

export default Page;
