import { Button, Modal, Tooltip } from '@mui/material';
import Image from 'next/image'
import { useState } from 'react';
import { useColorMode } from '../../context/ColorModeContext';
import Bullet from './Bullet';
import ProgressBar from './ProgressBar';

import portrait from '../../public/portrait.jpg'
import Fact from './Fact';

const Fade = require("react-reveal/Fade")

type points = {
    title: string,
    info: string,
} 

type facts = {
    icon: React.ReactElement<any, any>,
    titleMark: string,
    title: string,
    info: string,
} 

type skills = {
    title: string,
    titleSecond?: string,
    percentage: string,
    percentageSecond?: string,
} 

interface pageProps {
    bio: string,
    title: string,
    info: string,
    quote: string,
    quoteAuthor: string,
    points: points[],
    facts: facts[],
    skills: skills[],
}

const AboutInfo: React.FC<pageProps> = ({
        bio,
        title,
        info,
        quote,
        quoteAuthor,
        points,
        facts,
        skills,
    }) => {

    const { mode } = useColorMode()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      
    return(
        <div className={`${mode === "dark" ? 'dark' : ''}`}>
            <div className="flex w-full bg-white" id = {"About"}>
                <div className='flex flex-col bg-white space-y-8 justify-center lg:ml-72 '>
                    <Fade bottom={true} duration={1000}>
                        <p className="w-full flex justify-center header-text">ABOUT</p>
                    </Fade>
                    <div className="w-full flex justify-center">
                        <Fade bottom={true} duration={1000}>
                            <p className="text-center w-4/6 body-text dark:dark-body-text pt-6 lg:pt-0 pb-20 lg:pb-10">
                            {bio} 
                            </p>
                        </Fade>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-4/6 justify-center flex flex-col md:flex-row md:space-x-6">
                            <Fade left={true}>
                                    <Button onClick={handleOpen}>
                                        <Tooltip title="View.">
                                        <div className="flex group max-h-[600px] max-w-[400px] transition-all duration-700 ease-in-out pb-10">
                                                        <Image
                                                        className='group'
                                                        src={portrait} 
                                                        height={600}
                                                        width={400}
                                                        placeholder="blur"
                                                        alt=''
                                                        priority            
                                                        />
                                        </div>
                                        </Tooltip>
                                    </Button>
                                    <Modal open={open} onClose={handleClose}>
                                            <div className="z-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 transition-all duration-700 ease-in-out
                                            md:h-[480px] md:w-[480px] h-[340px] w-[340px] min-w-[340px] min-h-[340px]">
                                                <Image
                                                className='group'
                                                src={portrait} 
                                                placeholder="blur"
                                                alt=''
                                                priority            
                                                />
                                        </div>
                                    </Modal>
                                    
                                <div className="flex flex-col space-y-6">
                                    <header className="sub-header-text">
                                        {title}
                                    </header>
                                    <p className='body-text dark:dark-body-text'>
                                        {info}
                                    </p>
                                    <div className="flex flex-row space-x-20 body-text dark:dark-body-text">
                                        <div className="flex flex-col space-y-3">
                                            {
                                                points.map((point, index) => (
                                                    <Bullet title={point.title} text={point.info} key={index}/>
                                                ))
                                            }
                                        </div>  
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    <Fade>
                        <p className='text-center body-text dark:dark-body-text italic'>
                            {quote}
                        </p>
                        <p className='text-center body-text dark:dark-body-text italic'>
                            {quoteAuthor}
                        </p>
                    </Fade>

                    <Fade bottom={true} duration={1000}>
                        <p className="w-full flex justify-center header-text"> Facts</p>
                    </Fade>
                    
                    <Fade bottom={true} duration={1000}>
                        <div className="w-full flex justify-center pb-16">
                            <div className='flex ml-12 flex-col justify-center space-y-10 md:space-y-0 md:flex-row  lg:space-x-20 pt-16'>
                            {
                                facts.map((fact, index) => (
                                    <Fact
                                        icon={fact.icon}
                                        titleMark={fact.titleMark}
                                        title={fact.title}
                                        info={fact.info}
                                        key={index}
                                    />
                                ))
                            }
                            </div>
                        </div>
                    </Fade>

                    <Fade bottom={true} duration={1000}>
                        <p className="w-full flex justify-center header-text pb-16"> Skills</p>
                    </Fade>

                    {
                        skills.map((skill, index) => (
                            <div className='w-full flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-20 justify-center' key={index}>
                                <ProgressBar title={skill.title} percent={skill.percentage}/>
                                {skill.titleSecond ? <ProgressBar title={skill.titleSecond} percent={skill.percentageSecond}/> :null}
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
export default AboutInfo;