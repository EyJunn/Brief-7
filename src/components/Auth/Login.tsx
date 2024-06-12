'use client'
import {  loginUser } from '@/Services/auth'
import { useRouter } from 'next/navigation'
import React  from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMsg } from '../Error'
import { loginProps } from '@/Utils/types'


export const LoginForm = () => {
  const { push } = useRouter()

 const {register, handleSubmit, watch, formState:{errors}}=useForm<loginProps>({ mode: "onChange"})

  const onSubmit: SubmitHandler<loginProps> = (data) =>
    loginUser(data).then((res) => {
if (res.status === 200){
  if (typeof window !== 'undefined'){
    window.localStorage.setItem('token', res.data.access_token)
    push('/Home')
  }
}
    }).catch((e)=> console.log(e))

  return (
    <div className="flex flex-wrap h-screen justify-evenly items-center bg-green-200">
        
           <img src="https://images.unsplash.com/photo-1640826514546-7d2eab70a4e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyeXB0b2N1cnJlbmN5fGVufDB8fDB8fHww" className='h-screen w-1/2 bg-cover ' alt={'unsplash image on cryptocurrency'}/>
   
      <div className="sm:mx-auto sm:w-full sm:max-w-sm absolute top-12 right-96">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('email', { required: true })}
              />
            </div>
            {errors.email  && <ErrorMsg message={errors.email.message} />}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('password', { required: true })}
              />
            </div>
            {errors.password  && <ErrorMsg message={errors.password.message} />}
          </div>

          { errors?.root && <p className="text-red-500 text-xs italic">{errors.root?.message}</p>}
          

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Sign in
               </button>
                 </div>
             </form>
              <div className="flex items-center justify-center space-x-2">
              <span className="h-px w-16 bg-gray-300"></span>
              <span className="text-white-500 font-normal">OR</span>
              <span className="h-px w-16 bg-gray-300"></span>
            </div>
            <div>
              <a
                className="w-full flex justify-center bg-yellow-400 bg-opacity-50 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
                href="/Register"
              >
                Create your account
              </a>
            </div>
         </div>
    </div>
  )
}
