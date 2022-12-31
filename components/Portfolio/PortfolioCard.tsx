import { Tooltip } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image'
import { useColorMode } from '../../context/ColorModeContext';

import portrait from '../../public/tt.png';

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
                    <div className='w-5/6 min-h-[400px] portfolio-card-bg rounded-3xl shadow-2xl '>
                        <div className="flex flex-col md:flex-row w-full h-full">
                            <div className="md:w-2/5 w-full md:h-full !shadow-sm md:rounded-l-3xl md:rounded-r-none rounded-t-3xl">
                                <Link href={link}>
                                    <a target="_blank">
                                        <Tooltip title="Open">
                                            <div className=
                                                {
                                                    `h-full flex flex-row p-4 rounded-xl items-center justify-center 
                                                    cursor-pointer ${color} ${hoverColor}
                                                    md:hover:scale-110 px-1 transition-all ease-in-out duration-500`
                                                }
                                            >
                                                <p className='italic text-3xl md:text-4xl'>{project}</p>
                                            </div>
                                        </Tooltip>
                                    </a>
                                </Link>
                            </div>
                            <div className="w-full md:w-3/5 h-full">
                            <div className="flex flex-col pl-8 p-4 space-y-8 justify-between">

                                <p className={`pt-4 flex sub-header-text `}>
                                    {title}
                                </p>
                                <p className="text-black dark:text-white leading-relaxed pr-4">
                                    {text}
                                </p>

                                <p className={`flex sub-header-text `}>
                                    Description
                                </p>

                                <p className="text-black dark:text-white leading-relaxed pr-4">
                                    {description}
                                </p>
                                <span className="space-y-4 py-8 w-full">
                                    {
                                        buttons.map((button, i) => {
                                            return (
                                                <div key={i} className={`font-medium w-40 leading-tight text-center text-xl portfolio-card-button rounded-lg p-2 cursor-pointer`}>
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