'use client'

import { getAllOffer } from '@/Services/Offer'
import { OfferProps } from '@/Utils/types'
import { Cryptocard } from '@/components/Cards/CryptoCard'
import OfferCard from '@/components/Cards/OfferCard'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [offerList, setOfferList] = useState<OfferProps[]>([])
  const [isReload, setIsReloadd] = useState(false)
  useEffect(() => {
    getAllOffer()
      .then((res) => {
      setIsReloadd(false)
      setOfferList(res) 
      })
      .catch((e) => {
        setIsReloadd(false)
        console.log(e)
      })
  }, [isReload])
  return (
    <div className='bg-gradient-to-tr from-violet-500 to-orange-300'>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-wrap items-center">
          {offerList &&
            offerList?.map((offer) => {
              return (
                <div
                  key={offer.id}
                  className="border-2 border-solid w-80 h-100 rounded-md m-8 p-4 bg-orange-600"
                >
                  <OfferCard offer={offer} setIsReload={setIsReloadd} />
                </div>
              )
            })}
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default page