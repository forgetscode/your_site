import { useColorMode } from "../context/ColorModeContext";
import { useScroll } from "../context/ActiveScroll";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { useState, useEffect } from "react";

const SectionSpan = () => {
    const { mode } = useColorMode()
    const { activeScroll, setActiveScroll} = useScroll()

    const [selected, setSelected] = useState<string>("")
  
    useEffect(()=> {
      const element = document.getElementById(selected)
      element?.scrollIntoView({behavior: "smooth" , block: "center"})
    }, [selected]);
  

    return (
    <header className={`${mode === "dark" ? 'dark' : ''}`}>
        <div className = "flex z-10 flex-col pt-2 space-y-8">
                <button onClick = { ()=> {setSelected("Home"), setActiveScroll("Home")}}>
                {
                    activeScroll == "Home" ?
                    <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <HomeOutlinedIcon className="id-icon text-sky-500"/>
                        <p className="text-sky-500 font-semibold transition-all duration-500 dark:text-white">Home</p>
                    </div>
                    :
                    <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <HomeOutlinedIcon className="id-icon"/>
                        <p className="id-text">Home</p>
                    </div>
                }
                </button>
                <button onClick = { ()=> {setSelected("About"), setActiveScroll("About")}}>
                {
                    activeScroll == "About" ?
                    <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <PersonOutlineOutlinedIcon className="id-icon text-sky-500"/>
                        <p className="text-sky-500 font-semibold transition-all duration-500 dark:text-white">About</p>
                    </div>
                    :
                    <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <PersonOutlineOutlinedIcon className="id-icon"/>
                        <p className="id-text">About</p>
                    </div>
                }
                </button>
                <button onClick = { ()=> {setSelected("Resume"), setActiveScroll("Resume")}}>
                {
                    activeScroll == "Resume" ?
                    <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <DescriptionOutlinedIcon className="id-icon text-sky-500"/>
                        <p className="text-sky-500 font-semibold transition-all duration-500 dark:text-white">Resume</p>
                    </div>
                    :
                    <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <DescriptionOutlinedIcon className="id-icon"/>
                        <p className="id-text">Resume</p>
                    </div>
                }
                </button>
                <button onClick = { ()=> {setSelected("Portfolio"), setActiveScroll("Portfolio")}}>
                {
                    activeScroll == "Portfolio" ?
                    <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <BusinessCenterOutlinedIcon className="id-icon text-sky-500"/>
                        <p className="text-sky-500 font-semibold transition-all duration-500 dark:text-white">Portfolio</p>
                    </div>
                    :
                    <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <BusinessCenterOutlinedIcon className="id-icon"/>
                        <p className="id-text">Portfolio</p>
                    </div>
                }
                </button>
                <button onClick = { ()=> {setSelected("Services"), setActiveScroll("Services")}}>
                {
                    activeScroll == "Services" ?
                    <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <EngineeringOutlinedIcon className="id-icon text-sky-500"/>
                        <p className="text-sky-500 font-semibold transition-all duration-500 dark:text-white">Services</p>
                    </div>
                    :
                    <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <EngineeringOutlinedIcon className="id-icon"/>
                        <p className="id-text">Services</p>
                    </div>
                }
                </button>
                <button onClick = { ()=> {setSelected("Contact"), setActiveScroll("Contact")}}>
                {
                    activeScroll == "Contact" ?
                    <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <MailOutlinedIcon className="id-icon text-sky-500"/>
                        <p className="text-sky-500 font-semibold transition-all duration-500 dark:text-white">Contact</p>
                    </div>
                    :
                    <div className="flex flex-row space-x-3 ml-8 group cursor-pointer">
                        <MailOutlinedIcon className="id-icon"/>
                        <p className="id-text">Contact</p>
                    </div>
                }
                </button>
        </div>
    </header>
    )
}
export default SectionSpan
