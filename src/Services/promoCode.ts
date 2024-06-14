import { createPromoCodeProps } from "@/Utils/types"
import axios from "axios"

export async function createPromoCode(createPromoCodeProps : createPromoCodeProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/create`

  let axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .post(
      url,
      {
        name: createPromoCodeProps.name,
        value: createPromoCodeProps.value
      },
      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}