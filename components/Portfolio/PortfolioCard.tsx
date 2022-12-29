import { Tooltip } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { useColorMode } from '../../context/ColorModeContext';

const Fade = require("react-reveal/Fade")

type button = {
    text:string,
    link:string,
}

interface pageProps {
    link: string
    project: string,
    title: string,
    text: string,
    color:string,
    hoverColor:string,
    buttons: button[],
}

const PortfolioCard: React.FC<pageProps> = ({
    link,
    title,
    project,
    text,
    color,
    hoverColor,
    buttons,
    }) => {
        const { mode } = useColorMode()

        return (
            <div className={`${mode === "dark" ? 'dark' : ''} flex justify-center`}>
                <Fade bottom={true} duration={700}> 
                    <div className='w-4/6 min-h-[400px] portfolio-card-bg rounded-3xl border shadow-2xl '>
                        <div className="flex flex-row w-full h-full">
                        <Link href={link}>
                            <a target="_blank" className="
                            w-2/5 h-full 
                            side-bg dark:side-bg-dark animate-gradient-x !shadow-sm
                            rounded-l-3xl">
                            <Tooltip title="Open">
                                <div className=
                                    {
                                        `h-full flex flex-row p-4 rounded-xl items-center justify-center 
                                        cursor-pointer ${color} ${hoverColor}
                                        md:hover:scale-110 px-1 transition-all ease-in-out duration-500 `
                                    }
                                >
                                <p className='italic text-2xl md:text-4xl'>{project}</p>
                                </div>
                            </Tooltip>
                            </a>
                            </Link>
                            <div className="w-3/5 h-full">
                            <div className="flex flex-col pl-8 p-4 space-y-4 justify-between">

                                <p className={`flex font-bold font-mono leading-tight text-3xl text-white dark:${color}`}>
                                    {title}
                                </p>
                                <p className="text-white font-medium font-poppins">
                                    {text}
                                </p>
                                <span className="space-y-4 lg:pt-10">
                                    {
                                        buttons.map((button, i) => {
                                            return (
                                                <div key={i} className={`font-medium w-24 md:w-32 lg:w-40 leading-tight text-center text-xl portfolio-card-button rounded-lg p-2 ${color} ${hoverColor} cursor-pointer`}>
                                                    <Link href={button.link}>
                                                        <a target="_blank">
                                                            {button.text}
                                                        </a>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </span>
                            </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        );
};

export default PortfolioCard;