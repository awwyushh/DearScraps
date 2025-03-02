import React from "react";
import ShinyButton from "../components/NavBar";
import TrueFocus from "@/app/animations/TrueFocus";
import DecayCard from "@/app/animations/ScrapCard";
import SpotlightCard from "../components/DescriptionCard1";
import ClickSpark from "@/app/animations/ClickSpark";

function App() {
  return (
    <>
    <ClickSpark>
      <div className="flex justify-center items-center h-[30px] w-[150px] border-[1px] rounded-full transition duration-300 hover:scale-105 ">
        <ShinyButton />
      </div>

      <div className="max-h-[150px]">
        <TrueFocus />
      </div>

      {/* Flexbox wrapper to align both cards in a row */}
      <div className="flex justify-center items-start gap-6 mt-[40px]">
        {/* DecayCard */}
        <DecayCard width={200} height={300}>
          <h2>Decay<br />Card</h2>
        </DecayCard>

        {/* DescriptionCard */}
        <SpotlightCard
          className="custom-spotlight-card w-[600px]"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <p>
            Reminisce old times by making scrapbooks of unforgettable memories.
            Create fun scrapbooks with pictures and music too!
            Add cool transitions and themes to make your scrapbooks come to life.
            Collaborate with your friends and make digital scrapbooks in the comfort of your own homes.
          </p>
        </SpotlightCard>
      </div>
      </ClickSpark>
    </>
  );
}

export default App;
