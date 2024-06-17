'use client'
import { createPromoCode } from '@/Services/promoCode'
import { Box, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const PromoCodeModal = () => {


    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const [amount, setAmount] = useState(0)
    const [promoCode, setPromoCode] = useState('')

    function PromoCode() {
        const notSureAboutThat = {
            name: promoCode,
            value: amount
        }
        createPromoCode(promoCode, amount)
            .then((res) => {
                toast.success("Successfully created")
                handleClose()
            })
            .catch((e) => console.log(e))
    }

    return (
        <div> 
            <button className='border border-white rounded-full font-bold px-8 py-2' onClick={handleOpen} >Create your promo code</button>
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
                            setPromoCode(e.target.value)
                        }}
                        className="text-black indent-3 border-2 border-black  w-auto m-4"
                        placeholder="Name of the promo code?"
                        required
                    />
                    <input
                        type="number"
                        onChange={(e) => {
                            setAmount(Number(e.target.value))
                        }}
                        className="text-black indent-3 border-2 border-black  w-auto m-4"
                        placeholder="Value of the promo code?"
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
                                PromoCode()
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

export default PromoCodeModal