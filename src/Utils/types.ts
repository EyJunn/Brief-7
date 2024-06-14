

export type registerProps = {
  firstName: string
  lastName: string
  pseudo: string
  city: string
  email: string
  password: string
  promoCode?: string
  age: number
}

export type loginProps ={
  email: string
  password: string
}

export type homeCardProps ={
  name: string
  image: string
  value: number
  quantity: number

}

export type dataCryptoProps={
  id: string
  name: string
  value: number
  image: string
  quantity: number
  created_at: string
  updated_at: string
}

export type assetsProps ={
  firstName: string
  lastName: string
  dollarAvailables: number
  pseudo: string
  age: number
  UserHasCrypto?: UserCryptoProps[]
}

export type OfferProps={
   id: string
  User: {
    pseudo: string
  }
  amount: number
  created_at: string
  id_user: string
  Crypto: dataCryptoProps
}

export type UserCryptoProps={
  Crypto: {
    created_at: string
    id: string
    image: string
    name: string
    quantity: number
    updated_at: string
    value: number
  }
  amount: number
}

export type createPromoCodeProps ={
  name: string
  value: number
}