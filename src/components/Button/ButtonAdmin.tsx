'use client'
import React, { useState } from 'react'

const ButtonAdmin = ({content }: { content: string }) => {
    let role = window.localStorage.getItem('role')
    const [buttonVisible, setButtonVisible] = useState<boolean>(false)


  function VisibleButton() {
    if(role === "admin"){
      setButtonVisible(true)
    }
  }
  return (
    <div>
        {buttonVisible && <button>{content}</button>}
    </div>
  )
}

export default ButtonAdmin