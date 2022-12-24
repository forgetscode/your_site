
import Head from "next/head";
import SideBar from "../components/SideBar/SideBar";
import { useColorMode } from "../context/ColorModeContext";
import Image from 'next/image'
import { NextPage } from "next";
import { Tooltip } from "@mui/material";
import AboutInfo from "../components/About/AboutInfo";
import FadeInHomeText from "../components/FadeInHomeText";
import Resume from "../components/Resume/Resume";

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

      <div id = {"Home"} className="absolute top-0 "/>
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

      <div className="flex flex-col w-full bg-white">
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
              icon:<GitHubIcon style={{ fontSize: 48 }}/>,
              titleMark:"308",
              title:"Github contributions",
              info:"in 2022.",
            },
            {
              icon:<CalculateIcon style={{ fontSize: 48 }}/>,
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

      <Resume 
        education={
          [
            {
              title:"Simon Fraser University",
              years:"2015 - 2020",
              location:"Burnaby, BC", 
              image:"/school2.png", 
              wide:true,
            },
            {
              title:"Hugh Boyd Secondary",
              years:"2009 - 2015",
              location:"Richmond, BC", 
              image:"/school1.png", 
              wide:false,
            },
          ]
        }
        work={
          [
            {
              title:"SEO Tofu",
              years:"Jan 2020 - November 2021",
              position:"React Developer", 
              image:"/default.svg", 
              wide:false,
              points:
                [
                  "Utilized the Google search API to scrape and relate websites and businesses, aggregating SEO data with business metadata allowing me to efficiently gather and analyze data, providing valuable insights for our clients and helping them improve their online presence.",
                  "Implemented a new feature on the company's e-commerce platform using React, resulting in a 20% increase in conversion rate. Utilized React's reusable components and efficient performance to quickly prototype and deploy the feature, and collaborated with the design team to ensure a seamless user experience.",
                ]
            },
            {
              title:"BC Centre for Disease Control",
              years:"Jan 2019 - April 2019",
              position:"Software Developer", 
              image:"/default.svg", 
              wide:true,
              points:
                [
                  "Utilized multi-core processors to perform parallel sequencing of lab samples to increase server processing speed by 15x",
                  "Led the development of a front-end interface for lab technicians, conducting interviews with technicians to identify key features and relevant calculations that would streamline sample analysis.",
                  "Implemented a system logging procedure that facilitated early identification of inconsistent, incomplete, or failing samples, resulting in faster feedback loops between departments.",
                ]
            },
            {
              title:"Intuitiv Solutions",
              years:"Sept 2017 - Aug 2018",
              position:"Promoter", 
              image:"/default.svg", 
              wide:false,
              points:
                [
                  "Provided IT services to a diverse client base, including local and international clients, successfully meeting their needs and exceeding their expectations.",
                  "Utilized selective targeting to identify potential clients and effectively advertise our services, resulting in an increase in business and customer satisfaction.",
                  "Assessed clients' needs and recommended tailored solutions to enhance their business productivity, consistently delivering high-quality service and driving positive outcomes.",
                ]
            },
            {
              title:"Richmond Night Market",
              years:"April 2017 - Aug 2017",
              position:"General laborer", 
              image:"/default.svg", 
              wide:false,
              points:
              [
                "Demonstrated strong adaptability skills while working on a team with constantly changing members, successfully navigating shifting priorities and responsibilities.",
                "Developed patience and flexibility through diverse work experiences, including roles in customer service, event planning, and data analysis.",
                "Conducted daily, weekly, and monthly reports and managed a calendar of appointments to ensure efficient time management and accurate record-keeping."
            ]
            },
          ]
        }
      />

      <Portfolio
        props=
        {
          [
            {
              link:"https://github.com/forgetscode/zelda",
              project:"Zelda",
              title:"Stack",
              text:"React, Tailwind, Typescript, Javascript, NextJS for frontend, and Solana blockchain used as backend.",
              color:"text-teal-600",
              hoverColor:"hover:text-teal-400",
              buttons:[
                {text:"GitHub", link:"https://github.com/forgetscode/zelda"},
                {text:"Smart Contract", link:"https://github.com/forgetscode/sms2"},
                {text:"Video Demo", link:"https://www.youtube.com/watch?v=XKThYf5cnqk"},
              ]
            },
            {
              link:"https://forgetspractice.com/",
              project:"Sosmo",
              title:"Stack",
              text:"NodeJS, ExpressJS, PostrgeSQL, TypeORM, GraphQL, Apollo, Redis backend hosted on cloud service in Conjunction with Solana blockchain for programatic value transfer of job contracts. Typescript, React, Tailwind front end.",
              color:"text-white",
              hoverColor:"hover:text-gray-300",
              buttons:[
                {text:"GitHub", link:"https://github.com/forgetscode/sosmo"},
                {text:"Smart Contract", link:"https://github.com/forgetscode/agreement"},
                {text:"Video Demo", link:"https://www.youtube.com/watch?v=XKThYf5cnqk"},
              ]
            },
            {
              link:"https://nextflix-bice-eight.vercel.app/",
              project:"Nextflix",
              title:"Stack",
              text:"NodeJS, ExpressJS, PostrgeSQL, TypeORM, GraphQL, Apollo, Redis backend hosted on cloud service in Conjunction with Solana blockchain for programatic value transfer of job contracts. Typescript, React, Tailwind front end.",
              color:"text-sky-600",
              hoverColor:"hover:text-sky-400",
              buttons:[
                {text:"GitHub", link:"https://github.com/forgetscode/nextflix"},
              ]
            },
          ]
        }
      />

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
    </div>
  );
}

export default Home
