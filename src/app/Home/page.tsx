'use client'

import { HomePage } from '@/Services/homepage'
import { dataCryptoProps, homeCardProps } from '@/Utils/types'
import HomeCard from '@/components/Cards/HomeCard'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect, useState } from 'react'

const home = () => {

  const [cryptos, setCryptos] = useState<dataCryptoProps[]>([])

      useEffect(()=>{
      HomePage().then((res)=>{
      setCryptos(res)})

      
      },[])


  return (
    <div>
        <Header/>
         <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
            <div>
            
    {cryptos && cryptos.map((crypto)=>{
         return <HomeCard  name={crypto.name} value={crypto.value} image={crypto.image} quantity={crypto.quantity}   />
    })}
                 
            
            </div>
        
         </main>
        <Footer />
    </div>
  )
}

export default home