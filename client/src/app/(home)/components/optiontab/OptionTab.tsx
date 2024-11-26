"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import "./optiontab.css";
type Props = {};

const OptionTab = (props: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-20 ml-10 justify-center mx-auto px-4 py-2 max-w-4xl rounded-md bg-gray-100 shadow-md">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <div
        className="flex space-x-4 overflow-x-auto scrollbar-hide"
        ref={scrollRef}
      >
        <Button variant="outline">WareWolf</Button>
        <Button variant="outline">Vampire</Button>
        <Button variant="outline">Haunted Places</Button>
        <Button variant="outline">Urban Legends and Folklore</Button>

        <Button variant="outline">WareWolf</Button>
        <Button variant="outline">Vampire</Button>
        <Button variant="outline">Haunted Places</Button>
        <Button variant="outline">Urban Legends and Folklore</Button>

        <Button variant="outline">WareWolf</Button>
        <Button variant="outline">Vampire</Button>
        <Button variant="outline">Haunted Places</Button>
        <Button variant="outline">Urban Legends and Folklore</Button>
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default OptionTab;
