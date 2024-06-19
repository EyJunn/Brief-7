'use client'

import getMyAsset from "@/Services/Users";
import { assetsProps } from "@/Utils/types";
import { useEffect, useState } from "react";
import CreateCyrptoModal from "../Modals/CreateCryptoModal";
import CreateOfferModal from "../Modals/CreateOfferModal";

export const MyCrytpo = () => {
  const [userCrypto, setUserCrypto] = useState<assetsProps>()

  useEffect(() => {
    getMyAsset().then((res) => {
      setUserCrypto(res)
    })


  }, [])

  return (
    <div className="overflow-scroll h-64 overflow-x-hidden">
      {userCrypto && userCrypto.UserHasCrypto?.map((user) => {
        return (
          <div key={user.Crypto.id} className="flex m-10  items-center justify-center ">
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative w-2/5  overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                  src={user.Crypto.image}
                  alt="image unsplash"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                  {user.Crypto.name}
                </h2>

                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  In my wallet: {user.amount}
                </p>
                <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                  Value of the currency: {user.Crypto.value.toFixed(2)}
                </p>
              </div>
              <CreateOfferModal id={user.Crypto.id} />
            </div>
          </div>
        )
      })}



    </div>
  )
}