
import Head from "next/head";
import SideBar from "../components/SideBar/SideBar";
import { useColorMode } from "../context/ColorModeContext";
import Image from 'next/image'
import { NextPage } from "next";
import { Tooltip } from "@mui/material";
import AboutInfo from "../components/About/AboutInfo";
import FadeInHomeText from "../components/FadeInHomeText";
import Resume from "../components/Resume";

import background from '../public/bg.jpg';
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import Link from "next/link";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import CalculateIcon from '@mui/icons-material/Calculate';

const Home: NextPage = () => {
  const { mode } = useColorMode()

  return (
    <div className={`${mode === "dark" ? 'dark' : ''}`}>
      <Head>
        <title>Michael Gergely - Web Dev</title>
        <link rel='icon' href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Vsmart_logo.svg/402px-Vsmart_logo.svg.png?20200810165214"/>
      </Head>

      <SideBar title = "Michael Gergely" footer="Michael Gergely" props = 
          {
            [
              {id:"Home", icon:<HomeOutlinedIcon/>, title: "Home"},
              {id:"About", icon:<PersonOutlineOutlinedIcon/>, title: "About"},
              {id:"Resume", icon:<DescriptionOutlinedIcon/>, title: "Resume"},
              {id:"Portfolio", icon:<BusinessCenterOutlinedIcon/>, title: "Portfolio"},
              {id:"Services", icon:<EngineeringOutlinedIcon/>, title: "Services"},
              {id:"Contact", icon:<MailOutlinedIcon/>, title: "Contact"},
            ]
          }
        />

      <div id = {"Home"} className="absolute h-full w-full top-0 "/>
      <div  className="fixed -z-30 h-full w-full lg:-mt-[400px] brightness-75">
        <Image
            className="absolute "
            src={background}
            layout="responsive"
            placeholder="blur"
            alt=""
            priority            
        />
      </div>

      <div className="lg:ml-[350px]">
        <FadeInHomeText title={"Michael Gergely"} texts={['Front-end Developer.', 'Back-End Developer.', 'Blockchain-Developer.', 'Web Developer.']}/>
      </div>

      <AboutInfo 
        bio= {`Fascinated by the bleeding edge of technology, I am constantly seeking new ways to expand my knowledge and skills.
          After earning my Bachelor's degree in Computer Science and Microbiology and Biochemistry from Simon Fraser University, 
          I have gained experience working with React, cloud services, and blockchain technology. 
          Recently, I have been particularly interested in AI image generation and am constantly seeking opportunities to combine and showcase my diverse 
          skill set.
          `}
        title={"Web Developer & Full Stack Engineer"}
        info={"Gym Enthusiast, Basketball player, Cat Lover"}
        points={
          [
            {title:"Phone", info:"778-789-3561"},
            {title:"Location", info:"Vancouver, Canada"},
            {title:"University", info:"Simon Fraser University"},
            {title:"Email",  info:"Michael.v.y.gergely@gmail.com"},
          ]
        }
        quote={`You miss 100% of the shots you don't take.`}
        quoteAuthor={"Wayne Gretzky"}
        facts={
          [
            {
              icon:<GitHubIcon className="second-text-theme h-16 w-16"/>,
              titleMark:"308",
              title:"Github contributions",
              info:"in 2022.",
            },
            {
              icon:<CalculateIcon className='second-text-theme h-16 w-16'/>,
              titleMark:"A+",
              title:"In Calculus",
              info:"at SFU.",
            }

          ]
        }
        skills={
          [
            {
              title:"HTML",
              percentage:"90%",
              titleSecond:"CSS",
              percentageSecond:"90%",
            },
            {
              title:"Javascript",
              percentage:"90%",
              titleSecond:"Typescript",
              percentageSecond:"90%",
            },
            {
              title:"React",
              percentage:"90%",
              titleSecond:"Tailwind",
              percentageSecond:"90%",
            },
            {
              title:"NextJS",
              percentage:"80%",
              titleSecond:"Python",
              percentageSecond:"80%",
            },
            {
              title:"NodeJS",
              percentage:"80%",
              titleSecond:"Solana Blockchain",
              percentageSecond:"70%",
            },
            {
              title:"SQL(PSQL, MySQL)",
              percentage:"70%",
              titleSecond:"GraphQL",
              percentageSecond:"60%",
            },
            {
              title:"MaterialUI",
              percentage:"60%",
              titleSecond:"WordPress",
              percentageSecond:"50%",
            },
            {
              title:"Stripe",
              percentage:"50%",
              titleSecond:"TypeORM",
              percentageSecond:"50%",
            },
            {
              title:"FireBase",
              percentage:"50%",
              titleSecond:"Rust",
              percentageSecond:"50%",
            },
            {
              title:"PHP",
              percentage:"40%",
              titleSecond:"Docker",
              percentageSecond:"40%",
            },
            {
              title:"C++",
              percentage:"30%",
              titleSecond:"AWS",
              percentageSecond:"30%",
            },
            {
              title:"C",
              percentage:"20%",
            },
          ]
        }
      />

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
