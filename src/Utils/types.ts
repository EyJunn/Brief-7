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
  Name: string
  image: string
  value: number
  quantity: number

}