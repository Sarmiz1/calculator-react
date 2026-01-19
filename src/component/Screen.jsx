import { useState } from "react";


function ScreenDispay({ displayData, inputData }) {



  return (
    <div className="border-2 border-blue-700 dark:border-violet-900 
    rounded-[2rem] h-40 w-full flex flex-col items-end text-right justify-center gap-4 px-5 bg-black/80 dark:bg-white/40 md:w-5/6 lg:w-4/6 mt-5 mb-10 p-3 overflow-hidden">
      <h1 className="text-4xl font-mono text-white dark:text-black mt-6">
        {displayData} 
      </h1>
      <h2 className="text-2xl 
      font-mono text-white dark:text-black">
        {inputData}
      </h2>
    </div>
  );
}

export default ScreenDispay;