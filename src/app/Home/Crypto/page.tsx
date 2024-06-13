'use client'

import { getAllCryptos } from '@/Services/crypto'
import { dataCryptoProps } from '@/Utils/types'
import { Cryptocard } from '@/components/Cards/CryptoCard'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [cryptosList, setCryptosList] = useState<dataCryptoProps[]>()

    useEffect(()=>{
        getAllCryptos().then((res)=> setCryptosList(res)).catch((e)=>{console.log(e)})
    },[])
  return (
    <div>
        <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="flex flex-wrap items-center">
                         {cryptosList &&
                     cryptosList?.map((crypto) => {
                      return (
                       <div
                        key={crypto.id}
                        className="border-2 border-solid w-80 h-80 rounded-md m-8 p-4 bg-cyan-600"
                                      >
                           <Cryptocard crypto={crypto} isBuyVisible={true} />
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