
import Head from "next/head";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { useColorMode } from "../context/ColorModeContext";
import Image from 'next/image'
import { NextPage } from "next";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Tooltip } from "@mui/material";
import { useScroll } from "../context/ActiveScroll";
import AboutInfo from "../components/AboutInfo";
import FadeInHomeText from "../components/FadeInHomeText";
import Resume from "../components/Resume";

import background from '../public/backgroundTemp.jpg';
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import Link from "next/link";
import ContactMailIcon from '@mui/icons-material/ContactMail';

const getOffSet = (id:string) => {
  const offset = document.getElementById(id)?.offsetHeight
  if (offset){
    return offset
  }
  return 0
}

const Home: NextPage = () => {
  const { mode } = useColorMode()
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
    sections.Home = 0
    sections.About = getOffSet("Home")
    sections.Resume = getOffSet("About") + sections.About
    sections.Portfolio = getOffSet("Resume") + sections.Resume
    sections.Services = getOffSet("Portfolio") + sections.Portfolio
    sections.Contact = getOffSet("Services") + sections.Services
  };

  useEffect(() => {
    updateMedia()
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY
      {/*console.log("height: ", scrollHeight, "About: ", sections.About , "Resume: ", sections.Resume)*/}
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
        else if(scrollHeight >= sections.About -500){
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

  return (
    <div className={`${mode === "dark" ? 'dark' : ''}`}>
      <Head>
        <title>Michael Gergely - Web Dev</title>
        <link rel='icon' href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Vsmart_logo.svg/402px-Vsmart_logo.svg.png?20200810165214"/>
      </Head>
      <SideBar/>
      <div id = {"Home"} className="absolute h-screen top-0"/>
      <div  className="fixed -z-30 dark:bg-black dark:opacity-90 h-screen w-full">
        <Image
            className="absolute dark:opacity-80"
            src={background}
            layout="fill"
            alt=""
            priority              
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
      <FadeInHomeText/>

      <AboutInfo/>

      <Resume/>

      <Portfolio/>

      <Services/>

      <div id = {"Contact"} className="w-full flex justify-center bg-white ">
            <div className='flex flex-col w-full items-center bg-white space-y-16 lg:ml-72'>
                <p className="flex pt-10 header-text dark:dark-header-text decoration-sky-800 underline underline-offset-[30px] pb-12"> CONTACT</p>
                <div className="flex flex-col space-y-16 ">

                  <div className="flex flex-row space-x-2">
                    <LocationOnIcon sx={{ fontSize: 36 }} className="text-sky-600"/>
                    <div className="flex flex-col">
                      <p className="sub-header-text">
                        Location:
                      </p>
                      <p className="body-text">
                        Vancouver, BC, Canada
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row space-x-2">
                    <MailIcon sx={{ fontSize: 36 }} className="text-sky-600"/>
                    <div className="flex flex-col">
                      <p className="sub-header-text">
                        Email:
                      </p>
                      <p className="body-text">
                        Forgetscode@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-row space-x-2">
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-col pb-32 space-y-2">
                          <Link href="https://zelda-ten.vercel.app/">
                            <a target="_blank" className="">
                            <Tooltip title="Open">
                              <div className=' flex flex-row p-4 rounded-xl text-teal-600
                                              cursor-pointer bg-gray-900
                                              px-1 transition-all ease-in-out duration-500 w-36
                                              '>
                                <p className='italic text-2xl md:text-4xl'> Zelda</p>
                                <p className='not-italic text-sm'> sms</p>
                                <p className='text-2xl md:text-4xl'> :</p>
                              </div>
                            </Tooltip>
                            </a>
                        </Link>
                        <p className="body-text">
                          DfT3LJ75YTamopdp9grXpUv3ZrtqGfsDiJghBKn5DJbB
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
        </div>


    </div>
  );
}

export default Home
