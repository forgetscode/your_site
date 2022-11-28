
import Head from "next/head";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import SideBar from "../components/SideBar";
import { useColorMode } from "../context/ColorModeContext";
import Image from 'next/image'
import Typed from 'react-typed';
import { NextPage } from "next";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Tooltip } from "@mui/material";
import { useScroll } from "../context/ActiveScroll";

const getOffSet = (id:string) => {
  const offset = document.getElementById(id)?.offsetHeight
  if (offset){
    return offset
  }
  return 0
}

const Home: NextPage = () => {
  const { mode } = useColorMode()
  const [ loading, setLoading ] = useState(false);
  const [ isScrolled, setIsScrolled]  = useState(false)
  const { setActiveScroll } = useScroll()
  const [ sections, setSections ] = useState({
    Home:0,
    About:1, 
    Resume:2, 
    Portfolio:3, 
    Services:4, 
    Contact:5 
  })

  const updateMedia = () => {
    sections.Home = getOffSet("Home")
    sections.About = getOffSet("About") 
    sections.Resume = getOffSet("Resume") + sections.About
    sections.Portfolio = getOffSet("Portfolio") + sections.Resume
    sections.Services = getOffSet("Services") + sections.Portfolio
    sections.Contact = getOffSet("Contact") + sections.Services
  };

  useEffect(() => {
    updateMedia()
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY
        if (scrollHeight > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
        if (sections.About == 2){
          updateMedia()
        }
        if (scrollHeight  >= sections.Contact -150){
          setActiveScroll("Contact")
        }
        else if(scrollHeight >= sections.Services -150){
          setActiveScroll("Services")
        }
        else if(scrollHeight >= sections.Portfolio -150){
          setActiveScroll("Portfolio")
        }
        else if(scrollHeight >= sections.Resume -150){
          setActiveScroll("Resume")
        }
        else if(scrollHeight >= sections.About -150){
          setActiveScroll("About")
        }
        else{
          setActiveScroll("Home")
        }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
        window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
      <div id = {"Home"} className="absolute dark:bg-black dark:opacity-90 h-screen w-full">
        <Image
            className="absolute dark:opacity-80"
            src="https://www.zbrushcentral.com/uploads/default/optimized/4X/0/0/e/00eabc32bcfdb173e61a62d2803a5e5aa846e9db_2_1800x1800.jpeg"
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}                
        />
      </div>
      { isScrolled ?
          <button className="fixed transition-all z-10 light-theme dark:dark-theme dark:bg-gray-900 rounded-full w-10 h-10  right-5 bottom-5 text-center cursor-pointer"
              onClick={()=>document.getElementById("Home")?.scrollIntoView({behavior: "smooth" , block: "center"})}>
             <Tooltip title="Home"><ArrowUpwardIcon className="text-white"/></Tooltip>
          </button> 
          : 
              <></>
                    
      }
      <div className="flex items-center justify-center z-10 h-screen w-full">
        <div className="flex-col z-10 space-y-2 md:space-y-4 lg:space-y-6">
          <p className="text-white font-bold text-2xl md:text-5xl lg:text-7xl z-10">
            Michael Gergely
          </p>
          <div className="flex flex-row">
            <p className="text-white font-semibold text-xl lg:text-3xl z-10 pr-2 lg:pr-3">
              {"I'm a"}
            </p>
            <Typed
              className="text-white text-xl lg:text-3xl z-10 font-semibold decoration-sky-400 underline underline-offset-8 lg:underline-offset-[16px]"
              strings={['Front-end Developer.', 'Back-End Developer.', 'Blockchain-Developer.', 'Web Developer.']} typeSpeed={100} backSpeed={100} loop
            />
          </div>
        </div>
      </div>

      <div id = {"About"} className="h-screen w-full flex justify-center items-center text-3xl text-white bg-black">
        About
      </div>

      <div id = {"Resume"} className="h-screen w-full flex justify-center items-center text-3xl bg-white">
        Resume
      </div>

      <div id = {"Portfolio"} className="h-screen w-full flex justify-center items-center text-3xl text-white bg-black">
        Portfolio
      </div>

      <div id = {"Services"} className="h-screen w-full flex justify-center items-center text-3xl bg-white">
        Services
      </div>

      <div id = {"Contact"} className="h-screen w-full flex justify-center items-center text-3xl text-white bg-black">
        Contact
      </div>

    </div>
  );
}

export default Home
