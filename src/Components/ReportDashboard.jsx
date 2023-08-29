import React from 'react'

const ReportDashboard = () => {
  return (
    <div className="print-container">
      <div className="bg-white mt-20 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">MUN Report for Committee</h2>
            <p className="mx-auto max-w-screen-md text-center font-bold text-gray-500 md:text-xl">28 August 2023</p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        <a href="#" class="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
          <img src="RC.png" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
  
          <div class="relative mt-auto p-4">
            <h2 class="mb-2 text-xl font-semibold text-white transition duration-100">ROLL CALL</h2>
  
            <span class="font-semibold text-indigo-300">Click to view report in detail</span>
          </div>
        </a>
       
        <a href="#" class="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
          <img src="GSL.png" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
  
          <div class="relative mt-auto p-4">
            <h2 class="mb-2 text-xl font-semibold text-white transition duration-100">GENERAL SPEAKERS LIST</h2>
  
            <span class="font-semibold text-indigo-300">Click to view report in detail</span>
          </div>
        </a>
        
        <a href="#" class="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
          <img src="MC.png" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
  
          <div class="relative mt-auto p-4">
            <h2 class="mb-2 text-xl font-semibold text-white transition duration-100">MODERATED CAUCUS</h2>
  
            <span class="font-semibold text-indigo-300">Click to view report in detail</span>
          </div>
        </a>
        
        <a href="#" class="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-64 xl:h-96">
          <img src="UC.png" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent md:via-transparent"></div>
  
          <div class="relative mt-auto p-4">
            <h2 class="mb-2 text-xl font-semibold text-white transition duration-100">UNMODERATED CAUCUS</h2>
  
            <span class="font-semibold text-indigo-300">Click to view report in detail</span>
          </div>
        </a>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ReportDashboard
