import React, { useContext } from "react";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";

import dynamic from "next/dynamic";
import cookieCutter from "cookie-cutter";
import Footer from "../components/Footer/Footer";
import About from "../components/DataPullerProject/AboutComp/About";
import Timer from "../components/DataPullerProject/TimerComp/Timer";
import BlockElem from "../components/DataPullerProject/BlockElem/BlockElem";
import AppContext from "../components/AppContextFolder/AppContext";
import Loader from "../components/Icons/Loader";
import TableRow from "../components/DataPullerProject/TableRow/TableRow";
import LatLonTable from "../components/DataPullerProject/LatLonTable/LatLonTable";
// import : functions
import {
  CookieTimeCounter,
  MouseWindowEventListners,
  onClickUpdateLocation,
  userInfo,
} from "../components/DataPullerProject/FuncVar/foo";

// values
import {
  Additional_data,
  tableData,
} from "../components/DataPullerProject/FuncVar/foo";

export default function Page() {
  // location[latitude, longitude]
  const [location, setLocation] = useState<number[]>([0, 0]);
  const [updatingLocation, setUpdatingLocation] = useState<boolean>(false);
  const [updatingLocatinResult, setUpdatingLocatinResult] =
    useState<boolean>(false);
  // zip code holder
  const [zipCode, setZipCode] = useState<string>(undefined);
  // userData Ref holder
  const userData = useRef(null);
  // gpu Detector state holder
  const [gpuTier, setGpuTier] = useState(null);
  const windowWidth = useRef<HTMLSpanElement>(null);
  const windowHeight = useRef<HTMLSpanElement>(null);
  const mouseX = useRef<HTMLSpanElement>(null);
  const mouseY = useRef<HTMLSpanElement>(null);
  //timer ref holder
  const secUnits = useRef<HTMLSpanElement>(null);
  const secTens = useRef<HTMLSpanElement>(null);
  const minUnits = useRef<HTMLSpanElement>(null);
  const minTens = useRef<HTMLSpanElement>(null);
  // First vist and Last visit ref holder
  let firstVisit_Ref = useRef<HTMLSpanElement>(null);
  let lastVisit_Ref = useRef<HTMLSpanElement>(null);
  // context for Shared State
  const context = useContext(AppContext);

  useEffect(() => {
    // call CookieTimeCounter function here in useEffect once
    CookieTimeCounter({
      context,
      secUnits,
      secTens,
      minUnits,
      minTens,
      cookieCutter,
    });
    // call MouseWindowEventListners function here in useEffect once
    MouseWindowEventListners({
      context,
      windowWidth,
      windowHeight,
      mouseX,
      mouseY,
    });

    // call the async function "userInfo"  inside the useEffect to get the user Data and set them in the DOM
    userInfo({
      setLocation,
      setZipCode,
      setGpuTier,
      userData,
      cookieCutter,
      lastVisit_Ref,
      firstVisit_Ref,
    });
  }, [context]);

  // import Dynamically the Map component from the DataPuller package, cus it's using some client side objects
  const Map = dynamic(
    () => import("../components/DataPullerProject/Map"),
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  const meta = {
    title: "Arnab Manna - Software Engineer",
    description: `I've been working on Software development for 2 years straight. Get in touch with me to know more.`,
    image: "/Arnab.jpg",
    type: "website",
  };

  return (
    <>
      <Head>
      <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://getinfromation.netlify.app/`} />
        <link rel="canonical" href={`https://getinfromation.netlify.app/`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Get-Information" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="" />
        <meta name="twitter:site" content="@arnabdev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="min-h-screen w-full bg-AAprimary text-white 2xl:px-64 xl:px-44 lg:px-24 md:px-16 px-4 ">
        <div className="h-full w-full  py-16 sm:px-12">
          {/* // ? Ip Address, (Latitude & Longitude) ==> only > md */}
          <div className="w-full pb-6 flex md:flex-row flex-col space-y-4 justify-around items-center">
            <span className="font-bold md:text-4xl text-lg text-AAsecondary">
              <span className="text-white hover:cursor-pointer">IP :</span>{" "}
              {userData.current?.query || "Checking..."}
            </span>

            <LatLonTable type="Mobile" location={location} />
          </div>
          <div className="h-full w-full  flex md:flex-row flex-col ">
            {/* // ? User Data */}
            <div className="h-full md:w-2/3 md:order-1 order-2  md:pr-10 flex flex-col space-y-3 ">
              <div className="pb-2 sm:pt-0 pt-4">
                <span className="text-xl sm:text-2xl font-bold pb-8 underline">
                  General Information :
                </span>
              </div>
              <table className="border-2 border-gray-300 w-full font-mono">
                <tbody>
                  {tableData(userData, zipCode).map((item, index) => {
                    return <TableRow item={item} key={index} />;
                  })}
                </tbody>
              </table>

              <div className="pb-2 sm:pt-8 pt-4">
                <span className="text-xl sm:text-2xl font-bold underline">
                  Additional Information &#58;
                </span>
              </div>
              <section className="flex flex-col lg:flex-row lg:space-y-0 space-y-3 lg:space-x-4 font-mono">
                {/* // ? Additional Information Section 1*/}
                <div className="flex-none flex-col space-y-3 ">
                  {Additional_data(userData, gpuTier).map((item, index) => {
                    return (
                      <BlockElem
                        key={index}
                        size="32"
                        title={item.title}
                        value={item.value}
                      />
                    );
                  })}
                </div>

                {/* // ? Additional Information Section 2 */}
                <div className="flex-none flex-col space-y-3">
                  <BlockElem
                    size="md:w-52 w-44"
                    title=" Screen orientation :"
                    value={userData.current?.screenOrientationType || ""}
                  />
                  <BlockElem
                    size="w-32"
                    title="Screen size :"
                    value={
                      (userData.current?.screenWidth || "") +
                      " x " +
                      (userData.current?.screenHeight || "")
                    }
                  />

                  <div className="flex flex-row space-x-2">
                    <span className="text-gray-200 font-semibold flex-none w-32 text-sm md:text-base">
                      Window size :
                    </span>
                    <span className="text-AAsecondary font-semibold  text-sm md:text-base">
                      <span ref={windowWidth} className="text-AAsecondary">
                        {userData.current?.screenWidth || ""}
                      </span>
                      <span className="text-gray-300"> x </span>
                      <span ref={windowHeight} className="text-AAsecondary">
                        {userData.current?.screenHeight || ""}
                      </span>
                    </span>
                  </div>

                  <div className="flex-none flex-row space-x-2">
                    <span className="text-gray-200 font-semibold flex-none w-36 text-sm md:text-base">
                      Mouse position :
                    </span>
                    <span className="text-AAsecondary font-semibold text-sm md:text-base">
                      <span className="text-gray-300">X - </span>
                      <span ref={mouseX} className="text-AAsecondary">
                        {0}
                      </span>
                      <span className="text-gray-300">, Y - </span>
                      <span ref={mouseY} className="text-AAsecondary">
                        {0}
                      </span>
                    </span>
                  </div>
                  <BlockElem
                    size="w-44"
                    title="Screen Color Depth :"
                    value={userData.current?.screenColorDepth || "Checking..."}
                  />
                  <BlockElem
                    size="w-44"
                    title="fps :"
                    value={gpuTier?.fps || "Checking..."}
                  />
                </div>
              </section>
            </div>
            {/* // ? Section that contains Maps and the Timer */}
            <div className="h-full w-full md:w-1/3 flex flex-col  items-center md:order-2 order-1 md:pt-12">
              {/* // Visit Data */}
              <div className="w-full pb-5">
                <div className="w-full flex flex-col space-y-2 items-center">
                  <div className="flex flex-row space-x-1 text-sm">
                    <span className="">First visit :</span>
                    <span
                      ref={firstVisit_Ref}
                      className="text-AAsecondary"
                    ></span>
                  </div>
                  <div className="flex flex-row space-x-1 text-sm">
                    <span className="">Last visit :</span>
                    <span
                      ref={lastVisit_Ref}
                      className="text-AAsecondary"
                    ></span>
                  </div>
                </div>
              </div>
              <div className="relative md:h-80 h-64 w-full pb-8">
                <div
                  className={`${
                    updatingLocation ? "" : "hidden"
                  } absolute h-full w-full border-[1px] border-white z-10 flex justify-center items-center`}
                >
                  <div className="flex flex-col space-y-2 items-center">
                    <Loader className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-AAsecondary" />
                    <span className="">Updating location...</span>
                  </div>
                </div>
                <div
                  className={`${
                    updatingLocation ? "hidden" : ""
                  } h-full w-full z-10`}
                >
                  <Map lat={location[0]} lon={location[1]} />
                </div>
              </div>
              <div className="flex flex-col space-y-2 items-center text-center">
                <span className="">Location not accurate?</span>
                <span
                  onClick={() => {
                    //Hide Map when updating location
                    setUpdatingLocation(true);

                    // Update lat & lon
                    onClickUpdateLocation(
                      setUpdatingLocatinResult,
                      setUpdatingLocation,
                      setLocation,
                      setZipCode
                    );
                  }}
                  className="text-AAsecondary underline text-sm hover:cursor-pointer"
                >
                  Update My IP Location
                </span>
                {updatingLocatinResult ? (
                  <span className="text-sm">
                    Unable to retrieve your location!!
                    <br /> Please Allow location permission
                  </span>
                ) : (
                  <></>
                )}
                <LatLonTable type="Desktop" location={location} />

                {/* //Timer */}
                <Timer
                  secTens={secTens}
                  secUnits={secUnits}
                  minTens={minTens}
                  minUnits={minUnits}
                />
              </div>
            </div>
          </div>
        </div>
        {/* // ? About */}
        <About />
      </div>
      <Footer link="https://github.com/hktitof/DataPuller" />
    </>
  );
}
