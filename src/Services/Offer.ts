import { UserCryptoProps, createOfferProps } from "@/Utils/types"
import axios from "axios"

export async function getAllOffer() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/all`
  let jwt = window.localStorage.getItem("token")

  let axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${jwt}`
    },
  }
  return axios
    .get(
      url,
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw new Error(e)
    })
}

export async function buyOffer(id_offer: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}trade/create`
  let jwt = window.localStorage.getItem("token")

  let axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${jwt}`
    },
  }
  return axios
    .post(
      url,
      {id_offer: id_offer},
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw new Error(e)
    })
}

export async function createOFfer({id, amount}: createOfferProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/create`
  let jwt = window.localStorage.getItem("token")

  let axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${jwt}`
    },
  }
  return axios
    .post(
      url,
      {
        id_crypto: id, 
        amount: amount,
      },
      axiosConfig
    )
    .then((res) => {
      return res.data
    })
    .catch((e) => {
      throw new Error(e)
    })
}