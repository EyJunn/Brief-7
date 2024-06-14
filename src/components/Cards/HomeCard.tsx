
import { homeCardProps } from '@/Utils/types'


const HomeCard = ({image, name, quantity, value}: homeCardProps) => {
    
  return (
    <div>
        <div className="flex m-10  items-center justify-center">
         <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
           <div className="relative w-2/5  overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
             <img
               src={image}
               alt="image unsplash"
               className="h-96 w-full object-cover bg-center "
             />
           </div>
           <div className="p-6">
             <h2 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
               {name}
             </h2>
             <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {value}
             </h4>
             <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              {quantity}
             </p>
           </div>
         </div>
       </div> 
    </div>
  )
}

export default HomeCard