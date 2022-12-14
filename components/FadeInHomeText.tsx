import { useColorMode } from "../context/ColorModeContext";
import { useEffect, useState } from "react";
import Typed from 'react-typed';


interface pageProps {
    title: string,
    texts:string[]
}

const Fade = require("react-reveal/Fade")

const FadeInHomeText: React.FC<pageProps> = ({title, texts}) => {
    const { mode } = useColorMode()
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(true)
        }, 500)
        return () => clearInterval(interval)
      }, [] )
    
    return (
    <header className={`${mode === "dark" ? 'dark' : ''}`}>
        { fadeIn ? 
        <div className="flex items-center justify-center z-10 h-screen w-full">
            <div className="flex-col z-10 space-y-2 md:space-y-4 lg:space-y-6 origin-left transition-opacity ease-in duration-700 opacity-100 -mt-20">
            <p className="text-white font-bold text-2xl md:text-5xl lg:text-7xl z-10 ">
                {title}
            </p>
            <div className="flex flex-row">
                <p className="text-white font-semibold text-xl lg:text-3xl z-10 pr-2 lg:pr-3">
                {"I'm a"}
                </p>
                <Typed
                className="text-white text-xl lg:text-3xl z-10 font-semibold decoration-color underline underline-offset-8 lg:underline-offset-[16px]"
                strings={texts} typeSpeed={100} backSpeed={100} loop
                />
            </div>
            </div>
        </div>
        :
        <div className="flex items-center justify-center z-10 h-screen w-full">
            <div className="flex-col z-10 space-y-2 md:space-y-4 lg:space-y-6 transition-opacity ease-in duration-700 opacity-0 -mt-20">
                <p className="text-white font-bold text-2xl md:text-5xl lg:text-7xl z-10 ">
                    {title}
                </p>
                <div className="flex flex-row">
                <p className="text-white font-semibold text-xl lg:text-3xl z-10 pr-2 lg:pr-3">
                    {"I'm a"}
                </p>
                <Typed
                    className="text-white text-xl lg:text-3xl z-10 font-semibold decoration-color underline underline-offset-8 lg:underline-offset-[16px]"
                    strings={texts} typeSpeed={100} backSpeed={100} loop
                />
                </div>
            </div>
        </div>
        }
    </header>
    )
}
export default FadeInHomeText