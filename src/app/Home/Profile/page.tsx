'use client'

import getMyAsset from '@/Services/Users'
import { assetsProps } from '@/Utils/types'
import ProfileCard from '@/components/Cards/ProfileCard'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [asset, setAsset] = useState<assetsProps>()

  useEffect(() => {
    getMyAsset().then((res) => {
      setAsset(res)
    })


  }, [])

  return (
    <div className='bg-gradient-to-tr from-violet-500 to-orange-300'>
      <Header />
      <main className="flex h-screen justify-center items-center p-24">
        <div className='h-auto w-auto'>
          {asset &&
            <ProfileCard firstName={asset.firstName} lastName={asset.lastName} dollarAvailables={asset.dollarAvailables} pseudo={asset.pseudo} age={asset.age} />

          }
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default page