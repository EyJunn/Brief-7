'use client'
import { CryptoCreate } from '@/Services/crypto'
import { Box, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const CreateCyrptoModal = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [amount, setAmount] = useState(0)
    const [nameCrypto, setNameCrypto] = useState('')
    const [crypto, setCrypto] = useState('')
  const [Quantity, setQuantity] = useState(0)

   function Crypto() {
    const correctly = {name: nameCrypto,
      value: amount,
      quantity: Quantity,
      image: crypto
    }
     CryptoCreate(correctly)
      .then((res) => {
        toast.success("Successfully created")
        handleClose()
      })
      .catch((e) => console.log(e))
  }

  return (
      <div>
        <button className='border border-white rounded-full font-bold px-8 py-2 m-2' onClick={handleOpen} >Create your Crypto</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className=' bg-black w-72 '>
            <input
              type="text"
              onChange={(e) => {
                setNameCrypto(e.target.value)
              }}
              className="text-black indent-3 border-2 border-black  w-auto m-4"
              placeholder="Name of your crypto?"
              required
            />
            <input
              type="number"
              onChange={(e) => {
                setAmount(Number(e.target.value))
              }}
              className="text-black indent-3 border-2 border-black  w-auto m-4"
              placeholder="Value of the crypto"
              required
            />
            <input
              type="number"
              onChange={(e) => {
                setQuantity(Number(e.target.value))
              }}
              className="text-black indent-3 border-2 border-black  w-auto m-4"
              placeholder="Quantity of your crypto"
              required
            />
            <input
              type="url"
              onChange={(e) => {
                setCrypto(e.target.value)
              }}
              className="text-black indent-3 border-2 border-black  w-auto m-4"
              placeholder="Url image of your crypto"
              required
            />

            <div className="flex items-center">
              <button
                onClick={handleClose}
                className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
              >
                Cancel
              </button>
              <button
                className="bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 "
                onClick={() => {
                  Crypto()
                }}
              >
                Create
              </button>
            </div>
          </Box>
        </Modal>
      </div> 
  )
}

export default CreateCyrptoModal