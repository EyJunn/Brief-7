import axios from "axios"

export async function createPromoCode(name: string, value: number) {
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
        name: name,
        value: value
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