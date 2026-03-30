export default function Footer() {
  return (
    <footer className="bg-[#1C1B1F] text-white pt-20 pb-12 px-6 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-linear-to-br from-[#6750A4] to-[#7D5260] rounded-2xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold tracking-tighter">N</span>
              </div>
              <h2 className="text-3xl font-medium tracking-tight">Niche</h2>
            </div>

            <p className="text-[#C4C0C8] text-[17px] leading-relaxed max-w-md">
              Create scroll-stopping viral content in seconds with AI. 
              No more writer&apos;s block — just powerful scripts for TikTok, 
              YouTube Shorts, and Instagram Reels.
            </p>

            <div className="mt-10 text-sm text-[#79747E]">
              Made with ❤️ for creators who want to grow faster
            </div>
          </div>

          {/* Product Links */}
          <div className="md:col-span-3">
            <h3 className="font-medium text-white mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-[#C4C0C8] text-[15px]">
              <li>
                <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
              </li>
              <li>
                <a href="/dashboard/generate" className="hover:text-white transition-colors duration-200">Generate Script</a>
              </li>
              <li>
                <a href="/dashboard/history" className="hover:text-white transition-colors duration-200">History</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-4">
            <h3 className="font-medium text-white mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-[#C4C0C8] text-[15px]">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
              </li>
            </ul>

            {/* Legal */}
            <div className="mt-12">
              <h3 className="font-medium text-white mb-4 text-lg">Legal</h3>
              <ul className="space-y-4 text-[#C4C0C8] text-[15px]">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-[#79747E]">
          <p>
            © {new Date().getFullYear()} Niche. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}