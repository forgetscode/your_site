import Toggle from "./Toggle"
import { useColorMode } from "../context/ColorModeContext";
import { useEffect, useState } from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ClearIcon from '@mui/icons-material/Clear';
import Image from 'next/image'
import { Tooltip } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

const SideBar = () => {
    const { mode } = useColorMode()
    const [showSideBar, setShowSideBar] = useState<Boolean>(true);

    
    useEffect(() => {
        setShowSideBar(!showSideBar);
        if (window.innerWidth >= 1450) {
          setShowSideBar(true);
        } else {
          setShowSideBar(false);
        }
    
        const updateMedia = () => {
          if (window.innerWidth >= 1450) {
            setShowSideBar(true);
          } else {
            setShowSideBar(true);
          }
        };
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
      }, []);


    return (
    <header className={`${mode === "dark" ? 'dark' : ''}`}>

        <div className={`fixed z-20 space-y-8 h-full w-72 light-theme bg-white dark:dark-theme dark:bg-black origin-left transition-all duration-500 ${showSideBar ?"ml-0" : "-ml-72 "}`}>
            
            <Tooltip title="Theme" placement="right">
                <div className="absolute z-10 right-2">
                    <Toggle/>
                </div>
            </Tooltip>

            <div className="w-full flex flex-col justify-center items-center space-y-6 pt-3">
                <div className="relative w-32 h-32 rounded-full border-4 border-sky-200 dark:border-gray-700">
                        <Image
                            className="rounded-full"
                            src="https://www.zbrushcentral.com/uploads/default/optimized/4X/0/0/e/00eabc32bcfdb173e61a62d2803a5e5aa846e9db_2_1800x1800.jpeg"
                            alt=""
                            layout="fill"
                        />
                </div>
                <p className="text-2xl light-text dark:dark-text font-bold ">
                    Michael Gergely
                </p>
            </div>

            <div className="flex z-10 flex-row space-x-3 justify-center">
                <Tooltip title="Youtube">
                    <span className="social-icon cursor-pointer">
                        <YouTubeIcon className="h-5 w-5"/>
                    </span>
                </Tooltip>
                <Tooltip title="Twitter">
                    <span className="social-icon cursor-pointer">
                        <TwitterIcon className="h-5 w-5"/>
                    </span>
                </Tooltip>
                <Tooltip title="FaceBook">
                    <span className="social-icon cursor-pointer">
                        <FacebookIcon className="h-5 w-5"/>
                    </span>
                </Tooltip>
                <Tooltip title="LinkedIn">
                    <span className="social-icon cursor-pointer">
                        <LinkedInIcon className="h-5 w-5"/>
                    </span>
                </Tooltip>
            </div>

            <div className = "flex z-10 flex-col pt-2 space-y-8">
                <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <HomeOutlinedIcon className="id-icon"/>
                        <p className="id-text">Home</p>
                </div>
                <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                    <PersonOutlineOutlinedIcon className="id-icon"/>
                    <p className="id-text">About</p>
                </div>
                <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                    <DescriptionOutlinedIcon className="id-icon"/>
                    <p className="id-text">Resume</p>
                </div>
                <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                    <BusinessCenterOutlinedIcon className="id-icon"/>
                    <p className="id-text">Portfolio</p>
                </div>
                <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                    <EngineeringOutlinedIcon className="id-icon"/>
                    <p className="id-text">Services</p>
                </div>
                <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                    <MailOutlinedIcon  className="id-icon"/>
                    <p className="id-text">Contact</p>
                </div>
            </div>

            <p className="absolute z-10 scale-0 lg:scale-100 bottom-3 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-white opacity-80 text-sm ">
                <CopyrightOutlinedIcon className="scale-0 md:scale-75 opacity-80 pb-1"/>
                Michael Gergely
            </p>
        </div>

        <button onClick = {()=> setShowSideBar(!showSideBar)} className="absolute z-10 light-theme dark:dark-theme rounded-full right-6 top-6 w-10 h-10 md:scale-0 text-center">
          {showSideBar ? <Tooltip title="Close"><ClearIcon className="text-white"/></Tooltip>: <Tooltip title="Open"><DensityMediumIcon className="text-white"/></Tooltip>}
       </button>
    </header>
    )
}
export default SideBar