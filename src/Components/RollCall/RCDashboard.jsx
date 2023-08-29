import React from 'react'
import ReportDashboard from '../ReportDashboard'
import RCProgressBar from './RCProgressBar'
import RCCountDiv from './RCCountDiv'
import RCLabel from './RCLabel'

const RCDashboard = () => {
    return (
        <div className='mt-24 px-4'>
            <div className='bg-[#f4f6f9] lg:mx-auto max-w-7xl rounded-3xl  w-full h-[60vh]'>
                <div className="flex-1 items-center justify-left h-24 bg-[#2194FF] rounded-t-3xl ">
                    <h2 className="text-md font-medium px-8 text-[#E6E6E6] pt-5 ">MUN Report </h2>
                    <p className="text-2xl px-8 pt-1 text-white font-extrabold">Roll Call</p>

                </div>
                <div className='px-4'>
                   <RCCountDiv/>
                   <RCLabel/>
                <RCProgressBar/>
                </div>
               
            </div>

        </div>
    )
}

export default RCDashboard
