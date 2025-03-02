import React from "react";
import ShinyButton from "../components/NavBar";
import TrueFocus from "@/app/animations/TrueFocus"

function App() {
  return (
    <>
    <div className="flex justify-center items-center h-[30px] w-[150px] border-[1px] rounded-full transition duration-300 hover:scale-105 ">
      <ShinyButton/>
      </div>

      <div>
      <TrueFocus/> 
    </div>
    </>
  );
}

export default App;