import { Button, Modal, Tooltip } from '@mui/material';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useScroll } from '../context/ActiveScroll';
import { useColorMode } from '../context/ColorModeContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CalculateIcon from '@mui/icons-material/Calculate';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import Bullet from './Bullet';
import ProgressBar from './ProgressBar';

const AboutInfo = () => {
    const { mode } = useColorMode()
    const [fadeIn, setFadeIn] = useState(false)
    const { activeScroll } = useScroll()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (fadeIn == true){
            return
        }
        const interval = setInterval(() => {
            if (activeScroll == "About"){
                setFadeIn(true)
            }
        }, 500)
        return () => clearInterval(interval)
      }, [activeScroll] )
      
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
                            <div className='flex h-[340px] w-[340px]'>
                            { (fadeIn) ?
                                <Button onClick={handleOpen}>
                                    <div className="flex h-[340px] w-[340px] min-w-[340px] min-h-[340px] origin-left ease-in opacity-100 transition-all duration-700">
                                        <Image
                                        src="/about.png"
                                        alt=""
                                        layout="fill"
                                        quality={100}                
                                        />
                                    </div> 
                                </Button>
                                :
                                <Button onClick={handleOpen}>
                                    <div className="flex h-[340px] w-[340px] min-w-[340px] min-h-[340px] -ml-20 origin-left ease-in opacity-0 transition-all duration-700">
                                        <Image
                                        src="/about.png"
                                        alt=""
                                        layout="fill"
                                        quality={100}                
                                        />
                                    </div>
                                </Button>
                            }
                            </div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            >
                            <Tooltip title="AI gernerated Mad Scientist using MidJourney">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                            md:h-[480px] md:w-[480px] h-[340px] w-[340px] min-w-[340px] min-h-[340px]">
                                <p className='absolute text-white'>
                                    Ai Generated with MidJourney
                                </p>
                                <Image
                                    src="/about.png"
                                    alt=""
                                    layout="fill"
                                    quality={100}                
                                />
                            </div>
                            </Tooltip>
                        </Modal>

                            { (fadeIn) ?
                                <div className="flex flex-col space-y-6 origin-right ease-in opacity-100 transition-all duration-700">
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
                                        <Bullet title={"Location"} text={"New Westminster, BC, Canada"}/>
                                        <Bullet title={"University"} text={"Simon Fraser University"}/>
                                        <Bullet title={"Email"} text={"Forgetscode@gmail.com"}/>
                                        <Bullet title={"Freelance"} text={"Available"}/>
                                        </div>  
                                    </div>
                                </div>
                                :
                                <div className="flex flex-col space-y-6 origin-right ease-in opacity-0 transition-all duration-700">
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
                                    <Bullet title={"Location"} text={"New Westminster, BC, Canada"}/>
                                    <Bullet title={"University"} text={"Simon Fraser University"}/>
                                    <Bullet title={"Email"} text={"Forgetscode@gmail.com"}/>
                                    <Bullet title={"Freelance"} text={"Available"}/>
                                    </div>  
                                </div>
                                <p className='body-text dark:dark-body-text'>
                                    {`Ready`}
                                </p>
                            </div>
                            }
                        </div>
                    </div>

                    <p className='text-center body-text dark:dark-body-text italic'>
                        {`You miss 100% of the shots you don't take.`}
                    </p>
                    <p className='text-center body-text dark:dark-body-text italic'>
                        {`-Wayne Gretzky`}
                    </p>

                    <p className="w-full flex justify-center pt-10 pb-16 text-3xl header-text dark:dark-header-text decoration-sky-800 underline underline-offset-[30px]"> Facts</p>
                    
                    <div className="w-full flex justify-center pb-32">
                        <div className='flex justify-between flex-col space-y-10 md:space-y-0 md:flex-row lg:space-x-20 pt-16'>

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
                                <p className='font-bold body-text dark:body-text'> Calculus 101 </p>
                                <p className='body-text dark:body-text'>at SFU.</p>
                            </div>
                            <div className='flex flex-col body-text dark:dark-body-text space-y-3 w-36'>
                                <FoodBankIcon className="text-sky-600 h-16 w-16"/>
                                <p className='font-semibold text-3xl'>Solo</p>
                                <p className='font-bold body-text dark:body-text'>Large Pizza </p>
                                <p className='body-text dark:body-text'>in one sitting this one time. Maybe twice.</p>
                            </div>

                        </div>
                    </div>

                    <p className="w-full flex justify-center pt-10 text-3xl header-text dark:dark-header-text decoration-sky-800 underline underline-offset-[30px]"> Skills</p>
                        <ProgressBar title={"gg"} percent={"67%"}/>
                </div>
            </div>
        </div>
    )
}
export default AboutInfo;