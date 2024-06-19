import { dataCryptoProps } from '@/Utils/types'
import React from 'react'
import { BuyCryptoModal } from '../Modals/BuyCryptoModals'


export const Cryptocard = ({ crypto, isBuyVisible }: { crypto: dataCryptoProps, isBuyVisible: boolean}) => {
  return (
    <div>
      <img
        src={crypto.image}
        alt={crypto.name}
        className="w-full h-48  object-cover"
      />
      <p>{crypto.name}</p>

      <p className="text-sm">Value: {crypto.value}</p>
      <p className="text-sm">Quantity: {crypto.quantity}</p>
      <BuyCryptoModal crypto={crypto} isBuyVisible={isBuyVisible} />
    </div>
  )
}
