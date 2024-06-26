import { createCryptoProps } from "@/Utils/types"
import axios from "axios"

export async function getAllCryptos() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/all`
  let jwt = window.localStorage.getItem("token")

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
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


export async function buyCrypto(cryptoid: string, amount: number) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/buy`

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
        id_crypto: cryptoid,
        amount: amount,
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

export async function searchCrypto(name: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/search/${name}`

  let axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
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

export async function CryptoCreate({name, value, quantity, image}: createCryptoProps){
   let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/create`

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
      {name: name,
        value: value,
        quantity: quantity,
        image: image,
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