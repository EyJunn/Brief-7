import { HomePage } from '@/Services/homepage'
import HomeCard from '@/components/Cards/HomeCard'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

const home = () => {
  return (
    <div>
        <Header/>
         <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
            <div>
            

                <h1>Je veux juste mettre un titre</h1>
                  <HomeCard Name={''} image={''} value={0} quantity={0} />
            
            </div>
        
         </main>
        <Footer />
    </div>
  )
}

export default home