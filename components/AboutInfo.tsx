import { Button, Modal, Tooltip } from '@mui/material';
import Image from 'next/image'
import { useState } from 'react';
import { useScroll } from '../context/ActiveScroll';
import { useColorMode } from '../context/ColorModeContext';
import Bullet from './Bullet';
import ProgressBar from './ProgressBar';

import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CalculateIcon from '@mui/icons-material/Calculate';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

import portait from '../public/portait.png'

const Fade = require("react-reveal/Fade")

const AboutInfo = () => {
    const { mode } = useColorMode()
    const { activeScroll } = useScroll()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      
    return(
        <div className="dark">
            <div className="flex w-full bg-white" id = {"About"}>
                <div className='flex flex-col bg-white space-y-8 justify-center lg:ml-72'>
                    <p className="w-full flex justify-center pt-10 header-text dark:dark-header-text decoration-sky-800 underline underline-offset-[30px]"> ABOUT</p>
                    <div className="w-full flex justify-center">
                        <p className="text-center w-4/6 body-text dark:dark-body-text pt-6 lg:pt-0 pb-20 lg:pb-10">
                        {`
                        Fascinated by the bleeding edge of Technology, after graduating University with a Bachelors in
                        Computer Science I pursued experience in React, Cloud services, and Blockchain technology. I am currently engrossed with AI image generation
                        and am actively attempting creative ways to combine my skills and showcase my knowledge.
                        `} 
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-4/6 justify-center flex flex-col md:flex-row md:space-x-6">
                            <Fade left={true} duration={2000}>
                                <div className='flex'>
                                    <Tooltip title="Zoom in.">
                                        <Button onClick={handleOpen}>
                                            <div className="flex group h-[340px] w-[340px] transition-all duration-700 ease-in-out">
                                                <Image
                                                className='group'
                                                src={portait} 
                                                alt=''            
                                                />
                                                <ZoomInIcon className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group group-hover:opacity-80 text-white h-20 w-20'/>
                                            
                                            </div> 
                                        </Button>
                                    </Tooltip>
                                </div>
                                <Modal
                                    className="cursor-pointer"
                                    open={open}
                                    onClose={handleClose}
                                    >
                                    <Tooltip title="AI generated Mad Scientist, created with MidJourney.">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                                    md:h-[480px] md:w-[480px] h-[340px] w-[340px] min-w-[340px] min-h-[340px]">
                                        <Image
                                            src={portait}
                                            alt=""
                                            quality={100}
                                            priority       
                                        />
                                    </div>
                                    </Tooltip>
                                </Modal>
                            </Fade>
                            <Fade right={true} duration={2000}>
                                <div className="flex flex-col space-y-6">
                                    <header className="text-2xl text-gray-900 font-semibold pt-20 md:pt-0 sub-header-text dark:dark-sub-header-text">
                                        Web Developer & Full Stack Engineer
                                    </header>
                                    <p className='body-text dark:dark-body-text'>
                                        Gym Enthusiast, Basketball player, Cat Lover.
                                    </p>
                                    <div className="flex flex-row space-x-20 body-text dark:dark-body-text">
                                        <div className="flex flex-col space-y-3">
                                            <Bullet title={"Birthday"} text={"20 Nov 1995"}/>
                                            <Bullet title={"Phone"} text={"778-XXX-XXX"}/>
                                            <Bullet title={"Location"} text={"Vancouver, Canada"}/>
                                            <Bullet title={"University"} text={"Simon Fraser University"}/>
                                            <Bullet title={"Email"} text={"Forgetscode@gmail.com"}/>
                                            <Bullet title={"Freelance"} text={"Available"}/>
                                        </div>  
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    <Fade>
                        <p className='text-center body-text dark:dark-body-text italic'>
                            {`You miss 100% of the shots you don't take.`}
                        </p>
                        <p className='text-center body-text dark:dark-body-text italic'>
                            {`-Wayne Gretzky`}
                        </p>
                    </Fade>

                    <p className="w-full flex justify-center pt-10 header-text dark:dark-header-text decoration-sky-800 underline underline-offset-[30px]"> Facts</p>
                    
                    <Fade bottom={true} duration={1000}>
                        <div className="w-full flex justify-center pb-32">
                            <div className='flex ml-16 md:ml-0 flex-col justify-center space-y-10 md:space-y-0 md:flex-row  lg:space-x-20 pt-16'>
                                <div className='flex flex-col body-text dark:dark-body-text space-y-3 w-36'>
                                    <GitHubIcon className="text-sky-600 h-16 w-16"/>
                                    <p className='font-semibold text-3xl'>271</p>
                                    <p className='font-bold body-text dark:body-text'> Github contributions</p>
                                    <p className='body-text dark:body-text'> in 2022.</p>
                                </div>
                                <div className='flex flex-col body-text dark:dark-body-text space-y-3 w-36'>
                                    <SportsEsportsIcon className="text-sky-600 h-16 w-16"/>
                                    <p className='font-semibold text-3xl'>2</p>
                                    <p className='font-bold body-text dark:body-text'> Time Diamond League of Legends player</p>
                                    <p className='body-text dark:body-text'>in 2016, and 2018.</p>
                                </div>
                                <div className='flex flex-col body-text dark:dark-body-text space-y-3 w-36'>
                                    <CalculateIcon className="text-sky-600 h-16 w-16"/>
                                    <p className='font-semibold text-3xl'>A+</p>
                                    <p className='font-bold body-text dark:body-text'> In Calculus </p>
                                    <p className='body-text dark:body-text'>at SFU.</p>
                                </div>
                                <div className='flex flex-col body-text dark:dark-body-text space-y-3 w-36'>
                                    <FoodBankIcon className="text-sky-600 h-16 w-16"/>
                                    <p className='font-semibold text-3xl'>Solo</p>
                                    <p className='font-bold body-text dark:body-text'>Large Pizza </p>
                                    <p className='body-text dark:body-text'>in one sitting this one time. Maybe more than once.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <p className="w-full flex justify-center header-text dark:dark-header-text decoration-sky-800 underline underline-offset-[30px] pb-16"> Skills</p>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center'>
                            <ProgressBar title={"HTML"} percent={"90%"}/>
                            <ProgressBar title={"CSS"} percent={"90%"}/>
                        </div>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center'>
                            <ProgressBar title={"Javascript"} percent={"90%"}/>
                            <ProgressBar title={"Typescript"} percent={"90%"}/>
                        </div>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center'>
                            <ProgressBar title={"React"} percent={"90%"}/>
                            <ProgressBar title={"Tailwind"} percent={"90%"}/>
                        </div>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center'>
                            <ProgressBar title={"NextJS"} percent={"80%"}/>
                            <ProgressBar title={"Python"} percent={"80%"}/> 
                        </div>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center'>
                            <ProgressBar title={"NodeJS"} percent={"80%"}/>
                            <ProgressBar title={"Solana Blockchain"} percent={"70%"}/>
                        </div>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center'>
                            <ProgressBar title={"SQL(PSQL, MySQL)"} percent={"70%"}/>
                            <ProgressBar title={"MaterialUI"} percent={"70%"}/>
                        </div>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center'>
                            <ProgressBar title={"GraphQL"} percent={"70%"}/>
                            <ProgressBar title={"WordPress"} percent={"60%"}/>
                        </div>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center'>
                            <ProgressBar title={"Apollo Server/Client"} percent={"60%"}/>
                            <ProgressBar title={"Redis"} percent={"50%"}/>
                        </div>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center'>
                            <ProgressBar title={"Stripe"} percent={"50%"}/>
                            <ProgressBar title={"TypeORM"} percent={"50%"}/>
                        </div>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center'>
                            <ProgressBar title={"FireBase"} percent={"50%"}/>
                            <ProgressBar title={"Rust"} percent={"40%"}/>
                        </div>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center'>
                            <ProgressBar title={"PHP"} percent={"40%"}/>
                            <ProgressBar title={"Docker"} percent={"30%"}/>
                        </div>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center'>
                            <ProgressBar title={"C++"} percent={"30%"}/>
                            <ProgressBar title={"AWS"} percent={"30%"}/>
                        </div>
                        <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center pb-20'>
                            <ProgressBar title={"C++"} percent={"30%"}/>
                            <ProgressBar title={"C"} percent={"20%"}/>
                        </div> 
                </div>
            </div>
        </div>
    )
}
export default AboutInfo;