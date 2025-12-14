import React from "react";
import Img from "../../smallComp/image/Img";
export default function About() {
  return (
    <div className="w-full h-full py-12 md:px-8 relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-neonBlue to-transparent"></div>
      
      <div className="cyber-card p-8 flex md:flex-row flex-col md:space-x-12 items-center space-y-6">
        <div className="flex-none w-32 lg:w-44 flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-neonBlue via-neonPink to-neonPurple rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative rounded-full overflow-hidden border-2 border-neonBlue/50">
              <Img src="Arnab.jpg" alt="About picture" className="opacity-90 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-6 items-center">
          <span className="font-Futuristic font-extrabold lg:text-4xl md:text-3xl text-xl sm:text-2xl text-gradient">
            ◈ What&apos;s this project for?
          </span>
          <span className="font-sans text-sm sm:text-base text-gray-400 text-center leading-relaxed">
            It&apos;s no secret that sites want to know as much as possible about their visitors, whether it&apos;s to
            show them targeted ads or improve their user experience. The goal of this project is to give you an idea about
            types of information that websites can collect and access from you. No matter what the privacy settings of
            your browser are, certain information about you is inevitably revealed to the sites you visit. For example,
            you start sharing your <span className="text-neonBlue">IP address</span> as soon as you go online, which can be used to pinpoint your approximate
            location. Note that the information you see above is used to generate your <span className="text-neonPink">fingerprint</span>. This information is used by websites to build
            a profile of you, which can then be used to target you with ads or to personalize your experience on the
            site.
          </span>
        </div>
      </div>
    </div>
  );
}
