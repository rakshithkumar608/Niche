import { DumbbellIcon, icons, StoreIcon, TargetIcon, VideoIcon } from "lucide-react"

export default function UseCases() {
    
    const items = [
        {
            icon: <VideoIcon />,
            title: "Content Creators",
            description: "Generate viral scripts for TikTok, YouTube Shorts, and Instagram Reels in seconds. No more writer's block, just viral content at your fingertips."
        },

        {
            icon: <DumbbellIcon />,
            title: "Fitness Coaches",
            description: "Crete engaging workout videos and fitness tips that resonate with your audience. Our AI helps you craft compelling scripts that drive engagement and grow your following."
        },

        {
            icon: <TargetIcon />,
            title: "Marketing Agencies",
            description: "Produce high-quality, viral content for your clients across multiple platforms. Our AI-generated scripts save you time and resources while delivering exceptional results."
        },

        {
            icon: <StoreIcon />,
            title : "Small Businesses",
            description: "Boost your online presence with viral content tailored to your brand. Our AI helps you create engaging scripts that connect with your target audience and drive growth."
        }
    ]
    return (
        <section className="py-20 px-6 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12">
                Built for Creators, Coaches, Agencies, and Businesses 🚀<br /> & for EveryOne and EveryWhere 🌍
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {items.map((item, index) => (
                    <div 
                    key={index}
                    className="p-6 bg-white rounded-2xl shadow hover:shadow-amber-200 hover:shadow-lg transition duration-150"
                    >
                        <div className="mb-4">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-600">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}