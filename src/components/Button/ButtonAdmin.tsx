'use client'
import React, { useEffect, useState } from 'react'

const ButtonAdmin = ({content }: { content: string }) => {
    const role = window.localStorage.getItem('role')
    const [buttonVisible, setButtonVisible] = useState<boolean>(false)
   

  function VisibleButton() {
    if(role === "admin"){
      setButtonVisible(true)
    }
  }

  useEffect(()=>{
    VisibleButton()
  },[])

  return (
    <div>
      {buttonVisible && <button className='border border-white rounded-full font-bold px-8 py-2' onClick={}
    >{content}</button>}
    </div>
  )
}

export default ButtonAdmin