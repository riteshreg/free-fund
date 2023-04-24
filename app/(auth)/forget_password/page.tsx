'use client'
import { createClient } from "@/SupabaseComponents/SupabaseBrowserClient";
import Link from "next/link";
import { useState } from "react";

export default function ForgetPassword(){

    const [email, setEmail] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const supabase = createClient()


   async function handleSendMagicLink(){
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://freefundweb.vercel.app/new_password',
      })
      if(!error){
        setShowSuccess(true)
      }
   }

   if(showSuccess){
    return(
        <div>
        <h1>magic link sended</h1>
    </div>
    )
   }
   
    return(
        <div>
            <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-7">
            <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">
                Forget Password
            </p>
            <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">
              Already have account?{" "}
              <Link
                href="/login"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
              >
                {" "}
                Go to Login
              </Link>
            </p>
            
          
            <div className="w-full flex items-center justify-between pt-3">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                OR
              </p>
              <hr className="w-full bg-gray-400  " />
            </div>
            <div>
              <label
                id="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Email
              </label>

              <input
                onChange={(event)=>setEmail(event.target.value)}
                name="email"
                aria-labelledby="email"
                type="email"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
           
            <div className="mt-6">
              <button
                role="button"
                onClick={handleSendMagicLink}
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
               Send Magic Link
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}