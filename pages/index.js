import Head from 'next/head'
import dynamic from 'next/dynamic'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Home () {

  useEffect(()=>{
    AOS.init()
  }, [])
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full items-center justify-center pt-20 space-y-10">
        <img data-aos="fade-down" src="khland.png" className="h-40" />
        <h1 className="text-center text-3xl text-yellow-900">Our Website is under upgrading</h1>
      </div>
      <div className="flex justify-center items-center mt-20 p-5 bg-lime-700">
        <div className="w-auto flex flex-col space-y-4">
          <h1 className="text-left text-white">Contact Info</h1>
          <div className="flex items-center text-white space-x-2">
            <span><FaPhoneAlt /></span><span>SMART:</span><span>086 / 087 647 168</span>
          </div>
          <div className="flex items-center text-white space-x-2">
            <span><FaPhoneAlt /></span><span>METFONE:</span><span>060 / 090 647 168</span>
          </div>
          <div className="flex items-center text-white space-x-2">
            <span><FaPhoneAlt /></span><span>CELLCARD:</span><span>061 / 089 647 168</span>
          </div>
          <div className="flex items-center text-white space-x-2">
            <span><FaEnvelope /></span> <span>INFO@KHLAND.COM.KH</span>
          </div>
        </div>
      </div>
    </div>
  )
}
