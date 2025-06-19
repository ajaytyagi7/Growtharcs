import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            Gr<span className="text-blue-400">owtharcs</span>.
          </h2>
          <p className="mt-4 text-gray-300 text-sm md:text-base max-w-md">
            Welcome to our digital agency! We specialize in empowering businesses like yours to thrive online,
            offering expertise in website design and development.
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-wrap gap-3 md:justify-end">
            {["Facebook", "LinkedIn", "Youtube", "TikTok", "Pinterest", "Dribbble"].map((platform, index) => (
              <button
                key={index}
                className="border border-white px-4 py-2 text-sm text-white hover:bg-white hover:text-black transition"
              >
                {platform}
              </button>
            ))}
          </div>

          {/* Email */}
          <p className="text-right text-2xl md:text-3xl font-extrabold mt-6 text-white">
            info<span className="text-blue-400">@</span>domain.com
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-12 pt-4 text-center text-sm text-gray-400">
        Copyright © 2025 |Growtharcs by Growtharcs
      </div>
    </footer>
  );
}

