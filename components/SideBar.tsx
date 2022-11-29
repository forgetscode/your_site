import Toggle from "./Toggle"
import { useColorMode } from "../context/ColorModeContext";
import { useEffect, useState } from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ClearIcon from '@mui/icons-material/Clear';
import Image from 'next/image'
import { StyledEngineProvider, Tooltip } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import SectionSpan from "./SectionSpan";

const SideBar = () => {
    const { mode } = useColorMode()
    const [showSideBar, setShowSideBar ] = useState<Boolean>(true);
    const [ image, setImage ] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            if(image == 4){
                setImage(1)
            }
            else{
                setImage(image + 1)
            }
        }, 3000)
        
        return () => clearInterval(interval)
    }, [image]);
    
    useEffect(() => {
        setShowSideBar(!showSideBar);
        if (window.innerWidth >= 1024) {
          setShowSideBar(true);
        } else {
          setShowSideBar(false);
        }
    
        const updateMedia = () => {
          if (window.innerWidth >= 1024) {
            setShowSideBar(true);
          } else {
            setShowSideBar(false);
          }
        };
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
      }, []);


    return (
    <header className={`${mode === "dark" ? 'dark' : ''}`}>

        <div className={`fixed z-20 space-y-8 h-full w-72 light-theme bg-white dark:dark-theme 
        dark:bg-gradient-to-r 
        from-gray-900
        to-black
        via-gray-800
        animate-gradient-x
        
        origin-left transition-all duration-500 ${showSideBar ?"ml-0" : "-ml-72 "}`}>
            
            <Tooltip title="Theme" placement="right">
                <div className="absolute z-10 right-2">
                    <Toggle/>
                </div>
            </Tooltip>

            <div className="w-full flex flex-col justify-center items-center space-y-6 pt-3">
                <div className="relative w-32 h-32 rounded-full border-4 border-sky-200 dark:border-gray-700">
                    
                        { 
                            image == 1 ? 
                            <Image
                                className="rounded-full transition-all"
                                src="/pic1.png"
                                alt=""
                                layout="fill"
                            />
                            : image == 2 ?
                            <Image
                                className="rounded-full transition-all"
                                src="/pic2.png"
                                alt=""
                                layout="fill"
                            />
                            : image == 3 ?
                            <Image
                                className="rounded-full transition-all"
                                src="/pic3.png"
                                alt=""
                                layout="fill"
                            />
                            : 
                            <Image
                                className="rounded-full transition-all"
                                src="/pic4.png"
                                alt=""
                                layout="fill"
                            />
                        }
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

            <SectionSpan/>

            <p className="absolute z-10 scale-0 lg:scale-100 bottom-3 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-white opacity-80 text-sm ">
                <CopyrightOutlinedIcon className="scale-0 md:scale-75 opacity-80 pb-1"/>
                Michael Gergely
            </p>
        </div>

        <button onClick = {()=> setShowSideBar(!showSideBar)} className="fixed z-10 light-theme dark:dark-theme dark:bg-gray-900 rounded-full right-6 top-6 w-10 h-10 lg:scale-0 text-center">
          {showSideBar ? <Tooltip title="Close"><ClearIcon className="text-white"/></Tooltip>: <Tooltip title="Open"><DensityMediumIcon className="text-white"/></Tooltip>}
       </button>
    </header>
    )
}
export default SideBar