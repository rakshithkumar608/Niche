import { div } from 'framer-motion/client';
import { Rocket, Sparkles, Wand2 } from 'lucide-react'
import React from 'react'

const Features = () => {
  const features = [
    {
      icon: <Sparkles />,
      title: "Enter Your Idea",
      desc: "Simply input your content idea or topic, and let our AI work its magic to generate a viral script for you, Choose niche, tone, platform and audience and get a script tailored to your needs."
    },

    {
      icon: <Wand2 />,
      title: "AI Generates Script",
      desc: "Our advanced AI analyzes your input and generates a scroll-stopping script optimized for TikTok, YouTube Shorts, or Instagram Reels. Say goodbye to writer's block and hello to viral content!"
    },

    {
      icon: <Rocket />,
      title: "Post & Grow",
      desc: "Copy your AI-generated script, post it on your chosen platform, and watch your content go viral. With Niche, creating engaging content has never been easier or faster!"
    },

    
  ];
  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        How It Works ⚡
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
          key={index}
          className='p-6 bg-white rounded-2xl shadow hover:shadow-emerald-200 hover:shadow-lg transition duration-300'
          >
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
