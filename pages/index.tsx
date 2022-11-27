
import Head from "next/head";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import SideBar from "../components/SideBar";
import { useColorMode } from "../context/ColorModeContext";
import Image from 'next/image'
import Typed from 'react-typed';
import { NextPage } from "next";


const Home: NextPage = () => {
  const { mode } = useColorMode()

  const [loading, setLoading] = useState(false);
  const [showSideBar, setShowSideBar] = useState<Boolean>();

  if (loading){
    return(
      <div className="h-screen w-screen flex items-center justify-center bg-black">
          <LoadingSpinner/>
      </div>
    )
  }

  return (
    <div className={`${mode === "dark" ? 'dark' : ''}`}>
      <Head>
        <title>Michael Gergely - Web Dev</title>
        <link rel='icon' href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Vsmart_logo.svg/402px-Vsmart_logo.svg.png?20200810165214"/>
      </Head>
      <SideBar/>
      <Image
          className="absolute "
          src="https://w.wallha.com/ws/14/FWz4P6nt.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}                
      />
      <div className="flex items-center justify-center z-10 h-screen w-screen">
        <div className="flex-col z-10 space-y-3 md:space-y-6">
          <p className="text-white font-bold text-2xl md:text-3xl lg:text-6xl z-10">
            Michael Gergely
          </p>
          <div className="flex flex-row">
            <p className="text-white font-semibold text-xl lg:text-3xl z-10 pr-2 md:pr-3">
              {"I'm a"}
            </p>
            <Typed
              className="text-white text-xl lg:text-3xl z-10 font-semibold decoration-sky-400 underline underline-offset-8 lg:underline-offset-[16px]"
              strings={['Front-end Developer.', 'Back-End Developer', 'Blockchain-Developer', 'Web Developer']} typeSpeed={100} backSpeed={100} loop
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
