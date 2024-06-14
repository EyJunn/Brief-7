import axios from "axios";

export default function getMyAsset() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}user/my-assets`  
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
        console.log(e)
      throw new Error(e)
    })

}

export async function getAllAssets() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}user/users-assets`  
  let jwt = window.localStorage.getItem("token")

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${jwt}`
    },
  }
  try {
    const res = await axios
      .get(
        url,
        axiosConfig
      );
    return res.data;
  } catch (e: any) {
    console.log(e);
    throw new Error(e);
  }

}