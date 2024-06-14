import { RegisterForm } from '@/components/Auth/Register'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

function register() {
  return (
    
    <div className='bg-gradient-to-tr from-violet-500 to-orange-300'>
        <RegisterForm />
    </div>
  )
}

export default register