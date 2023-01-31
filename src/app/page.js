import { gql } from "@apollo/client";
import { client } from "@/app/apollo-client";
import Image from 'next/image'
import { Montserrat } from '@next/font/google'
import HeaderNav from "@/components/headernav.jsx";
import HomeSlider from '@/components/homeslider.jsx'
import './globals.css'

export default function Home({ posts }) {
  return (
    <>
    <head>
    </head>
    <body className='font-montserrat'>
      <HeaderNav />
      <HomeSlider />
     
     
    </body>
    
    </>
  )
}