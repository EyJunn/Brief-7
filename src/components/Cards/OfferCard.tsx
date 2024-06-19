import { OfferProps } from '@/Utils/types'
import React, { Dispatch, SetStateAction } from 'react'
import { Cryptocard } from './CryptoCard'
import { buyOffer } from '@/Services/Offer'
import { toast } from 'react-toastify'

const OfferCard = ({offer, setIsReload}:{offer: OfferProps, setIsReload: Dispatch<SetStateAction<boolean>>}) => {

        function handleBuyOffer(offerId:string){
            buyOffer(offerId).then((res)=>{
                setIsReload(true)
                if (res.status === 201){
                        toast.success("Congratulations, you just buy it!")
                    }
                    if (res.status === 204){
                        toast.error("Items alreadys sold!")
                    }
                    
                
                
            }).catch((e)=>toast.error("Error"))
        }

  return (
    <div>
        <p>Number of tokens: {offer.amount}</p>
        <p>Seller: {offer.User.pseudo} </p>
        <Cryptocard crypto={offer.Crypto} isBuyVisible={false} />
        <div className='w-full flex justify end'>
            <button className='bg-white text-center rouded-s text-black p-1 mt-1'
            onClick={()=>{
                handleBuyOffer(offer.id)
            }}>Buy</button>
        </div>
    </div>
  )
}

export default OfferCard