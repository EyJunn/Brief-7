

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
  dollarAvailable: number
  pseudo: string
  UserHasCrypto: []
}