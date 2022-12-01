import Image from 'next/image'
import { useColorMode } from '../context/ColorModeContext';

const AboutInfo = () => {
    const { mode } = useColorMode()
    return(
        <div className={`${mode === "dark" ? 'dark' : ''}`}>
            <div id = {"About"} className="w-full flex flex-col bg-white space-y-8">
                <p className="w-full flex justify-center pt-10 text-3xl"> About</p>
                <div className="w-full flex justify-center">
                    <p className="text-center w-4/6">
                    {`
                    Fascinated by the bleeding edge, after graduating University with a Bachelors in
                    Computer Science I pursued experience in React, Cloud services, and Blockchain technology. I am currently engrossed with AI image generation
                    and am actively attempting creative ways to combine my skills and showcase my knowledge.
                    `} 
                    </p>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-4/6 justify-center flex flex-col md:flex-row md:space-x-6">
                        <div className="relative flex h-[340px] w-[340px] min-w-[340px] min-h-[340px] origin-left origin-[33%_75%]">
                            <Image
                            src="/about.png"
                            alt=""
                            layout="fill"
                            quality={100}                
                            />
                        </div>
                        <div className="flex flex-col space-y-6">
                        <header className="text-2xl text-gray-900 font-semibold pt-6 md:pt-0">
                            Web Developer & Full Stack Engineer
                        </header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <div className="flex flex-row space-x-20">
                            <div className="flex flex-col">

                            <div className="text-blue flex flex-row space-x-2"> 
                                <p> {`>`} </p>
                                <p className="font-bold">Title: </p>
                                <p className=""> subject </p>
                            </div>
                            <div className="text-blue flex flex-row space-x-2"> 
                                <p> {`>`} </p>
                                <p className="font-bold">Title: </p>
                                <p className=""> subject </p>
                            </div>
                            <div className="text-blue flex flex-row space-x-2"> 
                                <p> {`>`} </p>
                                <p className="font-bold">Title: </p>
                                <p className=""> subject </p>
                            </div>
                            <div className="text-blue flex flex-row space-x-2"> 
                                <p> {`>`} </p>
                                <p className="font-bold">Title: </p>
                                <p className=""> subject </p>
                            </div>

                            </div>  
                            <div className="flex-col">
                            <div className="text-blue flex flex-row space-x-2"> 
                                <p> {`>`} </p>
                                <p className="font-bold">Title: </p>
                                <p className=""> subject </p>
                            </div>
                            <div className="text-blue flex flex-row space-x-2"> 
                                <p> {`>`} </p>
                                <p className="font-bold">Title: </p>
                                <p className=""> subject </p>
                            </div>
                            <div className="text-blue flex flex-row space-x-2"> 
                                <p> {`>`} </p>
                                <p className="font-bold">Title: </p>
                                <p className=""> subject </p>
                            </div>
                            <div className="text-blue flex flex-row space-x-2"> 
                                <p> {`>`} </p>
                                <p className="font-bold">Title: </p>
                                <p className=""> subject </p>
                            </div>
                            </div>  
                        </div>
                        <p>
                            {`Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. 
                            Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. 
                            Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. 
                            Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.`}
                        </p>
                        </div>
                    </div>
                </div>

                <p className="w-full flex justify-center pt-10 text-3xl"> Facts</p>
                <div className="w-full flex justify-center">
                    <p className="text-center w-4/6">
                    {`
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
                    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                    Quia fugiat sit in iste officiis commodi quidem hic quas.
                    `} 
                    </p>
                </div>
                
                <div className="w-full flex justify-center pb-20">
                    <div className='flex justify-between flex-col lg:flex-row lg:space-x-20'>
                        <div className='flex flex-col'>
                            <p className='font-bold'> Icon</p>
                            <p className='font-semibold text-3xl'>X</p>
                            <p className='w-20'> Officiis eligendi itaque</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'> Icon</p>
                            <p className='font-semibold text-3xl'>X</p>
                            <p className='w-20'> Officiis eligendi itaque</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'> Icon</p>
                            <p className='font-semibold text-3xl'>X</p>
                            <p className='w-20'> Officiis eligendi itaque</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold'> Icon</p>
                            <p className='font-semibold text-3xl'>X</p>
                            <p className='w-20'> Officiis eligendi itaque</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutInfo;