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
    description: string,
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
    description,
    color,
    hoverColor,
    buttons,
    }) => {
        const { mode } = useColorMode()

        return (
            <div className={`${mode === "dark" ? 'dark' : ''} flex justify-center`}>
                <Fade bottom={true}> 
                    <div className='w-5/6 min-h-[400px] portfolio-card-bg rounded-3xl border shadow-2xl '>
                        <div className="flex flex-col md:flex-row w-full h-full">
                            <Link href={link}>
                                <a target="_blank" className="
                                md:w-2/5 w-full h-36 md:h-full 
                                bg-gray-200 dark:side-bg-dark animate-gradient-y !shadow-sm
                                md:rounded-l-3xl md:rounded-r-none rounded-t-3xl">
                                <Tooltip title="Open">
                                    <div className=
                                        {
                                            `h-full flex flex-row p-4 rounded-xl items-center justify-center 
                                            cursor-pointer ${color} ${hoverColor}
                                            md:hover:scale-110 px-1 transition-all ease-in-out duration-500 `
                                        }
                                    >
                                    <p className='italic text-3xl md:text-4xl'>{project}</p>
                                    </div>
                                </Tooltip>
                                </a>
                            </Link>
                            <div className="w-full md:w-3/5 h-full">
                            <div className="flex flex-col pl-8 p-4 space-y-8 justify-between">

                                <p className={`pt-4 flex font-bold font-mono leading-tight text-3xl ${color} `}>
                                    {title}
                                </p>
                                <p className="text-black dark:text-white leading-relaxed font-sans pr-4">
                                    {text}
                                </p>

                                <p className={`flex font-bold font-mono leading-tight text-3xl ${color} `}>
                                    Description
                                </p>

                                <p className="text-black dark:text-white leading-relaxed font-sans pr-4">
                                    {description}
                                </p>
                                <span className="space-y-4 py-8 w-full">
                                    {
                                        buttons.map((button, i) => {
                                            return (
                                                <div key={i} className={`font-medium w-40 leading-tight text-center text-xl portfolio-card-button rounded-lg p-2 ${color} ${hoverColor} cursor-pointer`}>
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