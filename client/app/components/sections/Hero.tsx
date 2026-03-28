import Link from 'next/link'
import React from 'react'

export default function Hero()  {
  return (
    <section 
    className="h-screen flex items-center justify-center text-center relative overflow-hidden"
    style={{
      backgroundImage: "url('/herobg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <div className="absolute inset-0 bg-black/60 " />

      <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
        Create Viral Content in <br /> Seconds with AI
      </h1>

      <p className="text-gray-200 mt-4 text-lg flex items-center justify-center">
        Generate scroll-stopping scripts for TikTok, YouTube Shorts, and Instagram Reels in seconds. <br /> No more writer&apos;s block, just viral content at your fingertips.
      </p>
      
      <Link
        href="/signup"
        className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300 mt-6"
      >
        Start Free
      </Link>
      </div>
    </section>
  )
}

