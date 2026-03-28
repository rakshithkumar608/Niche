export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-lg">Niche</h2>
          <p className="text-gray-400 mt-2">
            Create viral content in seconds with AI. Generate scroll-stopping scripts for TikTok, YouTube Shorts, and Instagram Reels. No more writer&apos;s block, just viral content at your fingertips.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Product</h3>
          <ul className="space-y-1 text-gray-400">
            <li>Features</li>
            <li>Generate</li>
            <li>History</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-gray-400">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Niche. All rights reserved.
      </p>
    </footer>
  )
}
