import axios from "axios"

export async function HomePage() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/all`
  let jwt = window.localStorage.getItem("jwt")

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
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}
