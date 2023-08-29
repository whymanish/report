import React from 'react';
import RCCountDiv from './RCCountDiv';

const RCProgressBar = () => {
  return (
    <div>
      <div className="mx-auto mt-36 max-w-5xl flex w-full h-20 bg-gray-200 rounded-xl overflow-hidden dark:bg-gray-700">
      
        <div
          className="flex flex-col justify-center overflow-hidden bg-[#37D3AD]"
          role="progressbar"
          style={{ width: "65%" }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        >
        <h1 className='lg:text-4xl font-extrabold m-2 text-white lg:ml-10'>65 %</h1>
      
        </div>
        <div
          className="flex flex-col justify-center overflow-hidden bg-[#2194FF]"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuenow={15}
          aria-valuemin={0}
          aria-valuemax={100}
        >
                  <h1 className='lg:text-4xl ml-2 font-extrabold text-white lg:ml-10'>25 %</h1>

        </div>
        <div
          className="flex flex-col justify-center overflow-hidden bg-[#6F6F6F] dark:bg-white"
          role="progressbar"
          style={{ width: "11%" }}
          aria-valuenow={30}
          aria-valuemin={0}
          aria-valuemax={100}
        >
                  <h1 className='lg:text-4xl ml-2 lg:ml-4 font-extrabold text-white '>11 %</h1>

        </div>
      </div>
    </div>
  );
}

export default RCProgressBar;
