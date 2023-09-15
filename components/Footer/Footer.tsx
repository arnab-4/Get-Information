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
          "w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
        }
      />
    </a>
  );
};
export default function Fotter(props) {
  return (
      <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
        {/* // ? Reach me at */}
        <div className="flex flex-row space-x-8 ">
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
        <a href="https://github.com/arnab-4/information/tree/main" className="" target={"_blank"} rel="noreferrer">
          <div
            className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
          >
            <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
              Designed & Built by Arnab Manna
            </span>

            <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
              <GithubIcon
                className={
                  "w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary"
                }
              />
              <span className="">Github</span>
            </span>
          </div>
        </a>
      </div>
  );
}
