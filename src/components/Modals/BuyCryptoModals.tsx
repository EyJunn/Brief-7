'use client'
import { buyCrypto } from '@/Services/crypto'
import { dataCryptoProps } from '@/Utils/types'
import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export const BuyCryptoModal = ({ crypto, isBuyVisible }: { crypto: dataCryptoProps, isBuyVisible: boolean }) => {
  
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [amount, setAmount] = useState(0)

  function HandleCrypoBuy() {
    buyCrypto(crypto.id, amount)
      .then((res) => {
        toast.success("Congratulations, you just buy it !")
        handleClose()
      })
      .catch((e) => console.log(e))
  }

  return (
    <div>
      {isBuyVisible && (
        <button
          onClick={handleOpen}
          className="bg-white text-center rounded-lg text-indigo-600 w-20 p-1 text-sm mt-1"
        >
          Buy{' '}
        </button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=" bg-gradient-to-tr from-violet-500 to-orange-300">
          <input
            type="number"
            onChange={(e) => {
              setAmount(Number(e.target.value))
            }}
            className="text-black indent-3 border-2 border-black  w-full"
            placeholder="how many tokens?"
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
                HandleCrypoBuy()
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
