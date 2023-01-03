import React, { useEffect, useState } from 'react';
import { useColorMode } from '../context/ColorModeContext';
import IconLink from './SideBar/IconLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';

const Fade = require("react-reveal/Fade")

const Footer = () => {
    const { mode } = useColorMode()
    const [loading, setLoading] = useState(false);
    const [formState, setFormState] = useState({ name: '', email: '' , message: '', honeypot:''});
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      let timeoutId: NodeJS.Timeout;
      if (isVisible) {
        timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }
      return () => {
        clearTimeout(timeoutId);
      };
    }, [isVisible]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
      }
  
    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formState.honeypot || formState.email === '') {
            return;
        }

        setLoading(true);

        const emailParam = {
            subject: `Hello, from ${formState.name}, at email:${formState.email}!`,
            text:  formState.message,
        };

        const res =  await fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(emailParam)
        });

        const { error } = await res.json();
        
        if (error) {
            setLoading(false);
            console.log("Contact error: ", error);
            return;
        }

        setIsVisible(true);
        setLoading(false);
        setFormState({ name: '', email: '', message: '', honeypot:'' });
    }

    return (
        <div className={`${mode === "dark" ? 'dark' : ''}`}>
                <div id = {"Contact"}>
                    {
                        isVisible ? (
                            <Fade bottom={true}>
                                <div className="fixed -right-5 md:ml-72 bottom-0 lg:bottom-20 mx-auto inset-x-0 z-50 h-24 w-48 bg-slate-600 text-white text-center flex items-center rounded-t-lg md:rounded-lg  bg-color">
                                    Email submitted successfully!
                                </div>
                            </Fade>
                        ) : null
                    }
                    <div className='bg-gray-400 dark:bg-zinc-800 h-full w-full flex flex-col border-t-4 border-sky-600'>
                        <div className='w-full h-full space-y-6 lg:pl-72'>
                            <p className="w-full flex justify-center header-text !text-white py-16">CONTACT</p>
                            <div className="container px-5 mx-auto ">
                                <div className="flex flex-col text-center w-full mb-12">
                                    <div className="lg:w-1/2 md:w-2/3 mx-auto space-y-6">
                                        <form  onSubmit={handleSubmit} className="flex flex-wrap -m-2">
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                <label className="leading-7 text-white">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    maxLength={50}
                                                    minLength={2}
                                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                                </div>
                                            </div>
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                <label
                                                    className="leading-7 text-white"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                />
                                                </div>
                                            </div>
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                <label className="leading-7 text-white">
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formState.message}
                                                    onChange={handleChange}
                                                    maxLength={500}
                                                    minLength={2}
                                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                ></textarea>
                                                </div>
                                            </div>
                                            <div className="hidden">
                                                <label>Leave this field blank</label>
                                                <input type="text" name="honeypot" />
                                            </div>
                                            <div className="p-2 w-full pb-8">
                                                <button type="submit" className="flex mx-auto text-white bg-sky-600 border-0 py-2 px-8 focus:outline-none dark:hover:bg-sky-500 hover:bg-sky-500 rounded text-lg">
                                                    {
                                                        !loading ? 
                                                            "submit"
                                                        :
                                                        <div className="border-t-transparent border-solid animate-spin rounded-full border-white border-2 h-8 w-8"></div>
                                                    }
                                                </button>
                                            </div>
                                        </form>
                                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"/>

                                        <div className='flex flex-col space-y-16 pb-8'>
                                            <div className="flex flex-row space-x-1">
                                                <LocationOnIcon sx={{ fontSize: 28 }} className="text-sky-600 "/>
                                                <div className="flex flex-row items-end">
                                                    <p className="text-lg text-white">
                                                        Location:
                                                    </p>
                                                    <p className=" text-white pl-1 text-lg">
                                                        Vancouver, Canada
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex flex-row space-x-1">
                                                <MailIcon sx={{ fontSize: 28 }} className="text-sky-600"/>
                                                <div className="flex flex-row items-end">
                                                    <p className="text-lg text-white">
                                                        Email:
                                                    </p>
                                                    <p className="text-white pl-1 text-lg">
                                                        Michael.v.y.gergely@gmail.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-2 w-full mt-8 border-t border-gray-200 text-center"/>

                                        <p className="w-full flex justify-center header-text !text-white pb-16">Socials</p>
                                        <span className="flex z-10 flex-row space-x-8 justify-center pb-8">
                                            <IconLink 
                                                link={"https://www.youtube.com/channel/UCrKtXjuk-JANccPjEu4cxwQ"}
                                                icon={<YouTubeIcon className="h-6 w-6"/>}
                                                title={"Youtube"}
                                            />

                                            <IconLink 
                                                link={"https://github.com/forgetscode/your_site"}
                                                icon={<GitHubIcon className="h-6 w-6"/>}
                                                title={"GitHub"}
                                            />

                                            <IconLink 
                                                link={"https://www.facebook.com/mike.gergely/"}
                                                icon={<FacebookIcon className="h-6 w-6"/>}
                                                title={"Facebook"}
                                            />

                                            <IconLink 
                                                link={"https://www.linkedin.com/in/michael-gergely-2407ba250/?originalSubdomain=ca"}
                                                icon={<LinkedInIcon className="h-6 w-6"/>}
                                                title={"LinkedIn"}
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer className="bg-zinc-900 text-white py-4">
                            <div className="mx-auto flex flex-wrap items-center justify-between px-32 py-2">
                                <div className="w-full md:w-4/12 px-4 text-center md:text-left">
                                    <p className="text-gray-400 text-xs lg:pl-72">
                                        Copyright 2023 - All rights reserved
                                    </p>
                                </div>
                                <div className="w-full md:w-8/12 px-4">
                                    <ul className="flex flex-wrap items-center justify-center md:justify-end text-center text-xs">
                                        <li>
                                        <a className="text-gray-400 hover:text-white" href="#">Privacy Policy</a>
                                        </li>
                                        <li className="mx-3">
                                        <a className="text-gray-400 hover:text-white" href="#">Terms of Use</a>
                                        </li>
                                        <li>
                                        <a className="text-gray-400 hover:text-white" href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
        </div>
    );
};

export default Footer;
function emailAPIKeyExpired(arg0: string, arg1: string, arg2: string, arg3: string) {
    throw new Error('Function not implemented.');
}

