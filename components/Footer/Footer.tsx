import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
const ClickableIcon = props => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-6 h-6 text-gray-500 hover:text-neonBlue fill-current hover:cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]"
        }
      />
    </a>
  );
};
export default function Fotter(props) {
  return (
    <div className="bg-AAprimary border-t border-neonBlue/20 flex flex-col justify-center items-center py-10 space-y-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neonBlue/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neonPink/30 to-transparent"></div>
      </div>
      
      {/* // ? Reach me at */}
      <div className="flex flex-row space-x-8 relative z-10">
        <ClickableIcon
          href={"https://github.com/arnab-4"}
          Icon={GithubIcon}
        />
        <ClickableIcon
          href={"https://www.linkedin.com/in/arnab-manna-442586240/"}
          Icon={LinkedinIcon}
        />
        <ClickableIcon
          href={"https://www.instagram.com/_arnabbbb_/"}
          Icon={InstagramIcon}
        />
      </div>
      <a href="https://github.com/arnab-4/information/tree/main" className="relative z-10" target={"_blank"} rel="noreferrer">
        <div
          className="group flex flex-col font-Futuristic justify-center items-center text-gray-500 
  text-sm space-y-3"
        >
          <span className="group-hover:text-neonBlue sm:text-sm text-xs transition-all duration-300 tracking-wider">
            Designed & Built by Arnab Manna
          </span>

          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-neonBlue transition-all duration-300">
            <GithubIcon
              className={
                "w-4 h-4 text-gray-500 fill-current group-hover:text-neonBlue transition-all duration-300"
              }
            />
            <span className="uppercase tracking-widest">Github</span>
          </span>
        </div>
      </a>
    </div>
  );
}
