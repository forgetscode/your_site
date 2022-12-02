
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
import TimeBullet from "../components/TimeBullet";
import TimeBulletPoints from "../components/TimeBulletPoints";

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
      <FadeInHomeText/>

      <AboutInfo/>

      <div id = {"Resume"} className="w-full flex bg-white">
        <div className='flex flex-col w-full space-y-8 lg:ml-72 bg-white'>
          <p className="w-full flex justify-center pt-10 header-text dark:dark-header-text decoration-sky-800 underline underline-offset-[30px] pb-20"> RESUME</p>
          <div className="self-center flex-col space-y-16 md:space-y-0 md:flex-row flex w-4/6 lg:ml-72 bg-white">
            <div className="w-full flex flex-col bg-white">
              <header className="flex header-text pb-10">
                  Education
              </header>
              <TimeBullet title = {"Hugh Boyd Secondary"} years = {"2009 - 2015"} location = {"Richmond, BC"} image = {"/school1.png"} wide ={false}/>
              <TimeBullet title = {"Simon Fraser University"} years = {"2015 - 2020"} location = {"Burnaby, BC"} image = {"/school2.png"} wide={true}/>
            </div>
            <div className="w-full flex flex-col bg-white">
              <header className="flex header-text pb-10">
                  Work Experience
              </header>
              <TimeBulletPoints title = {"Richmond Night Market"} years = {"2017 - 2017"} position = {"General laborer"} image = {"/default.svg"}
                points = {
                  [
                    "Worked with constantly changing team members developing adaptability.",
                    "Worked in a multitude of diverse positions garnering patience and flexibility.",
                    "Performed daily, weekly, and monthly reports, and updated calendar of appoints"
                  ]
                }
              />
              <TimeBulletPoints title = {"Intuitiv Solutions"} years = {"2017 - 2018"} position = {"Promoter"} image = {"/default.svg"} 
                points = {
                  [
                    "Offered IT services for local and international clients.",
                    "Sought people based on selective targeting for advertising purposes",
                    "Addressed client’s needs and recommended the right solution to enhance business productivity",
                  ]
                }
              />
              <TimeBulletPoints title = {"BC Centre for Disease Control"} years = {"Jan 2019 - April 2019"} position = {"Software Developer"} image = {"/default.svg"}
                points = {
                  [
                    "Created features for and improved Bio-Informatics genetic sequencing software Sequdas with Python and Chron Job scheduling for an automated pipeline",
                    "Utilized Sungrid Engine for parallel processing of samples optimizing speed to 15x previous performance",
                    "Displayed improvements and features on Web UI for lab techs to better visualize results using Javascript, PHP, and MySQL",
                  ]
                }
              />
              <TimeBulletPoints title = {"SEO Tofu"} years = {"Jan 2020 - November 2021"} position = {"React Developer"} image = {"/default.svg"}
                points = {
                  [
                    "Addressed client’s needs and recommended the right solution to enhance business productivitys",
                    "Resolved L2 and L3 issue including duplex mismatch, MTU mismatch issues, ACL filtering issues, VLAN, VTP, STP/RPVST and OSPF troubleshooting, which increased network performance by 40%",
                  ]
                }
              />
            </div>
          </div>
          <div className="w-full flex justify-center">
                        <p className="text-center w-3/6 text-white text-sm pt-20 pb-20">
                        {`
                        Fascinated by the bleeding edge of Technology, after graduating University with a Bachelors in
                        Computer Science I pursued experience in React, Cloud services, and Blockchain technology. I am currently engrossed with AI image generation
                        and am actively attempting creative ways to combine my skills and showcase my knowledge.
                        `} 
                        </p>
          </div>
        </div>
      </div>

      <div id = {"Portfolio"} className="h-screen w-full flex justify-center items-center text-3xl  bg-white">
        Portfolio
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
