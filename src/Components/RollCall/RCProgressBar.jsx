import React from 'react';

const RCProgressBar = () => {
  return (
    <div>
      <div className="mx-auto mt-96 max-w-5xl flex w-full h-20 bg-gray-200 rounded-lg overflow-hidden dark:bg-gray-700">
        <div
          className="flex flex-col justify-center overflow-hidden bg-[#37D3AD]"
          role="progressbar"
          style={{ width: "65%" }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        >
        <h1 className='text-'>65%</h1>
        </div>
        <div
          className="flex flex-col justify-center overflow-hidden bg-[#2194FF]"
          role="progressbar"
          style={{ width: "29%" }}
          aria-valuenow={15}
          aria-valuemin={0}
          aria-valuemax={100}
        />
        <div
          className="flex flex-col justify-center overflow-hidden bg-[#6F6F6F] dark:bg-white"
          role="progressbar"
          style={{ width: "06%" }}
          aria-valuenow={30}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

export default RCProgressBar;
