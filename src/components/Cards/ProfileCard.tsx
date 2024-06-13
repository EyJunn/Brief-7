
import { assetsProps } from '@/Utils/types'
import React from 'react'
import { MyCrytpo } from '../MyCrypto'

const ProfileCard = ({firstName, lastName, dollarAvailables, pseudo, age}: assetsProps) => {
 

  return (
    <div className="flex m-10  items-center justify-center">
         <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
           <div className="p-6">
             <h2 className="mb-4 block font-sans text-2xl font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
               {firstName}
             </h2>
             <h4 className="mb-2 block font-sans text-l font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {lastName}
             </h4>
             <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              {pseudo}
             </p>
             <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              {dollarAvailables}
             </p>
             <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
             {age} years old
             </p>
           </div>
         </div>
         <MyCrytpo />
       </div> 
  )
}

export default ProfileCard