
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
import Link from "next/link";

const Fade = require("react-reveal/Fade")

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
      console.log("height: ", scrollHeight, "About: ", sections.About , "Resume: ", sections.Resume)
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

      <div id = {"Portfolio"} className="w-full flex justify-center bg-white ">
        <div className='flex flex-col w-full items-center bg-white space-y-16 lg:ml-72'>
          <p className="flex pt-10 header-text dark:dark-header-text decoration-sky-800 underline underline-offset-[30px] pb-12"> PORTFOLIO</p>
          <Fade bottom={true} duration={700}> 
            <div className='w-4/6 min-h-[400px] bg-gray-900 rounded-3xl border shadow-2xl '>
              <div className="flex flex-row w-full h-full">
              <Link href="https://zelda-ten.vercel.app/">
                  <a target="_blank" className="
                  w-2/5 h-full 
                  bg-gradient-to-r 
                from-gray-900
                to-black
                via-gray-800
                  animate-gradient-x 
                  rounded-l-3xl">
                  <Tooltip title="Open">
                    <div className='h-full flex flex-row p-4 rounded-xl  items-center justify-center text-teal-600
                                    cursor-pointer
                                    hover:scale-110 transition-all ease-in-out duration-500 hover:text-white
                                    '>
                      <p className='italic text-4xl'> Zelda</p>
                      <p className='not-italic text-sm'> sms</p>
                    </div>
                  </Tooltip>
                  </a>
                </Link>
                <div className="w-3/5 h-full">
                  <div className="flex flex-col pl-8 p-4 space-y-4 justify-between">

                    <p className="flex font-bold font-mono leading-tight text-3xl text-white ">
                      Stack
                    </p>
                    <p className="text-white font-medium font-poppins">
                      React, Tailwind, Typescript, Javascript, NextJS for frontend, and Solana blockchain used as backend.
                    </p>
                    <span className="space-y-4 lg:pt-10">
                      <div className="font-medium w-24 md:w-32 lg:w-40 leading-tight text-center text-xl bg-black text-teal-600 rounded-lg p-2 hover:text-teal-400 cursor-pointer">
                        <Link href="https://github.com/forgetscode/zelda">
                          <a target="_blank">
                                Github
                          </a>
                        </Link>
                      </div>

                      <div className="font-medium w-24 md:w-32 lg:w-40 leading-tight text-center text-xl bg-black text-teal-600 rounded-lg p-2 hover:text-teal-400 cursor-pointer">
                        <Link href="https://github.com/forgetscode/sms2">
                          <a target="_blank">
                            Smart Contract
                          </a>
                        </Link>
                      </div>

                      <div className="font-medium w-24 md:w-32 lg:w-40 leading-tight text-center text-xl bg-black text-teal-600 rounded-lg p-2 hover:text-teal-400 cursor-pointer">
                        <Link href="https://www.youtube.com/watch?v=XKThYf5cnqk">
                          <a target="_blank">
                            Video Demo
                          </a>
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom={true} duration={700}> 
            <div className='w-4/6 min-h-[400px] bg-gray-900 rounded-3xl border shadow-2xl '>
              <div className="flex flex-row w-full h-full">
              <Link href="https://forgetspractice.com/">
                  <a target="_blank" className="
                  w-2/5 h-full 
                  bg-gradient-to-r 
                from-gray-900
                to-black
                via-gray-800
                  animate-gradient-x 
                  rounded-l-3xl">
                  <Tooltip title="Open">
                    <div className='h-full flex flex-row p-4 rounded-xl  items-center justify-center text-white
                                    cursor-pointer
                                    hover:scale-110 transition-all ease-in-out duration-500 hover:text-gray-300
                                    '>
                      <Image
                        className="h-12 w-12"
                        src="https://www.svgrepo.com/show/53400/repair-guy-outline.svg"
                        alt=""
                        width={48}
                        height={48}     
                      />                
                      <p className='text-4xl'> Sosmo</p>
                    </div>
                  </Tooltip>
                  </a>
                </Link>
                <div className="w-3/5 h-full">
                  <div className="flex flex-col pl-8 p-4 space-y-4 justify-between">

                    <p className="flex font-bold font-mono leading-tight text-3xl text-white ">
                      Stack
                    </p>
                    <p className="text-white font-medium font-poppins">
                      NodeJS, ExpressJS, PostrgeSQL, TypeORM, GraphQL, Apollo, Redis backend hosted on cloud service in Conjunction with Solana blockchain for programatic value transfer of job contracts.
                      Typescript, React, Tailwind front end.
                    </p>
                    <span className="space-y-4 lg:pt-10">
                      <div className="font-medium w-24 md:w-32 lg:w-40 leading-tight text-center text-xl bg-black text-white rounded-lg p-2 hover:opacity-70 cursor-pointer">
                        <Link href="https://github.com/forgetscode/sosmo">
                          <a target="_blank">
                                Github
                          </a>
                        </Link>
                      </div>

                      <div className="font-medium w-24 md:w-32 lg:w-40 leading-tight text-center text-xl bg-black text-white rounded-lg p-2 hover:opacity-70 cursor-pointer">
                        <Link href="https://github.com/forgetscode/agreement">
                          <a target="_blank">
                            Smart Contract
                          </a>
                        </Link>
                      </div>

                      <div className="font-medium w-24 md:w-32 lg:w-40 leading-tight text-center text-xl bg-black text-white rounded-lg p-2 hover:opacity-70 cursor-pointer">
                        <Link href="https://www.youtube.com/watch?v=hCYLj3UGY08&t=1s">
                          <a target="_blank">
                            Video Demo
                          </a>
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom={true} duration={700}> 
            <div className='w-4/6 min-h-[400px] bg-gray-900 rounded-3xl border shadow-2xl '>
              <div className="flex flex-row w-full h-full">
              <Link href="https://nextflix-bice-eight.vercel.app/">
                  <a target="_blank" className="
                  w-2/5 h-full 
                  bg-gradient-to-r 
                from-gray-900
                to-black
                via-gray-800
                  animate-gradient-x 
                  rounded-l-3xl">
                  <Tooltip title="Open">
                    <div className='h-full flex flex-row p-4 rounded-xl  items-center justify-center text-sky-200
                                    cursor-pointer
                                    hover:scale-110 transition-all ease-in-out duration-500 hover:text-sky-600
                                    '>
                      <Image
                        className="h-12 w-12"
                        src="https://www.svgrepo.com/show/423205/muffin.svg"
                        alt=""
                        width={48}
                        height={48}     
                      />                
                      <p className='text-4xl'> Nextflix</p>
                    </div>
                  </Tooltip>
                  </a>
                </Link>
                <div className="w-3/5 h-full">
                  <div className="flex flex-col pl-8 p-4 space-y-4 justify-between">

                    <p className="flex font-bold font-mono leading-tight text-3xl text-white ">
                      Stack
                    </p>
                    <p className="text-white font-medium font-poppins">
                      Firebase as cloud service for backend, stripe payment integration with firebase, server side rendered data from public Rest API.
                      Front end built with NextJS, React, TypeScript, and Tailwind
                    </p>
                    <span className="space-y-4 lg:pt-10">
                      <div className="font-medium w-24 md:w-32 lg:w-40 leading-tight text-center text-xl bg-black text-sky-600 rounded-lg p-2 hover:text-sky-400 cursor-pointer">
                        <Link href="https://github.com/forgetscode/nextflix">
                          <a target="_blank">
                                Github
                          </a>
                        </Link>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div id = {"Services"} className="h-screen w-full flex justify-center items-center text-3xl text-white bg-black">
        Services
      </div>

      <div id = {"Contact"} className="h-screen w-full flex justify-center items-center text-3xl bg-white">
        Contact
      </div>


    </div>
  );
}

export default Home
