'use client'


import { getAllCryptos } from '@/Services/crypto'
import { dataCryptoProps } from '@/Utils/types'
import HomeCard from '@/components/Cards/HomeCard'
import { Search } from '@/components/CryptoComponents/Search'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect, useState } from 'react'

const home = () => {

  const [cryptos, setCryptos] = useState<dataCryptoProps[]>([])

  useEffect(() => {
    getAllCryptos().then((res) => {
      setCryptos(res)
    })


  }, [])


  return (
    <div className='bg-gradient-to-tr from-violet-500 to-orange-300'>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 ">

        <div>
          <Search setCryptos={setCryptos} />
          {cryptos && cryptos.map((crypto) => {
            return <HomeCard name={crypto.name} value={crypto.value} image={crypto.image} quantity={crypto.quantity} />
          })}

        </div>

      </main>
      <Footer />
    </div>
  )
}

export default home