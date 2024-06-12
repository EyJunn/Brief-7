'use client'

import getMyAsset from '@/Services/Users'
import { assetsProps } from '@/Utils/types'
import ProfileCard from '@/components/Cards/ProfileCard'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect, useState } from 'react'

const profile = () => {
     const [asset, setAsset] = useState<assetsProps>()

      useEffect(()=>{
      getMyAsset().then((res)=>{
      setAsset(res)})

      
      },[])

  return (
    <div>
        <Header />
         <main className="flex h-screen justify-center items-center p-24">
            <div className='h-auto w-auto'>
        {asset && 
            <ProfileCard  firstName={asset.firstName} lastName={asset.lastName} dollarAvailable={asset.dollarAvailable} pseudo={asset.pseudo} UserHasCrypto={[]}  /> 
        
        }
        </div>
        </main>
       <Footer />
    </div>
  )
}

export default profile